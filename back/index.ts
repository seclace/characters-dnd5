import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
dotenv.config();

import { AppModule } from '@app/app.module';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT || 3000;

export async function startServer() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}

startServer().catch(console.error);
