import React from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import "./Navbar.css";
import "../../App.css";

function Navbar() {
  return (
    <div className="navbar-container">

      <div className="flex-item-1"></div>

      <div className="flex-item-1">
        <div className="flex-item-center">
          <Link to="/" className="navbar-item-logo">
            DTX-eye<i className="fas fa-comment-medical fa-xs"></i>
          </Link>
        </div>
      </div>

      <div className="flex-item-1">
        <div className="flex-item-center">
          <Link to="/signup" className="navbar-item-signup">
            <Button>SIGN UP</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
