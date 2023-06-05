"use client";
import { Lexer } from "@/interpreter/typescript_interpreter/lexer";
import { Parser } from "@/interpreter/typescript_interpreter/parser";
import { useState } from "react";

const parser = new Parser();
const lexer = new Lexer();
function getPromptResponse(prompt: string) {
  let res = undefined;
  try {
    res = parser.loadTokens(lexer.loadString(prompt).lex()).parse();
  } catch (e: any) {
    return e.message;
  }
  return res;
}
export default function InterpreterShowcase() {
  const [interpreterOutput, setInterpreterOutput] = useState<any>(null);
  return (
    <div className="max-w-full">
      <div className="max-h-[20rem] overflow-y-auto bg-zinc-200 dark:bg-zinc-800 rounded ">
        <pre className="text-sm p-4 max-w-full">
          {JSON.stringify(
            interpreterOutput ??
              "Write some input to see the generated AST show up here.",
            null,
            2
          )}
        </pre>
      </div>
      <form
        className="py-6 w-full flex space-x-2"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const prompt = formData.get("prompt");
          const response = getPromptResponse(prompt as string);
          console.log(response);
          setInterpreterOutput(response);
        }}
      >
        <label className="pr-4 text-base">Input:</label>
        <input
          className="grow text-black text-base rounded-sm px-4 py-2 w-full  outline outline-2 focus:outline-blue-700"
          type="text"
          name="prompt"
          placeholder="Input some syntax"
          defaultValue={"let a=1;"}
        />
        <button className="px-4 py-2 bg-blue-500 text-white">Run!</button>
      </form>
    </div>
  );
}
