import { createLogger, format, transports } from 'winston';

// Import Functions
const { File, Console } = transports;

// Init Logger
const logger = createLogger({
  level: 'info',
  format: format.json()
});

const fileFormat = format.combine(format.timestamp(), format.json());
const errTransport = new File({
  filename: './logs/error.log',
  format: fileFormat,
  level: 'error'
});
const infoTransport = new File({
  filename: './logs/combined.log',
  format: fileFormat
});
const debugTransport = new File({
  filename: './logs/debug.log',
  format: fileFormat,
  level: 'debug'
});

logger.add(errTransport);
logger.add(debugTransport);
logger.add(infoTransport);

if (process.env.NODE_ENV !== 'production') {
  const consoleTransport = new Console({
    format: format.combine(format.colorize(), format.simple()),
    level: 'debug'
  });
  logger.add(consoleTransport);
}

export default logger;
