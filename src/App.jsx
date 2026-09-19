import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
    </>
  );
}

export default App;
