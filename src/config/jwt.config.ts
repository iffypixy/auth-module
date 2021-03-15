import {registerAs} from "@nestjs/config";

export const jwtConfig = registerAs("jwt", () => ({
  secret: process.env.JWT_SECRET,
  accessToken: {
    expiresIn: +process.env.JWT_ACCESS_TOKEN_EXPIRES_IN
  },
  refreshToken: {
    expiresIn: +process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
  }
}));