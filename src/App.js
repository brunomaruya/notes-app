import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Note from "./pages/Note";
import NotesProvider from "./context/NotesContext";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[#1e1e1e]">
      <Router>
        <NotesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes/:noteId" element={<Note />} />
          </Routes>
        </NotesProvider>
      </Router>
    </div>
  );
}

export default App;
