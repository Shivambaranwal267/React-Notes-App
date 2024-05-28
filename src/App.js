import NoteList from "./components/NoteList";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote() {
    const date = new Date().toLocaleDateString();
    setNoteText("");

    const newNote = {
      text: noteText,
      date: date,
      id: nanoid(),
    };
    const upadteNotes = [...notes, newNote];
    setNotes(upadteNotes);
  }

  function handleNoteText(text) {
    setNoteText(text);
  }
  return (
    <NoteList
      addNote={addNote}
      handleNoteText={handleNoteText}
      noteText={noteText}
      notes={notes}
    />
  );
}

export default App;
