import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";

import {UserModule, User} from "@modules/user";
import {AuthModule, RefreshSession} from "@modules/auth";
import {databaseConfig, jwtConfig} from "./config";

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      load: [databaseConfig, jwtConfig],
      isGlobal: true,
      envFilePath: ".env.development",
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          type: "postgres",
          host: configService.get<string>("database.host"),
          port: configService.get<number>("database.port"),
          username: configService.get<string>("database.username"),
          password: configService.get<string>("database.password"),
          database: configService.get<string>("database.name"),
          synchronize: configService.get<boolean>("database.synchronize"),
          entities: [User, RefreshSession]
        }),
      },
    ),
  ],
})
export class AppModule {
}
