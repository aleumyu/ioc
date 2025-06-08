interface IclassType<T> {
  target: (new (...args: any[]) => T) & { dependencies?: symbol[] };
}

const registry = new Map<symbol, IclassType<any>>();
const instances = new Map<symbol, any>();

export const container = {
  register<T>(token: symbol, target: new (...args: any[]) => T) {
    registry.set(token, { target });
  },
  resolve<T>(token: symbol): T {
    if (instances.has(token)) {
      return instances.get(token) as T;
    }
    const targetClass = registry.get(token);
    if (!targetClass) {
      throw new Error(`No registration found for token ${token.toString()}`);
    }
    const dependencyTokens = targetClass.target.dependencies || [];
    const resolvedDependencies = dependencyTokens.map((token) =>
      container.resolve(token)
    );
    const instance = new targetClass.target(...resolvedDependencies);
    instances.set(token, instance);
    return instance;
  },
};
