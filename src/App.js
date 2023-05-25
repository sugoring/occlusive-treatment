import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Dash from "./components/pages/Dash";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <div className="app-itmes">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dash" element={<Dash />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
