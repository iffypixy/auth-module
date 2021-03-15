import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, FindConditions, FindOneOptions, DeepPartial} from "typeorm";

import {User} from "../entities";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
  }

  findOne(conditions?: FindConditions<User>, options?: FindOneOptions<User>): Promise<User> {
    return this.userRepository.findOne(conditions, options);
  }

  create(options: DeepPartial<User>): Promise<User> {
    const user = this.userRepository.create(options);

    return this.userRepository.save(user);
  }
}