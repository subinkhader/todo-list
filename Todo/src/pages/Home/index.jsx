import React, { useEffect, useState } from "react";
import Create from "../Create";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(todos);

  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <h2>No record found</h2>
      ) : (
        todos.map((todo, index) => (
          <div key={index}>
            <h2>{todo.task}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
