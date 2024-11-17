import React from "react";

function FilterOption({ filter, active }) {
  return (
    <span
      className={`${
        active ? "bg-black text-white" : "bg-[#f0f0f0] "
      } bg-[#f0f0f0]  rounded-xl text-sm px-3 py-2 cursor-pointer hover:brightness-90`}
    >
      {filter}
    </span>
  );
}

export default function CategoryFilter() {
  return (
    <div className="flex gap-2">
      <FilterOption filter="All" active />
      <FilterOption filter="Important" />
      <FilterOption filter="Lecture" />
    </div>
  );
}
