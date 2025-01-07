import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
   // Обслуживание статических файлов из папки 'teachersImgs'
   app.useStaticAssets(join(__dirname, '..', 'teachersImgs'));
  await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
