import { DataSource } from "typeorm";
import { UserTypeormEntity } from "../typeorm/entities/User";

export class UserRepository {
  constructor(private typeormDataSource: DataSource) {}
  async getAllUsers() {

  }
}
