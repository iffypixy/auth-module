import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";

import {UserPublicData} from "../interfaces";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
    length: 25,
  })
  username: string;

  @Column({
    type: "timestamp",
    nullable: false
  })
  lastSeen: Date;

  @Column({
    type: "varchar",
    nullable: false,
    length: 100
  })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  get public(): UserPublicData {
    const {id, username} = this;

    return {
      id, username
    };
  }
}

