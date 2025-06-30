import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateData = () => {
  const [todo, setTodo] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getById/" + id)
      .then((resu) => setTodo(resu.data))
      .catch((err) => console.log(err));
  }, []);

  const update = () => {
    axios
      .put("http://localhost:3001/checkboxuncheck/", {
        todo,
      })
      .then((result) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Update List</h2>
      <input
        type="text"
        value={todo.task}
        name=""
        id=""
        style={{
          marginRight: "12px",
          width: "300px",
          padding: "10px",
          borderBottom: "2px solid",
          outline: "none",
        }}
        onChange={(e) => setTodo((prev) => ({ ...prev, task: e.target.value }))}
      />
      <button
        type="button"
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
        }}
        onClick={update}
      >
        Add
      </button>
    </div>
  );
};

export default UpdateData;
