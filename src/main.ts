/**
 * ! Esta aplicação segue arquitetura MVC
 *
 *
 * Conceito no âmbito NestJs em: ( https://docs.nestjs.com/techniques/mvc )
 *
 */

import { NestFactory } from '@nestjs/core'; //4security
import { AppModule } from './app.module';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { join } from 'path';

// Inicialização em async
async function bootstrap() {
  const PORT = 3000;

  console.table({
    ROOT: __dirname,
    PORT: PORT,
    ' URI': `http://localhost:${3000}/`,
  });

  // Constante recebe instância da aplicação Nest usando o adaptador Fastify ( https://fastify.dev/ )
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, // Módulo principal em './app.module'
    new FastifyAdapter(),
  );

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'), // Diretório de arquivos estáticos
    prefix: '/public/',
  });

  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'), // Definindo Handlebars como mecanismo de template
    },
    templates: join(__dirname, '..', 'views'),
  });

  await app.listen(PORT); // init
}

bootstrap();
