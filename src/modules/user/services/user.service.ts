import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, FindOneOptions, DeepPartial, SaveOptions} from "typeorm";

import {User} from "../entities";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
  }

  findOne(options: FindOneOptions<User>): Promise<User> {
    return this.userRepository.findOne(options);
  }

  create(partial: DeepPartial<User>): Promise<User> {
    const user = this.userRepository.create(partial);

    return this.userRepository.save(user);
  }

  save(entity: DeepPartial<User>, options?: SaveOptions): Promise<User> {
    return this.userRepository.save(entity, options);
  }
}