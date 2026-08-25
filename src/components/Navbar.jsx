function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        RK<span>.</span>
      </a>

      <nav className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar-socials">
        <a href="#" aria-label="GitHub">
          GH
        </a>

        <a href="#" aria-label="LinkedIn">
          in
        </a>
      </div>
    </header>
  );
}

export default Navbar;