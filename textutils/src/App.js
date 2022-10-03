import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Darkmode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enable Lightmode");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      setBtnText("Enable Darkmode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Textutils"
          home="Home"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter your Text" mode={mode} />}
            />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
