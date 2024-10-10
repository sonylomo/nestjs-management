import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
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

  async findOne(query: { username: string }): Promise<User | undefined> {
    return this.users.find((user) => user.username === query.username);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }
}
