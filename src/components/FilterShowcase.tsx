import { useRef } from "react";
import { useCheckboxFilter, useFilter } from "react-item-filters";
type DataType = {
  category: string;
  dataValue: string | number;
};
export function FilterShowcase() {
  const filterdData = useFilter<DataType>();
  const checkboxes = useCheckboxFilter((el: DataType) => {
    return el.category;
  });

  return (
    <div className="flex-col space-y-2 md:space-y-0 md:flex-row flex space-x-1 xl:space-x-8 w-full h-full">
      <div className="">{checkboxes}</div>
      <div className=" flex flex-col grow space-y-4 max-h-[20rem] overflow-y-auto">
        {filterdData.map((e) => (
          <div
            key={e.dataValue}
            className="px-1 lg:px-8 py-4 w-full bg-zinc-800 text-white"
          >
            <h1>{e.dataValue}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
