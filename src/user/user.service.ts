import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

  async findOrCreate(dto: CreateUserDto): Promise<User> {
    let user = await this.repo.findOne({ where: { email: dto.email } });
    if (!user) {
      user = this.repo.create(dto);
      await this.repo.save(user);
    }
    return user;
  }
}