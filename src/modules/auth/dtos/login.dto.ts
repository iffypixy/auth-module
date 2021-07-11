import {IsString} from "class-validator";

export class LoginDto {
  @IsString({
    message: "Username must be a string"
  })
  username: string;

  @IsString({
    message: "Password must be a string"
  })
  password: string;

  @IsString({
    message: "Fingerprint must be a string"
  })
  fingerprint: string;
}