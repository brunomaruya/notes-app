import { PlusIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function AddNoteBtn() {
  return (
    <div className="fixed right-72 bottom-12 bg-[#1e1e1e] w-fit rounded-full p-3 shadow-2xl cursor-pointer">
      <PlusIcon className="w-10 h-10   text-white " />
    </div>
  );
}
