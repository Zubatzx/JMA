function Menu() {
  return (
    <header className="menu">
      <nav className="menu-container">
        <ul className="menu-list">
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
            className={window.location.pathname === "/program" ? "current" : ""}
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
    </header>
  );
}
export default Menu;
