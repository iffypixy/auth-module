import {Request} from "express";

import {User} from "@modules/user";

export interface ExtendedRequest extends Request {
  user: User;
}