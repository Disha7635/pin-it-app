import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
export default function NewNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function onchange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setNote({ ...note, [name]: value });
  }
  function submitNote(event) {
    props.onadd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  const [isexpand, setIsexpand] = useState(false);
  function onclick() {
    setIsexpand(true);
  }
  return (
    <div>
      {isexpand ? (
        <form className="create-note">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={onchange}
          />
          <br />
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={note.content}
            onChange={onchange}
          />
          <br />
          <Zoom in={true}>
            <Fab size="small" onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      ) : (
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onClick={onclick}
        />
      )}
    </div>
  );
}
