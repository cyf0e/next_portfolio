"use client";
import { GithubBadge } from "@/components/GithubBadge";
import { Badge } from "../layout";
import Image from "next/image";
export default function BordlePage() {
  return (
    <div className="flex px-4 py-8 xl:px-16 min-h-screen">
      <div className="flex flex-col justify-start ">
        <h1 className="py-4 text-2xl font-bold">Bordle</h1>
        <GithubBadge link="https://github.com/cyf0e/bordle" />
        <div className="py-8">
          <h1 className="text-xl font-semibold">Motivation:</h1>
          <p className="py-4 text-md tracking-normal">
            Bordle is a React Native app/game made after the popular game
            Wordle. The goal of this project was to learn more about React
            Native. It is a very simple game, however since the keyboard in the
            game is custom and the letters need to be colored according to the
            attempted guesses, it was necessary to optimize the app to keep the
            game running nicely even while typing very fast. Additionally the
            game has 3 options for word lengths.
          </p>
          <h1 className="text-xl font-semibold py-4">Technologies:</h1>
          <p className="text-md">
            This game uses <Badge text="ReactNative" /> ,{" "}
            <Badge text="Typescript" /> and <Badge text="Redux" />.
          </p>

          <div className="pb-24">
            <h1 className="text-xl py-4 font-semibold">Showcase:</h1>
            <h1 className="text-xl">
              <i>WIP</i>
            </h1>
            <i>
              Plan on adding a playable version of the game here using
              react-native-web but for now the image is all I have time for.
            </i>
            <img
              className="py-2"
              src={"/app_img.png"}
              alt="Image of the app."
              width={200}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
