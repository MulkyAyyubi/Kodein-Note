import React from "react";

export const NoteItem = ({color, img}) => {
  return (
    <>
      <div className={`flex flex-col justify-center px-5 bg-white shadow rounded-xl w-72 h-36 border-t-10  ${color}`}>
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg mt-5">Ide Konten</h1>
          <div className="flex gap-2">
            <img src="delete.svg" alt="logo delete" />
            <img src={img} alt="logo archive" />
          </div>
        </div>
        <p className="font-light text-gray-400 text-sm">~Selasa, 13 Mei 2025</p>
        <p className="mt-2 mb-9 text-gray-500 font-normal">
          Tips belajar react untuk pemula.
        </p>
      </div>
    </>
  );
};

export default NoteItem;
