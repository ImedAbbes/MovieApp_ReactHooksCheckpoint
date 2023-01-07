import React from "react";
import style from "./App.css";
import Movie from "./Movie";
import { Route, Routes } from "react-router-dom";
import Descriptions from "./Descriptions";

function App() {
  return (
    <Routes>
      
        <Route index path="/" element={<Movie/>}></Route>
        <Route path="/" element={<Movie/>}></Route>
        <Route path="/movie/:name" element={<Descriptions/>}></Route>
    </Routes>
  );
}

export default App;
