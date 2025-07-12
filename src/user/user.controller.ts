import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('google')
  async googleLogin(@Body() body: CreateUserDto) {
    const user = await this.userService.findOrCreate(body);
    return { success: true, user };
  }
}