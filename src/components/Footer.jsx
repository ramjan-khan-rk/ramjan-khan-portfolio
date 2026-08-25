
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>RAMJAN KHAN</span>
        <span>Developer &amp; Product Builder</span>
      </div>

      <div className="footer-right">
        <span>© {new Date().getFullYear()}</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}

export default Footer;
