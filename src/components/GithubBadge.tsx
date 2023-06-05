import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
export function GithubBadge({ link }: { link: string }) {
  return (
    <Link href={link} className="max-w-fit">
      <div className="flex space-x-2 px-2 py-1 rounded-full bg-white outline outline-1 outline-zinc-900 dark:outline-0 dark:bg-zinc-800 items-center hover:bg-zinc-200 dark:hover:bg-zinc-700">
        <AiFillGithub className="text-3xl" />
        <h1>GitHub</h1>
      </div>
    </Link>
  );
}
