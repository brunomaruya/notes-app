import React from "react";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import NotesContainer from "../components/NotesContainer";
import AddNoteBtn from "../components/AddNoteBtn";

export default function Home() {
  return (
    <div>
      <Container>
        <SearchBar />
        <CategoryFilter />
        <NotesContainer />
        <AddNoteBtn />
      </Container>
    </div>
  );
}
