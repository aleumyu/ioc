const registry = new Map<symbol, any>();

export const container = {
  register<T>(token: symbol, value: T) {
    registry.set(token, value);
  },
  resolve<T>(token: symbol): T {
    if (!registry.has(token)) {
      throw new Error(`No registration found for token ${token.toString()}`);
    }
    return registry.get(token) as T;
  },
};
