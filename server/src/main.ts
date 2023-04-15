import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from "../config";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";


async function bootstrap() {
  const PORT : number = env.serverPort || 3000
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
      .setTitle('Cats example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
  });
}
bootstrap();
