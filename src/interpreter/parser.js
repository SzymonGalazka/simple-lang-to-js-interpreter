import { Op, Num } from "./nodeTypes";

export const parse = (tokens) => {
  let char = 0;

  const peek = () => tokens[char];
  const consume = () => tokens[char++];

  const parseNumber = () => ({ val: parseInt(consume()), type: Num });

  const parseOperator = () => {
    const node = { val: consume(), type: Op, expr: [] };
    while (peek()) node.expr.push(parseExpr());
    return node;
  };

  const parseExpr = () => (/\d/.test(peek()) ? parseNumber() : parseOperator());
  return parseExpr();
};
