import { IUserRepository, IUser } from './types';

export class UserRepository implements IUserRepository {
  private users: IUser[] = [
    { id: 1, name: 'Aleum' },
    { id: 2, name: 'Jean-Bastien' },
    { id: 3, name: 'Marianne' },
    { id: 4, name: 'Marius' },
  ];

  getById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
