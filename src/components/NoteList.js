import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

export default function NoteList({ notes, addNote, noteText, handleNoteText }) {
  return (
    <div className="notes-container">
      <AddNote
        noteText={noteText}
        handleNoteText={handleNoteText}
        addNote={addNote}
      />
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
