import React from "react";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./routes/Projects";
import Formations from "./routes/Formations";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/Projects" element={ <Projects/> } />
      <Route path="/Formations" element={ <Formations/> } />
      <Route path="/Contact" element={ <Contact/> } />
      <Route path="/About" element={ <About/> } />
    </Routes>
    </>
  );
}

export default App;
