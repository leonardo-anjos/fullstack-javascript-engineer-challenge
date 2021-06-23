import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class WinstonLoggerService implements LoggerService {
  log(message: any, context?: string) {
    console.debug(message);
  }

  error(message: any, trace?: string, context?: string) {
    console.error(message);
  }

  warn(message: any, context?: string) {
    console.warn(message);
  }
}
