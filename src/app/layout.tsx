"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { BsCode } from "react-icons/bs";
import Link from "next/link";
import { FaGamepad } from "react-icons/fa";
import { BiBrain, BiCodeCurly } from "react-icons/bi";
import { CiServer } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { Name } from "@/components/Name";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of my works.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html
      lang="en"
      className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white"
    >
      <body
        className={`${inter.className} h-full flex md:justify-center flex-col md:flex-row justify-start`}
      >
        <div className="flex justify-center w-full md:w-auto">
          <div
            className="pt-12 px-2 md:px-4 lg:px-8 xl-px-12 flex-col items-center w-max"
            style={{ display: pathname == "/" ? "none" : "flex" }}
          >
            <Link href="/">
              <AiOutlineUser className="text-8xl md:text-7xl  bg-zinc-800  rounded-full text-white mx-auto" />
              <Name />
            </Link>
            <h1 className="font-semibold pt-2 text-xl">Contact:</h1>
            <a href="mailto:cyf001@protonmail.com">cyf001@protonmail.com</a>
            <h1 className="text-xl font-semibold py-4">All projects</h1>
            <div className="flex flex-col">
              <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
                <BsCode />
                <Link href={"/react-item-filters"}>React-item-filters</Link>
              </div>
              <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
                <CiServer />
                <Link href={"/gamebenchmark"}>Gamebenchmarks</Link>
              </div>
              <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
                <FaGamepad />
                <Link href={"/bordle"}>Bordle</Link>
              </div>
              <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
                <BiCodeCurly />
                <Link href={"/typescript_interpreter"}>
                  Typescript interpreter
                </Link>
              </div>
              <div className="flex space-x-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800 px-2 py-1 rounded-sm">
                <BiBrain />
                <Link href={"/microtypescriptograd"}>Microtypescriptograd</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:min-h-screen">{children}</div>
      </body>
    </html>
  );
}
export function Badge({ text, color }: { text: string; color?: string }) {
  let colorToUse = color;
  switch (text) {
    case "React":
      colorToUse = "bg-[#149ECA]";
      break;
    case "Next.js":
      colorToUse = "bg-[#000000] outline outline-1 outline-white";
      break;
    case "React Native":
      colorToUse = "bg-[#149ECA]";
      break;
    case "Typescript":
      colorToUse = "bg-[#3178c6]";
      break;
    case "Node.js":
      colorToUse = "bg-[#026e00]";
      break;
    case "TailwindCSS":
      colorToUse = "bg-[#0f172a]";
      break;
    case "Redux":
      colorToUse = "bg-[#764abc]";
      break;
    case "Docker":
      colorToUse = "bg-[#003f8c]";
      break;
    case "Jest":
      colorToUse = "bg-[#15c213]";
      break;
    case "Mocha":
      colorToUse = "bg-[#8d6748]";
      break;
    case "Postgres":
      colorToUse = "bg-[#336791]";
      break;
    case "Express.js":
      colorToUse = "bg-zinc-100 !text-black outline outline-1 outline-black";
      break;
    case "HTML":
      colorToUse = "bg-[#e24a26]";
      break;
    case "CSS":
      colorToUse = "bg-[#0c6fb4]";
      break;
    default:
      colorToUse = "bg-violet-600";
  }

  return (
    <span
      className={`mx-[0.15rem] my-1 px-2 py-[0px] text-white rounded-full ${colorToUse}`}
    >
      {text}
    </span>
  );
}
