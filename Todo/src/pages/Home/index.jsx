// import React, { useEffect, useState } from "react";
// import Create from "../Create";
// import axios from "axios";
// import { Box, Checkbox } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

// const Home = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/get")
//       .then((result) => setTodos(result.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const checkboxuncheck = (id) => {
//     console.log(id);
//     axios
//       .put("http://localhost:3001/checkboxuncheck/" + id)
//       .then((result) => {
//         const value = todos.find((value) => value._id == id);
//         const index = todos.indexOf(value);
//         let temp = JSON.parse(JSON.stringify(todos));
//         temp[index] = { ...temp[index], done: false };
//         setTodos(temp);
//       })
//       .catch((err) => console.log(err));
//   };
//   console.log(todos);

//   const checkboxcheck = (id) => {
//     axios
//       .put("http://localhost:3001/checkboxcheck/" + id)
//       .then((result) => {
//         const value = todos.find((value) => value._id == id);
//         const index = todos.indexOf(value);
//         let temp = JSON.parse(JSON.stringify(todos));
//         temp[index] = { ...temp[index], done: true };
//         setTodos(temp);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <Create />
//       {todos.length === 0 ? (
//         <h2>No record found</h2>
//       ) : (
//         todos.map((todo) => {
//           console.log(todo, todos);
//           return (
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 background: "black",
//                 color: "white",
//                 padding: "2px 5px",
//                 width: "345px",
//                 height: "35px",
//                 marginTop: "10px",
//               }}
//             >
//               {todo?.done ? "checked" : "unchecked"}
//               {todo.done ? (
//                 <Box
//                   className="checkbox"
//                   onClick={() => {
//                     checkboxuncheck(todo._id);
//                   }}
//                 >
//                   <RadioButtonCheckedIcon
//                     className="icon"
//                     sx={{ color: "white" }}
//                   />
//                   <p>{todo.task}</p>
//                 </Box>
//               ) : (
//                 <Box
//                   className="uncheckbox"
//                   onClick={() => {
//                     checkboxcheck(todo._id);
//                   }}
//                 >
//                   <RadioButtonUncheckedIcon
//                     className="icon"
//                     sx={{ color: "white" }}
//                   />

//                   <p>{todo.task}</p>
//                 </Box>
//               )}

//               <Box className="checkbox">
//                 <span>
//                   <DeleteIcon className="icon" />
//                 </span>
//               </Box>
//             </Box>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Create from "../Create";
import axios from "axios";
import { Box, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const check = (e, todo, index) => {
    todo.done = e.target.checked;
    axios
      .put("http://localhost:3001/checkboxuncheck/", {
        todo,
      })
      .then((result) => {
        setTodos((prev) => {
          const newTodos = [...prev];
          newTodos[index] = todo;
          return newTodos;
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <h2>No record found</h2>
      ) : (
        todos.map((todo, index) => {
          console.log(todo, todos);
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "black",
                color: "white",
                padding: "2px 5px",
                width: "345px",
                height: "35px",
                marginTop: "10px",
              }}
            >
              {todo?.done ? "checked" : "unchecked"}

              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => check(e, todo, index)}
              />
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              <Box className="checkbox">
                <span>
                  <DeleteIcon className="icon" />
                </span>
              </Box>
            </Box>
          );
        })
      )}
    </div>
  );
};

export default Home;
