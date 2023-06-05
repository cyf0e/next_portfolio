"use client";
import { GithubBadge } from "@/components/GithubBadge";
import { Badge } from "../layout";
import { useState } from "react";
import { FilterProvider } from "react-item-filters";
import { FilterShowcase } from "@/components/FilterShowcase";
import { DiNpm } from "react-icons/di";
import Link from "next/link";
import { CgScrollV } from "react-icons/cg";
import { usePathname } from "next/navigation";
export default function ReactItemFilters() {
  const [data, setData] = useState([
    { dataValue: "Helsinki", category: "Finland" },
    { category: "Croatia", dataValue: "Split" },
    { category: "Croatia", dataValue: "Zadar" },
    { category: "Spain", dataValue: "Madrid" },
  ]);
  const pathname = usePathname();
  console.log(pathname == "/");
  return (
    <div className="min-h-screen py-8 flex px-4 xl:px-16">
      <div
        style={{ display: pathname == "/" ? "flex" : "none" }}
        className="absolute top-[3rem] right-[5rem] space-x-2 items-center hidden md:flex bg-sky-600 text-white px-4 py-2 rounded-full"
      >
        <CgScrollV className="text-2xl" />
        <h1>Try scrolling!</h1>
      </div>
      <div className="flex flex-col justify-start ">
        <h1 className="py-4 text-2xl font-bold">React-item-filters</h1>
        <div className="flex space-x-4">
          <GithubBadge link="https://github.com/cyf0e/react-item-filters" />
          <Link
            className="max-w-fit px-2 py-1 rounded-full bg-[#bc3433] items-center hover:bg-red-800 flex space-x-2"
            href="https://www.npmjs.com/package/react-item-filters"
          >
            <DiNpm className="text-3xl text-white" />
            <h1 className="text-white">npm</h1>
          </Link>
        </div>
        <div className="py-8">
          <h1 className="text-xl font-semibold">Motivation:</h1>
          <p className="py-4 text-md tracking-normal">
            React-item-filters is a typescript project designed to make adding
            client-side React filtering easy. This is especially useful for an
            e-commerce website. This library makes it very easy to add category
            and search filtering to your products page. All you have to do is
            create your filter component and pass it along with a selector
            function to the filtering library and you get back a list of
            checkbox (or search) elements you can instantly display in your
            page.
          </p>
          <h1 className="text-xl font-semibold py-4">Technologies:</h1>
          <p className="text-md">
            This library uses only <Badge text="React" /> and{" "}
            <Badge text="Typescript" />
          </p>
          <p className="text-md">
            It is very lighweight, 30 Kb before minifying or gzip!
          </p>

          <div className="pb-24">
            <h1 className="text-xl py-4 font-semibold">Showcase:</h1>
            <p className="py-2 pb-8">
              Input some data and react-item-filters will provide you with
              filters for them. Add items to the same category to see the filter
              work!
            </p>
            <div className="flex md:space-x-4 flex-col md:flex-row">
              <div className="md:max-w-[30%]">
                <form
                  className="flex flex-col space-y-4 w-fit"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    setData([
                      ...data,
                      {
                        dataValue: formData.get("data-value") as string,
                        category: formData.get("category") as string,
                      },
                    ]);
                  }}
                >
                  <label>Category:</label>
                  <input
                    className="text-black rounded-sm px-4 py-2 w-full lg:max-w-[20rem] outline outline-2 focus:outline-blue-700"
                    type="text"
                    name="category"
                    placeholder="Category"
                  />
                  <label>Value:</label>
                  <input
                    className="text-black rounded-sm px-4 py-2 w-full lg:max-w-[20rem] outline outline-2 focus:outline-blue-700"
                    type="text"
                    name="data-value"
                    placeholder="Data value"
                  />
                  <button className="bg-blue-500 px-4 py-2 max-w-fit rounded-sm text-white">
                    Add data value!
                  </button>
                </form>
              </div>
              <div className="grow ">
                <h1 className="text-xl py-8">Countries</h1>
                <FilterProvider initialData={[...data]}>
                  <FilterShowcase />
                </FilterProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
