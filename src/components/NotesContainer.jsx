import React from "react";

function NoteCard({ header, body }) {
  return (
    <div className="bg-[#d9e8fc] rounded-2xl p-5 mb-3 overflow-hidden cursor-pointer">
      <h1>{header}</h1>
      <p className="text-sm ">{body}</p>
    </div>
  );
}
export default function NotesContainer() {
  return (
    <div className="columns-2 gap-3 ">
      <NoteCard header="Note1" body="Body1" />
      <NoteCard
        header="Note1"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque, neque eveniet est dolor nam praesentium unde et vero ab nihil aliquid doloribus deserunt perferendis quam earum perspiciatis dolores alias?"
      />
      <NoteCard
        header="Note1"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque, neque eveniet est dolor nam praesentium unde et vero ab nihil aliquid doloribus deserunt perferendis quam earum perspiciatis dolores alias?"
      />
      <NoteCard header="Note1" body="Body1" />
    </div>
  );
}
