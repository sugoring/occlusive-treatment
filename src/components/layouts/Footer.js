import React from "react";
import "./Layouts.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">

      <Link to="/" className="footer-item-logo">
        DTX-eye<i class="fas fa-comment-medical fa-xs"></i>
      </Link>

      <small class="footer-item-rights">KNU © 2023</small>

    </div>
  );
}

export default Footer;
