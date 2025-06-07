import { IUserService, IUserRepository } from './types';

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  getUserName(id: number) {
    const user = this.userRepository.getById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user.name;
  }
}
