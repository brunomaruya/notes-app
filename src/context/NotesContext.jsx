import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [note, setNote] = useLocalStorage("note", null);
  const addNote = () => {
    const noteId = uuidv4();
    console.log("adding");
    window.location = `/notes/${noteId}`;
    // setNotes((note) => [...notes, note]);
  };
  return (
    <NotesContext.Provider value={{ addNote }}>
      {children}
    </NotesContext.Provider>
  );
}
