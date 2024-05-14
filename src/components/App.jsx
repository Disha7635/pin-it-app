import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import NewNote from "./NewNote";
import { useState } from "react";
export default function App() {
  const [Notes, setNotes] = useState(notes);
  function addNote(note) {
    setNotes([...Notes, note]);
  }
  function deleteNote(id) {
    setNotes(() => {
      return Notes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      {Notes.map((obj, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={obj.title}
            content={obj.content}
            onDelete={deleteNote}
          />
        );
      })}
      <NewNote onadd={addNote} />
      <Footer />
    </div>
  );
}
