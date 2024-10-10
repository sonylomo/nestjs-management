import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

const fakeUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'password',
  },
  {
    id: 2,
    username: 'jack',
    password: 'password123',
  },
];

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUser({ username, password }: AuthDto) {
    // fakeUsers is a placeholder for a usersService
    const findUser = fakeUsers.find((user) => user.username === username);
    if (!findUser) throw new UnauthorizedException();

    if (password === findUser.password) {
      const { password, ...user } = findUser; // eslint-disable-line @typescript-eslint/no-unused-vars
      return this.jwtService.sign(user);
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
