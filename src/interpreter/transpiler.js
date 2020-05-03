import { Op, Num } from "./nodeTypes";

export const transpile = (ast) => {
  const opMap = { add: "+", mul: "*", sub: "-", div: "/" };
  const transpileNode = (ast) =>
    ast.type === Num ? transpileNum(ast) : transpileOp(ast);
  const transpileNum = (ast) => ast.val;
  const transpileOp = (ast) =>
    `(${ast.expr.map(transpileNode).join(" " + opMap[ast.val] + " ")})`;
  return transpileNode(ast);
};
