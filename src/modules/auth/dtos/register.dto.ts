import {IsAlphanumeric, IsString, Length} from "class-validator";

export class RegisterDto {
  @IsAlphanumeric("en-US", {
    message: "Username must have only letters and numbers"
  })
  @Length(4, 25)
  username: string;

  @IsString({
    message: "Password must be a string"
  })
  @Length(8, 100)
  password: string;

  @IsString({
    message: "Fingerprint must be a string"
  })
  @Length(5, 150)
  fingerprint: string;
}