import { GithubBadge } from "@/components/GithubBadge";
import { Badge } from "../layout";
import Link from "next/link";

export default function GameBenchmarkPage() {
  return (
    <div className="flex px-4 py-8 xl:px-16 min-h-screen">
      <div className="flex flex-col justify-start  ">
        <h1 className="py-4 text-2xl font-bold">Gamebenchmarks</h1>
        <GithubBadge link="https://github.com/cyf0e/gamebenchmark.io" />
        <div className="py-8">
          <h1 className="text-xl font-semibold">Motivation:</h1>
          <p className="py-4 text-md tracking-normal">
            Gamebenchmarks is a full stack web app built with React and
            Express.js. I wanted to do a complete full stack web app project and
            this seemed like a fun idea. The goal was to make a web app on which
            the user could easily look up how a certain PC component performs in
            videogames. It can also be used to compare different products to
            decide which one you would rather buy. Currently it uses React
            Router which isn't optimal since it provides no server side
            rendering so the only route availible is the root. It also features
            a simple admin interface to add games, components and benchmarks.
            The interface is guarded by an authentication token which the user
            sets on the server. This project features a full testing suite with
            unit and integration testing using Docker and Mocha.
          </p>
          <h1 className="text-xl font-semibold py-4">Technologies:</h1>
          <p className="text-md">
            This web app <Badge text="React" /> , <Badge text="Typescript" />,{" "}
            <Badge text="React Router" /> <Badge text="Express.js" /> for the
            backend api and <Badge text="Postgres" /> as the database.
          </p>

          <div className="pb-24">
            <h1 className="text-xl py-4 font-semibold">Showcase:</h1>
            <h1>
              This web app is hosted at:
              <Link
                className="hover:text-blue-500 text-xl pl-4 underline font-semibold"
                href="https://benchmark-frontend.onrender.com/"
              >
                GameBenchmarks
              </Link>
            </h1>

            <i>
              Note: If the app seems like it isn't working give it a couple of
              refreshes. This is because it is hosted on a free tier and the
              container is likely sleeping.
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
