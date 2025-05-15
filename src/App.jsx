import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Notes from "./pages/Notes";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Notes />
      </div>
    </div>
  );
}

export default App;
