import Navbar from "./component/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

import Add from "./component/Add";
import "./add.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Edit from "./component/Edit";
// const baseUrl = "https://studentcrudforlesson.herokuapp.com/api/student/get";
// const addUrl = "https://studentcrudforlesson.herokuapp.com/api/student/add";
// const deleteUrl="https://studentcrudforlesson.herokuapp.com/api/student/delete"
function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route
          path="/add"
          element={<Add/>}
        ></Route>
        <Route
          path="/edit/:id"
          element={<Edit/>}
        ></Route>
      </Routes>
      ,
    </>
  );
}

export default App;
