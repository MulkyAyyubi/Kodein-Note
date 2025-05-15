import React from "react";
import NoteItem from "./NoteItem";

export const NoteList = () => {
  return (
    <>
      <div className="container flex flex-col pt-24 gap-8">
        <div className="flex items-center gap-5 mb-6">
          <img src="/Activity.svg" alt="" className="w-6" />
          <h1 className="text-3xl font-normal text-gray-800">Active</h1>
        </div>
        <div className="flex justify-start gap-8">
          <NoteItem color={"border-blue-500"} img={"archive.svg"}/>
          <NoteItem color={"border-blue-500"} img={"archive.svg"}/>
          <NoteItem color={"border-blue-500"} img={"archive.svg"}/>
          <NoteItem color={"border-blue-500"} img={"archive.svg"}/>
        </div>
      </div>
      <div className="container flex flex-col py-24 gap-8">
        <div className="flex items-center gap-5 mb-6">
          <img src="/archiveBig.svg" alt="" className="w-6" />
          <h1 className="text-3xl font-normal text-gray-800">Archive</h1>
        </div>
        <div className="flex justify-start gap-8">
          <NoteItem color={"border-gray-200"} img={"archive2.svg"}/>
          <NoteItem color={"border-gray-200"} img={"archive2.svg"}/>
        </div>
      </div>
    </>
  );
};

export default NoteList;
