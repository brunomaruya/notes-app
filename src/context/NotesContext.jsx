import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext } from "react";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [note, setNote] = useLocalStorage("note", null);
  const addNote = () => {
    console.log("adding");
    window.location = "/notes/1";
    // setNotes((note) => [...notes, note]);
  };
  return (
    <NotesContext.Provider value={{ addNote }}>
      {children}
    </NotesContext.Provider>
  );
}
