"use client";
import ReactItemFilters from "./react-item-filters/page";
import GameBenchmarkPage from "./gamebenchmark/page";
import TypescriptInterpreterPage from "./typescript_interpreter/page";
import BordlePage from "./bordle/page";
import MicroTypescriptogradPage from "./microtypescriptograd/page";
import { useEffect, useRef, useState } from "react";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  const screenHeight = useRef<number>(1080);
  useEffect(() => {
    screenHeight.current = window.innerHeight;
  }, []);
  return (
    <div className="flex">
      <div
        className="w-full md:max-h-screen md:overflow-hidden md:w-[30%] md:min-w-[30%] xl:min-w-[20%] xl:max-w-[20%]
        flex flex-col items-center py-8 px-2 lg:pl-6 sticky "
      >
        <NavBar />
      </div>
      <main className="max-h-full">
        <div
          className="hidden md:flex max-h-screen flex-col items-center justify-between overflow-y-scroll overflow-x-hidden"
          onScroll={(e) => {
            e.preventDefault();
            const scrollDistance =
              (e.currentTarget.scrollTop / (screenHeight.current ?? 1)) % 1;
            const scrollDistanceTotal =
              e.currentTarget.scrollTop / (screenHeight.current ?? 1);
            const scrollDistancePi = scrollDistance * Math.PI;

            Array.from(e.currentTarget.children).forEach(
              (child: any, i: number) => {
                const cosPeriod = Math.max(
                  0.0,
                  Math.abs(Math.cos(scrollDistancePi))
                );
                const cosPeriodPercent = cosPeriod * 100;
                child.style.opacity = `${cosPeriodPercent}%`;
                if (Math.round(scrollDistanceTotal) != i) {
                  child.style.opacity = "0%";
                }
                child.style.scale = `${
                  Math.abs(100 - cosPeriodPercent) < 5 ? 100 : cosPeriodPercent
                }%`;
              }
            );
          }}
        >
          <ReactItemFilters />
          <GameBenchmarkPage />
          <TypescriptInterpreterPage />
          <BordlePage />
          <MicroTypescriptogradPage />
        </div>
      </main>
    </div>
  );
}
