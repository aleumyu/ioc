import { IUserService, IUserRepository, TOKENS } from './types';
import { injectable } from './decorator';

@injectable([TOKENS.UserRepository])
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
