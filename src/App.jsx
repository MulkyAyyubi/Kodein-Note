import { useState } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Notes from "./pages/Notes";

function App() {

  const [notes, setNotes] = useState([])


  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Notes notes={notes} setNotes={setNotes}/>
      </div>
    </div>
  );
}

export default App;
