import { NestFactory } from '@nestjs/core';
import { FeriadoModule } from './modules/feriados.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(FeriadoModule);

  const config = new DocumentBuilder()
    .setTitle('API de Feriados')
    .setDescription('Consulta e cadastro de feriados nacionais, estaduais e municipais')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log(process.env.PORT);
  console.log(process.env.DB_USERNAME);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
