import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class Swagger {
  static apiDescription: string =
    "Welcome to the 00CACTUS API documentation. This resource is exclusively for developers within the 00CACTUS team. Here, you'll find detailed information on how to interact with our platform, including managing products, orders, and user data.";
  static config = new DocumentBuilder()
    .setTitle('00CACTUS API')
    .setDescription(this.apiDescription)
    .setVersion('1.0')
    .build();
  static setup(app) {
    const document = SwaggerModule.createDocument(app, this.config);
    SwaggerModule.setup('api/v1', app, document);
  }
}
