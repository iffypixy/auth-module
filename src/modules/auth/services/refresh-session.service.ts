import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeepPartial, FindConditions, FindOneOptions, Repository} from "typeorm";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";

import {RefreshSession} from "../entities";

@Injectable()
export class RefreshSessionService {
  constructor(
    @InjectRepository(RefreshSession)
    private refreshSessionRepository: Repository<RefreshSession>
  ) {
  }

  create(partial: DeepPartial<RefreshSession>): Promise<RefreshSession> {
    const session = this.refreshSessionRepository.create(partial);

    return this.refreshSessionRepository.save(session);
  }

  delete(criteria: FindConditions<RefreshSession>): Promise<DeleteResult> {
    return this.refreshSessionRepository.delete(criteria);
  }

  findOne(options: FindOneOptions<RefreshSession>): Promise<RefreshSession> {
    return this.refreshSessionRepository.findOne(options);
  }
}