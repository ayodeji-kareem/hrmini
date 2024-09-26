import * as config from 'config';
import * as express from 'express';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';

const expressApp = express();

async function bootstrap() {
  const dbConfig = config.get('server');
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  app.enableCors();
  await app.init();

  // Normal NestJS listen method for local development (non-serverless)
  if (dbConfig.isOffline) {
    await app.listen(dbConfig.port);
    console.log(`Application has started on: ${await app.getUrl()}`);
  }
}
bootstrap();

// Exporting the handler for serverless use in Netlify
export const handler = serverlessExpress({ app: expressApp });

