import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

const addPlayerButton = () => {
  props.addPlayer(name)
  set_name("")
}

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          onChange={(event) => {
            console.log("new input .value:", event.target.value);
          set_name(event.target.value)
          }}
          type="text"
          placeholder="Name"
          value={name}

        />{" "}
        <button onClick={addPlayerButton}>Add</button>
      </p>
    </div>
  );
}
