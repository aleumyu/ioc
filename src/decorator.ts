export function injectable(dependencies: symbol[]) {
  return (target: Function) => {
    Object.defineProperty(target, 'dependencies', {
      value: dependencies,
      writable: false,
    });
  };
}
