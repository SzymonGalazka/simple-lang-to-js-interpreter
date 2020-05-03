import React, { useState } from "react";
import "./App.css";
import { transpile } from "./interpreter/transpiler";
import { parse } from "./interpreter/parser";
import { lex } from "./interpreter/lexer";

function App() {
  const [expr, setExpr] = useState("sub 6 add 2 div 4 mul 3 4 2");
  const ast = parse(lex(expr));
  const interpretedExpr = transpile(parse(lex(expr)));
  return (
    <div className='App'>
      <h3>Custom language input</h3>
      <input value={expr} onChange={(e) => setExpr(e.target.value)}></input>
      <div className='result'>
        <div className='ast'>
          {console.log(ast)}
          <h3>Abstract Syntaxt Tree</h3>
          <pre>
            <code>{JSON.stringify(ast, null, 2)}</code>
          </pre>
        </div>
        <div>
          <h3>Javascript output</h3>
          <div>{interpretedExpr}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
