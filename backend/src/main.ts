import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiDescription: string =
    "Welcome to the 00CACTUS API documentation. This resource is exclusively for developers within the 00CACTUS team. Here, you'll find detailed information on how to interact with our platform, including managing products, orders, and user data.";
  const config = new DocumentBuilder()
    .setTitle('00CACTUS API')
    .setDescription(apiDescription)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.setGlobalPrefix('api/v1');
  await app.listen(5000);
}

bootstrap();
