import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(
    @Body() { email, name, password }: CreateUserDto,
  ): Promise<User> {
    const createUser = await this.userService.create({
      email,
      name,
      password,
    });

    return createUser;
  }
}
