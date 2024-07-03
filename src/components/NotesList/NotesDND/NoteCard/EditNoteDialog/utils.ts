export const shallowCompare = (
  a: Record<string, unknown>,
  b: Record<string, unknown>
): boolean => {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  return keysA.every((key) => a[key] === b[key]);
};
