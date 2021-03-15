import {IsAlpha, IsAlphanumeric, IsString, Length} from "class-validator";

export class RegisterDto {
  @IsAlpha("en-US", {message: "First name must have only letters"})
  @Length(2, 50)
  firstName: string;

  @IsAlpha("en-US", {message: "Last name must have only letters"})
  @Length(2, 50)
  lastName: string;

  @IsAlphanumeric("en-US", {message: "Login must have only letters and numbers"})
  @Length(4, 25)
  login: string;

  @IsString({message: "Password must be a string"})
  @Length(8, 100)
  password: string;

  @IsString({message: "Fingerprint must be a string"})
  @Length(5, 150)
  fingerprint: string;
}