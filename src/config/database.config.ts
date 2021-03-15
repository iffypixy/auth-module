import {registerAs} from "@nestjs/config";

export const databaseConfig = registerAs("database", () => ({
  host: process.env.DATABSASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  name: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNCHRONIZE
}));