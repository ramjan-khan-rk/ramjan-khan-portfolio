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

     ```jsx
<div className="navbar-socials">
  <a
    href="https://github.com/ramjan-khan-rk"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    GH
  </a>

  <a
    href="https://www.linkedin.com/in/ramjan-khan"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    in
  </a>
</div>
```

    </header>
  );
}

export default Navbar;