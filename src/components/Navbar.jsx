import { useEffect, useState } from "react";

const links = [
  ["about", "About"],
  ["projects", "Work"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "experience", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#home" className="navbar-logo" onClick={() => setOpen(false)}>
        RK<span>.</span>
      </a>

      <nav className="navbar-links" aria-label="Primary">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""}>
            {label}
          </a>
        ))}
      </nav>

      <div className="navbar-socials">
        <a href="https://github.com/ramjan-khan-rk" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ramjan-khan/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <div id="mobile-nav" className={`nav-drawer ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map(([id, label], index) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
