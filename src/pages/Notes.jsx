import React from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export const Notes = () => {
  return (
    <div className=" container">
      <NoteForm />
      <NoteList />
    </div>
  );
};

export default Notes;
