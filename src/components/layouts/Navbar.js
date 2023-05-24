import { Link } from "react-router-dom";

import { Button } from "../elements/Button";
import "./Layouts.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">

        <Link to="/" className="navbar-item-logo"></Link>

        <Link to="/" className="navbar-item-logo">
          DTX-eye<i class="fas fa-comment-medical fa-xs"></i>
        </Link>

        <Link to="/signup" className="navbar-item-signup">
          <Button buttonStyle="btn--outline">SIGN UP</Button>
        </Link>

      </div>
    </>
  );
}

export default Navbar;
