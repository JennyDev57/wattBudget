import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  const port = process.env.PORT || 5000;
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    credentials: true,
  });
  console.log(`API is running on port ${port}`);
  await app.listen(port);
}
bootstrap();
