import React from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import NotesContainer from "./NotesContainer";

export default function Container() {
  return (
    <div className="p-5 h-[844px] w-[390px] bg-white rounded-2xl flex flex-col gap-5">
      <SearchBar />
      <CategoryFilter />
      <NotesContainer />
    </div>
  );
}
