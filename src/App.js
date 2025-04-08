import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateNote from "./CreateNote";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(index) {
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
  }

  return (
    <div>
      <Header />
      <CreateNote onAddNote={addNote} />
      <div className="notes">
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            onDelete={() => deleteNote(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
