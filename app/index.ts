import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from '@app/app.module';

const port = process.env.PORT || 3000;

export async function startServer() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(port);
}

startServer()
  .catch(console.error);
