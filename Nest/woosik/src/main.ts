import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3004)
  .then(()=>{console.log(`server Running on 3010`)})
}
bootstrap();
