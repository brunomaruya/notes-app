import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
import { NotesContext } from "../context/NotesContext";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function Note() {
  const { notes, note, setNotes, setNote } = useContext(NotesContext);
  const { noteId } = useParams();
  const [titleValue, setTitleValue] = useLocalStorage("title", "");
  const [bodyValue, setBodyValue] = useLocalStorage("body", "");
  const titleRef = useRef();
  const bodyRef = useRef();

  const updateNote = (noteId, titleValue, bodyValue) => {
    setNote({ noteId: noteId, titleValue: titleValue, bodyValue: bodyValue });

    const updatedNotes = notes.map((note) => {
      if (note.noteId === noteId) {
        console.log(noteId + " updated");
        return { ...note, title: titleValue, body: bodyValue };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  useEffect(() => {
    updateNote(noteId, titleValue, bodyValue);
  }, [titleValue, bodyValue]);

  const handleTitleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    setTitleValue(e.target.value);
  };
  const handleBodyInput = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    setBodyValue(e.target.value);
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current?.focus();
    }
  };
  return (
    <Container>
      <Header />
      <textarea
        onKeyDown={(e) => handleKeyDown(e, bodyRef)}
        rows="1"
        onChange={handleTitleInput}
        autoFocus
        className="mt-16 text-2xl   font-bold focus:outline-none  "
        style={{ resize: "none", overflow: "hidden" }}
        value={titleValue}
        ref={titleRef}
      />
      <textarea
        onChange={handleBodyInput}
        ref={bodyRef}
        className="text-md h-full  focus:outline-none  "
        style={{ resize: "none", overflow: "hidden" }}
        value={bodyValue}
      />
    </Container>
  );
}
