import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(function (prevNotes) {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes(function (prevNotes) {
      return prevNotes.filter(function (noteItem, index) {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(function (noteItem, index) {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
