import { container } from './ioc';
import { TOKENS, IUserService } from './types';
import { UserService } from './service';
import { UserRepository } from './repository';

// Register the UserRepository
container.register(TOKENS.UserRepository, new UserRepository());

// Register the UserService
container.register(
  TOKENS.UserService,
  new UserService(container.resolve(TOKENS.UserRepository))
);
