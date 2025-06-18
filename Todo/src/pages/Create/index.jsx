import React, { useState } from "react";
import axios from "axios";
const Create = () => {
  const [todo, setTodo] = useState([]);
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { todo: todo })
      .then((result) => console.log(result).catch((err) => console.log(err)));
  };
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        style={{
          marginRight: "12px",
          width: "300px",
          padding: "10px",
          borderBottom: "2px solid",
          outline: "none",
        }}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="button"
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
        }}
        onClick={handleAdd}
      >
        Add
      </button>
    </>
  );
};

export default Create;
