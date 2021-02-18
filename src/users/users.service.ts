import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: User): number {
    user.id = this.users.length;
    this.users.push(user);

    return user.id;
  }

  all(): User[] {
    return this.users;
  }

  one(id): User {
    return this.users.find(user => user.id === id)
  }
}
