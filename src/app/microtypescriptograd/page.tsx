import { GithubBadge } from "@/components/GithubBadge";
import { Badge } from "../layout";

export default function MicroTypescriptogradPage() {
  return (
    <div className="flex px-4 py-8 xl:px-16 min-h-screen">
      <div className="flex flex-col justify-start">
        <h1 className="py-4 text-2xl font-bold">Microtypescriptograd</h1>
        <GithubBadge link="https://github.com/cyf0e/microtypescriptograd" />
        <div className="py-8">
          <h1 className="text-xl font-semibold">Motivation:</h1>
          <p className="py-4 text-md tracking-normal">
            Microtypescriptograd is a simple implementation of a multilayer
            perceptron neural network in typescript. It features a handwritten
            backpropagation algorithm. Its not very fast or useful for training
            neural nets, but it was a very educational project. The project was
            heavily inspired by Karpathy's micrograd written in python.
          </p>
          <h1 className="text-xl font-semibold py-4">Technologies:</h1>
          <p className="text-md">
            This project uses <Badge text="Node.js" /> and
            <Badge text="Typescript" /> .
          </p>

          <div className="pb-24">
            <h1 className="text-xl py-4 font-semibold">Showcase:</h1>
            <h1 className="text-xl">
              <i>WIP</i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
