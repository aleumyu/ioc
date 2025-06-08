export interface IUser {
  id: number;
  name: string;
}

export interface IUserRepository {
  getById(id: number): IUser | undefined;
}

export interface IUserService {
  getUserName(id: number): string | undefined;
}

// --- DI Tokens ---

// We create unique Symbols to use as keys for our container.
// This is the standard way to register and resolve dependencies
// that are based on interfaces.
export const TOKENS = {
  UserRepository: Symbol.for('IUserRepository'),
  UserService: Symbol.for('IUserService'),
};
console.log({ TOKENS });
