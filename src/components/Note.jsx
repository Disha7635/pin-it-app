import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Note(props) {
  function onclick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={onclick}>
        <DeleteIcon />
      </button>
    </div>
  );
}
