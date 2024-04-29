import React from "react";
import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <nav className="top-nav">
      <div>
        <i className="material-icons">account_circle</i>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <ul className="nav-links">
          <li className="desktop-nav">
            <Link to="/">Home</Link>
          </li>
          <li className="desktop-nav">
            <Link to="/manage-appointments">Manage Appointments</Link>
          </li>
          <li className="desktop-nav">
            <Link to="/past-activity">Past Activity</Link>
          </li>
          <li className="desktop-nav">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function BottomBar() {
  return (
    <nav className="bottom-nav">
      <div style={{width: "100%"}}>
        <ul className="bottom-nav-links">
          <li className="desktop-nav">
            <a href="#contact-us">Contact Us</a>
          </li>
          <li className="desktop-nav">
            <a href="#faq">FAQ</a>
          </li>
          <li className="desktop-nav">
            <a href="#terms">Terms & Conditions</a>
          </li>
          <li className="desktop-nav">
            <a href="#careers">Careers</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
