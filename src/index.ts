import { container } from './ioc';
import { TOKENS, IUserService } from './types';
import { UserService } from './service';
import { UserRepository } from './repository';

console.log('Registering dependencies...');
container.register(TOKENS.UserRepository, UserRepository);
container.register(TOKENS.UserService, UserService);

const userService = container.resolve<IUserService>(TOKENS.UserService);
console.log(userService.getUserName(1));
console.log(userService.getUserName(2));
