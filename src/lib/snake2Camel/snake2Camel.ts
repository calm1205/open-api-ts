export const snake2Camel = (str: string) =>
  str.replace(/([-_][a-z])/g, (letter) =>
    letter.toUpperCase().replace("-", "").replace("_", "")
  );
