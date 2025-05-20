import React from "react";

export const NoteItem = ({ note, onDelete, onArchive }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center px-5 bg-white shadow rounded-xl w-72 h-36 border-t-10 ${!note.archived ? 'border-blue-400' : 'border-gray-400'}`}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg mt-5">{note.title}</h1>
          <div className="flex gap-2">
            <img className="w-8 h-8" src="delete.svg" alt="logo delete" onClick={()=> onDelete(note.id)}/>
            <img className="w-8 h-8" src={!note.archived ? "archive.svg" : "archive2.svg"} alt="logo archive" onClick={()=> onArchive(note.id)}/>
          </div>
        </div>
        <p className="font-light text-gray-400 text-sm">
          ~{showFormationDate(note.createAt)}
        </p>
        <p className="mt-2 mb-9 text-gray-500 font-normal">{note.content}</p>
      </div>
    </>
  );
};

export default NoteItem;

const showFormationDate = (date) => {
  console.log(date);
  const options = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("id-ID", options);
};
