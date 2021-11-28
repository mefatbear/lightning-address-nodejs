import axios, { AxiosInstance } from 'axios';

import { SocksProxyAgent } from 'socks-proxy-agent';
import { URL } from 'url';

import { LnrpcAddInvoiceResponse, LnrpcInvoice } from './types';

const BASE_URL = process.env.LNADDR_LND_REST_BASE_URL;
const MACAROON = process.env.LNADDR_LND_REST_MACAROON_HEX;
const TOR_PROXY_URL = process.env.LNADDR_TOR_PROXY_URL || 'socks5h://localhost:9050';

if (!BASE_URL || !MACAROON || !TOR_PROXY_URL) {
  throw new Error('Misconfigured Environment Variables');
}

interface LightningAPIArgs {
  baseUrl: string;
  macaroon: string;
  proxy: string;
}

class LightningAPI {
  baseUrl: string;
  macaroon: string;
  axios: AxiosInstance;
  agent: SocksProxyAgent;
  proxy: string;

  constructor(args: LightningAPIArgs) {
    this.baseUrl = args.baseUrl;
    this.macaroon = args.macaroon;
    this.proxy = args.proxy;

    const socks = new URL(args.proxy);

    this.agent = new SocksProxyAgent({
      hostname: socks.hostname,
      port: socks.port,
      protocol: socks.protocol,
      tls: { rejectUnauthorized: false }
    });

    this.axios = axios.create({
      baseURL: args.baseUrl.endsWith('/') ? args.baseUrl : `${args.baseUrl}/`,
      headers: {
        'Grpc-Metadata-macaroon': args.macaroon
      },
      httpAgent: this.agent,
      httpsAgent: this.agent
    });
  }

  async lightningAddInvoice(createInvoiceArgs: LnrpcInvoice): Promise<LnrpcAddInvoiceResponse> {
    const resp = await this.axios.post<LnrpcAddInvoiceResponse>(`v1/invoices`, createInvoiceArgs);
    const invoice = resp.data;
    return invoice;
  }
}

export const lightningApi = new LightningAPI({
  baseUrl: BASE_URL,
  macaroon: MACAROON,
  proxy: TOR_PROXY_URL
});
