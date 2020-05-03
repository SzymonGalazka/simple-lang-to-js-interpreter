export const lex = (expr) =>
  expr
    .split(" ")
    .map((word) => word.trim())
    .filter((word) => word.length);
