import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";

export default function Note() {
  const { noteId } = useParams();
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const titleRef = useRef();
  const bodyRef = useRef();
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
      <header></header>
      <textarea
        onKeyDown={(e) => handleKeyDown(e, bodyRef)}
        rows="1"
        onChange={handleTitleInput}
        autoFocus
        className="text-2xl   font-bold focus:outline-none  "
        style={{ resize: "none", overflow: "hidden" }}
        value={titleValue}
        ref={titleRef}
      />
      <textarea
        onChange={handleBodyInput}
        ref={bodyRef}
        autoFocus
        className="text-md  focus:outline-none  "
        style={{ resize: "none", overflow: "hidden" }}
        value={bodyValue}
      />
    </Container>
  );
}
