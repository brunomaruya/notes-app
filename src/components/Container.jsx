import React from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import NotesContainer from "./NotesContainer";
import AddNoteBtn from "./AddNoteBtn";

export default function Container() {
  return (
    <div className="p-5 h-[844px] w-[390px] bg-white rounded-2xl flex flex-col gap-5 relative">
      <SearchBar />
      <CategoryFilter />
      <NotesContainer />
      <AddNoteBtn />
    </div>
  );
}
