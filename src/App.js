import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./components/AuthContext";

import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Dash from "./components/pages/Dash";
import SignUp from "./components/pages/SignUp";
import Help from "./components/layouts/Help";

function App() {
  return (
    <div className="app-container">
      <div className="app-itmes">
        <AuthProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dash" element={<Dash />} />
            </Routes>
            <Help />
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
