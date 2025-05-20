import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export const Notes = ({ notes, setNotes }) => {
  const addNote = (title, content) => {
    const newNote = {
      id: new Date().getTime(),
      title: title,
      content: content,
      archived: false,
      createAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);
  };

  // hapus
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const activeNotes = notes.filter((note) => note.archived === false);
  const archiveNotes = notes.filter((note) => note.archived === true);

  return (
    <div className=" container">
      <NoteForm onAddNote={addNote} />
      <NoteList
        title="Active"
        notes={activeNotes}
        onDelete={handleDelete}
        onArchive={handleArchive}
      />
      <NoteList
        title="Archive"
        notes={archiveNotes}
        onDelete={handleDelete}
        onArchive={handleArchive}
      />
    </div>
  );
};

export default Notes;
