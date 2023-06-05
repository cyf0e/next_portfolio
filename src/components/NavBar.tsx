import { Badge } from "@/app/layout";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiBrain, BiCodeCurly } from "react-icons/bi";
import { BsCode } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa";
import { Name } from "./Name";

const technologies = [
  "Next.js",
  "React",
  "React Native",
  "Typescript",
  "Node.js",
  "Express.js",
  "TailwindCSS",
  "Redux",
  "HTML",
  "CSS",
  "Docker",
  "Jest",
  "Mocha",
  "Postgres",
];
export function NavBar() {
  return (
    <nav
      style={{ scrollbarWidth: "thin" }}
      className="py-8 px-4 md:px-0 overflow-y-auto"
    >
      <div className="">
        <Link href={"/"}>
          <AiOutlineUser className="text-8xl md:text-7xl  bg-zinc-800  rounded-full text-white mx-auto" />
          <Name />
        </Link>
        <h1 className="py-2 text-xl font-bold">About me:</h1>
        <h1>
          Im a web developer based in Croatia. I've been learning web
          development for the last 5 years most of it working with React.
        </h1>
        <h1 className="font-semibold pt-2">Contact:</h1>
        <a href="mailto:cyf001@protonmail.com">cyf001@protonmail.com</a>

        <h1 className="text-xl font-semibold py-4">Projects</h1>
        <div className="flex flex-col">
          <Link href={"/react-item-filters"}>
            <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
              <BsCode />
              <h1>React-item-filters</h1>
            </div>
          </Link>
          <Link href={"/bordle"}>
            <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
              <FaGamepad />
              <h1>Bordle</h1>
            </div>
          </Link>
          <Link href={"/microtypescriptograd"}>
            <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
              <BiBrain />
              <h1>Microtypescriptograd</h1>
            </div>
          </Link>
          <Link href={"/gamebenchmark"}>
            <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
              <CiServer />
              <h1>Gamebenchmarks</h1>
            </div>
          </Link>
          <Link href={"/typescript_interpreter"}>
            <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
              <BiCodeCurly />
              <h1>Typescript interpreter</h1>
            </div>
          </Link>
        </div>
        <h1 className="text-xl font-semibold pt-4">Technologies:</h1>
        <h1 className="py-2">Technologies I've worked with in the past: </h1>
        <div className="flex flex-wrap">
          {technologies.map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>
      </div>
    </nav>
  );
}
