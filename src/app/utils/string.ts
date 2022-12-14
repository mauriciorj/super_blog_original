export const strSpaceToDashAndLowerCase = (str: string) =>
  str.replace(/\s+/g, '-').toLowerCase();

export const stringInterpolation = (str: string, ...args: any[]) => {
  if (str) {
    let i = 0;
    return str.replace(/%s/g, () => {
      i += 1;
      const element = args[i - 1];
      if (typeof element === 'number') {
        return element;
      }
      return element || '';
    });
  }
  return '';
};
