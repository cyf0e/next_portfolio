"use client";
import { builtinScope } from "@/interpreter/typescript_interpreter/builtinScope";
import { Evaluator } from "@/interpreter/typescript_interpreter/evaluator";
import { Lexer } from "@/interpreter/typescript_interpreter/lexer";
import { Parser } from "@/interpreter/typescript_interpreter/parser";
import { useState } from "react";

const parser = new Parser();
const lexer = new Lexer();
const evaluator = new Evaluator();

export default function InterpreterShowcase() {
  const [interpreterOutput, setInterpreterOutput] = useState<any>();
  const [interpreterInput, setIntepreterInput] =
    useState(`  function fib(value){
      if(value<2){return value;}
      return fib(value-1)+fib(value-2);
  }
  function factorial(value){
    if(value==0 || value==1){return value;}
    return value*factorial(value-1);
  }
  let smallFib = fib(10);
  let bigFib = fib(20);
  let fact=factorial(20);
  return '20! Factorial is equal to:'+fact+' ,bigFib is equal to:'+bigFib+' and smallFib is: '+smallFib;
  `);
  console.log(interpreterOutput);
  return (
    <div className="max-w-full">
      <div className="max-h-[20rem] h-[20rem] overflow-y-auto border-1 border-blue-500 border rounded min-h-full flex ">
        <textarea
          defaultValue={interpreterInput}
          className="text p-4 w-[50%] h-full"
        ></textarea>
        <div className="w-[50%] h-full py-8 px-2 border-l border-blue-500">
          <p>
            {interpreterOutput
              ? ">> Process returned: " + interpreterOutput
              : ""}
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          const input = document.querySelector("textarea")?.value;
          if (input) {
            setIntepreterInput(input);
            try {
              const res = evaluator.evaluateProgram(
                parser.loadTokens(lexer.loadString(input).lex()).parse()
              );
              setInterpreterOutput(res as any);
            } catch (e) {
              setInterpreterOutput(e);
            }
          }
        }}
        className="px-4 py-2 bg-blue-500 text-white"
      >
        Run!
      </button>
    </div>
  );
}
