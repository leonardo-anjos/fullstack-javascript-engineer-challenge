import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import * as express_status_monitor from 'express-status-monitor';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { WinstonLoggerService } from './winston-logger/winston-logger.service';

const pjson = require('../package.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('user manager system')
    .setDescription('the users api description')
    .setVersion('1.0')
    .addTag('users')
    .setVersion(pjson.version)
    .setContact("Leonardo Anjos", "", "antonioleonardoanjos@gmail.com")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  app.useLogger(app.get(WinstonLoggerService));
  app.use(helmet());
  app.use(compression());
  app.enableCors();
  app.use(express_status_monitor());
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
    skipMissingProperties: false,
    dismissDefaultMessages: true,
    validationError: {
      target: false,
      value: false
    }
  }));

  await app.listen(3000);
}
bootstrap();
