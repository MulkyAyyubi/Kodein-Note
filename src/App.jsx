import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Notes from "./pages/Notes";

function App() {
  const loadNotes = () => JSON.parse(localStorage.getItem("notes")) || [];
  const [notes, setNotes] = useState(loadNotes);
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    setFilteredNotes(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(
        notes.filter((note) =>
          note.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="flex flex-col justify-center items-center">
        <Notes notes={filteredNotes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
