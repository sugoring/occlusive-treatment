import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../elements/Button";
import { AuthContext } from "../AuthContext";
import "./Navbar.css";
import "../../App.css";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return (
          <Button onClick={handleLogout}>
            LOGOUT
          </Button>
      );
    } else {
      return (
        <Link to="/">
          <Button>SIGN UP</Button>
        </Link>
      );
    }
  };

  const renderLogoLink = () => {
    if (location.pathname === "/") {
      return (
        <span className="navbar-item-logo">
          DTX-eye<i className="fas fa-comment-medical fa-xs"></i>
        </span>
      );
    } else {
      return (
        <Link to="/home" className="navbar-item-logo">
          DTX-eye<i className="fas fa-comment-medical fa-xs"></i>
        </Link>
      );
    }
  };

  return (
    <div className="navbar-container">
      <div className="flex-item-1"></div>
      <div className="flex-item-1">
        <div className="flex-item-center">
          {renderLogoLink()}
        </div>
      </div>
      <div className="flex-item-1">
        <div className="flex-item-center">{renderAuthButton()}</div>
      </div>
    </div>
  );
}

export default Navbar;
