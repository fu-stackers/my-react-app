import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Login />
    </>
  );
}

export default App;
