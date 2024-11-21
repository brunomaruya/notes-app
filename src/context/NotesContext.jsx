import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [note, setNote] = useLocalStorage("note", null);
  const navigate = useNavigate();
  const addNote = () => {
    const newNote = { noteId: uuidv4(), title: "", body: "" };
    setNotes((previousNotes) => [...previousNotes, newNote]);
    setNote(newNote);

    navigate(`/notes/${newNote.noteId}`);
    console.log("adding");
  };

  return (
    <NotesContext.Provider value={{ addNote }}>
      {children}
    </NotesContext.Provider>
  );
}
