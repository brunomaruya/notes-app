import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";

export default function Note() {
  const { noteId } = useParams();
  return <Container>{noteId}</Container>;
}
