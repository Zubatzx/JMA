import { useState } from "react";
import Menu from "./Menu";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="s-header">
      <div className="s-header__ellipse"></div>
      <img className="s-header__logo" src="/images/logo.png" alt="logo" />
      <div className="row s-header__nav-wrap">
        <nav className="s-header__nav">
          <ul>
            <li
              className={
                window.location.pathname === "/home" ||
                window.location.pathname === "/"
                  ? "current"
                  : ""
              }
            >
              <a href="/home">Home</a>
            </li>
            <li
              className={
                window.location.pathname === "/learning-model" ? "current" : ""
              }
            >
              <a href="/learning-model">Learning Model</a>
            </li>
            <li
              className={
                window.location.pathname === "/program" ? "current" : ""
              }
            >
              <a href="/program">Program</a>
            </li>
            <li
              className={
                window.location.pathname === "/igniters" ? "current" : ""
              }
            >
              <a href="/igniters">Igniters</a>
            </li>
            <li
              className={
                window.location.pathname === "/contact-us" ? "current" : ""
              }
            >
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mobile-menu" open={open} onClick={() => setOpen(!open)}>
        <img className="menu-icon" src="/images/menu.svg" alt="logo" />
      </div>
      {open === true && (
        <img
          className="close-icon"
          src="/images/close.svg"
          alt="logo"
          onClick={() => setOpen(!open)}
        />
      )}
      {open === true && <Menu />}
    </header>
  );
}

export default Navbar;
