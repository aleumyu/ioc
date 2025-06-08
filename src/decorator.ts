export function injectable(dependencies: symbol[]) {
  console.log({ dependencies });
  return (target: Function) => {
    console.log({ target });
    Object.defineProperty(target, 'dependencies', {
      value: dependencies,
      writable: false,
    });
  };
}
