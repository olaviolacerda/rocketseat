import expressPino from 'express-pino-logger';
import pino from 'pino';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });

export { logger, expressLogger };
