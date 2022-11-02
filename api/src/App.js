// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';
// import Create from './components/Create';

// function App() {
//   const [state, setState] = useState("")

//   useEffect(() =>
//     axios.get("https://6362424c7521369cd068e030.mockapi.io/ToDoList").then((res) => {
//       console.log(res.data);
//       setState; (res.data)
//     })
//   )

//   return (
//     <>
//       <Create />
//       {state.map((e)

//   )
// }
// </>
// }
// export default App

import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Create from "./components/Create";

function App() {
  const [state, setstate] = useState([])

  useEffect(() => {
    axios.get("https://6362424c7521369cd068e030.mockapi.io/ToDoList").then((res) => {
      console.log(res);
      setstate(res.data);
    })
  })
  console.log(state)
  return (
    <div className="App">
      <Create />

      {state.map((e) => (
        <div id="main">
          <p >First Name:{e.FName} </p>
          <p>Last Name:{e.LName}</p>
        </div>
      ))}
    </div>
  );
}

export default App;