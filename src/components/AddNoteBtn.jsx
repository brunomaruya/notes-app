import { PlusIcon } from "@heroicons/react/16/solid";
import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export default function AddNoteBtn() {
  const { addNote } = useContext(NotesContext);
  return (
    <button
      onClick={addNote}
      className="fixed right-10 bottom-10 bg-[#1e1e1e] w-fit rounded-full p-3 shadow-2xl cursor-pointer"
    >
      <PlusIcon className="w-10 h-10   text-white " />
    </button>
  );
}
