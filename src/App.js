import NoteList from "./components/NoteList";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);

  function addNote() {
    if (noteText.trim().length > 0) {
      const date = new Date().toLocaleDateString();
      setNoteText("");

      const newNote = {
        text: noteText,
        date: date,
        id: nanoid(),
      };
      const upadteNotes = [...notes, newNote];
      setNotes(upadteNotes);
    } else {
      alert("add some text");
      setNoteText("");
    }
  }

  function handleNoteText(text) {
    setNoteText(text);
  }

  function handleDeleteNote(id) {
    console.log(id);

    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  }
  function handleSearchText(text) {
    setSearchText(text);
  }

  return (
    <div className={darkMode && "dark-mode"}>
      <Header setDarkMode={setDarkMode} />
      <Search searchText={searchText} handleSearchText={handleSearchText} />
      <NoteList
        handleDeleteNote={handleDeleteNote}
        addNote={addNote}
        handleNoteText={handleNoteText}
        noteText={noteText}
        notes={notes.filter((note) => note.text.includes(searchText))}
      />
    </div>
  );
}

export default App;
