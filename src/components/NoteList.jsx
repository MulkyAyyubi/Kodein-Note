import React from "react";
import NoteItem from "./NoteItem";

export const NoteList = ({ title, notes, onDelete, onArchive }) => {
  return (
    <>
      <div className="container flex flex-col pb-24 gap-8">
        <div className="flex items-center gap-5 mb-6">
          {title === "Active" ? (
            <img src="/Activity.svg" alt="logo activity" className="w-6" />
          ) : (
            <img src="/archiveBig.svg" alt="logo activity" className="w-6" />
          )}
          <h1 className="text-3xl font-normal text-gray-800">{title}</h1>
        </div>
        <div className="flex justify-start gap-8">
          {notes.length > 0 ? (
            notes.map((note) => <NoteItem key={note.id} note={note} onDelete={onDelete} onArchive={onArchive}/>)
          ) : (
            <h1>No active notes</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default NoteList;
