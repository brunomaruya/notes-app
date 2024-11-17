import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function SearchBar() {
  return (
    <div className=" mt-10 bg-[#f0f0f0] flex items-center rounded-2xl p-3 gap-2">
      <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 " />
      <input
        className="w-full h-full bg-transparent focus:outline-none  "
        placeholder="Search for notes"
        type="search"
        d
      ></input>
    </div>
  );
}
