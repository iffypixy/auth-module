import {NestFactory} from "@nestjs/core";
import * as helmet from "helmet/dist";
import * as cookieParser from "cookie-parser";

import {AppModule} from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.use(cookieParser());

  app.setGlobalPrefix("/api");

  await app.listen(3000);
}

bootstrap();
