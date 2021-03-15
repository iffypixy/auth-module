import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

import {UserPublicData} from "../interfaces";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    nullable: false,
    length: 50,
  })
  firstName: string;

  @Column({
    type: "varchar",
    nullable: false,
    length: 50,
  })
  lastName: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
    length: 25,
  })
  login: string;

  @Column({
    type: "varchar",
    nullable: false,
    length: 100
  })
  password: string;

  get public(): UserPublicData {
    const {id, firstName, lastName, login} = this;

    return {
      id, firstName, lastName, login
    };
  }
}

