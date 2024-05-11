import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const apiDescription: string =
  "Welcome to the 00CACTUS API documentation. This resource is exclusively for developers within the 00CACTUS team. Here, you'll find detailed information on how to interact with our platform, including managing products, orders, and user data.";

const config = new DocumentBuilder()
  .setTitle('00CACTUS API')
  .setDescription(apiDescription)
  .setVersion('1.0')
  .build();

export function setupSwagger(app: INestApplication) {
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);
}
