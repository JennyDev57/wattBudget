import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('WattBudget API')
    .setDescription('The WattBudget API description')
    .setVersion('1.0')
    .addBearerAuth()
    //.addTag('wattbudget')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.use(
    '/wattbudget-api',
    apiReference({
      content: document,
    }),
  );

  console.log(`API is running on port ${port}`);
  await app.listen(port);
}
bootstrap();
