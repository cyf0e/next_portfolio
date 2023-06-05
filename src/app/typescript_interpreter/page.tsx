import { GithubBadge } from "@/components/GithubBadge";
import { Badge } from "../layout";
import InterpreterShowcase from "@/components/InterpreterShowcase";

export default function TypescriptInterpreterPage() {
  return (
    <div className="flex px-4 xl:px-16 py-8 min-h-screen">
      <div className="flex flex-col justify-start ">
        <h1 className="py-4 text-2xl font-bold">Typescript interpreter</h1>
        <GithubBadge link="/" />
        <div className="py-8">
          <h1 className="text-xl font-semibold">Motivation:</h1>
          <p className="py-4 text-md tracking-normal">
            This project is an attempt at writing a custom language interpreter
            in typescript. It meant to be a full REPL of a made up language I
            create along the way. Right now the language is very similar to
            javascript as the focus was on learning the steps of creating an
            interpreter. Currently the lexer is mostly done and easily
            extendable. The groundwork is also laid down for the parser with
            parsers for functions, expressions, variable definitions already
            implemented. Next step is writing an evaluator that makes the
            program run. For now the program reads code from a console program
            and prints out the language AST.
          </p>
          <h1 className="text-xl font-semibold py-4">Technologies:</h1>
          <p className="text-md">
            This project uses <Badge text="Typescript" /> .
          </p>

          <div className="pb-24">
            <h1 className="text-xl py-4 font-semibold">Showcase:</h1>
            <h1 className="text-xl pb-2">
              <i>WIP</i>
            </h1>
            <div className="w-full">
              <InterpreterShowcase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
