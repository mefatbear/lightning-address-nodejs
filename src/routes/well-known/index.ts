import { Router } from 'express';
import crypto from 'crypto';

import { lightningApi } from '../../shared/lnd/api';
import logger from '../../shared/logger';

const DOMAIN = process.env.LNADDR_DOMAIN;

const router = Router();

if (!DOMAIN) {
  throw new Error('Missing LNADDR_DOMAIN env variable');
}

router.get('/lnurlp/:username', async (req, res) => {
  const username = req.params.username;

  logger.info('Lightning Address Request', req.params);

  if (!username) {
    return res.status(404).send('Username not found');
  }

  const identifier = `https://${DOMAIN}/.well-known/lnurlp/${username}`;
  const metadata = [
    ['text/identifier', identifier],
    ['text/plain', `Sats for ${username}!`]
  ];

  if (req.query.amount) {
    const msat = req.query.amount;

    try {
      logger.debug('Generating LND Invoice');
      const invoice = await lightningApi.lightningAddInvoice({
        value_msat: msat as string,
        description_hash: crypto
          .createHash('sha256')
          .update(JSON.stringify(metadata))
          .digest('base64')
      });
      logger.debug('LND Invoice', invoice);

      lightningApi.sendWebhookNotification(invoice);

      return res.status(200).json({
        status: 'OK',
        successAction: { tag: 'message', message: 'Thank You!' },
        routes: [],
        pr: invoice.payment_request,
        disposable: false
      });
    } catch (error) {
      logger.error('Error creating Invoice', error);
      return res.status(500).json({ status: 'ERROR', reason: 'Error generating invoice' });
    }
  }

  // No amount present, send callback identifier
  return res.status(200).json({
    status: 'OK',
    callback: identifier,
    tag: 'payRequest',
    maxSendable: 250000000,
    minSendable: 1000,
    metadata: JSON.stringify(metadata),
    commentsAllowed: 0
  });
});

export { router as wellknown };
