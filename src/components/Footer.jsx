function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>Ramjan Khan</span>
        <span>Developer and product builder</span>
      </div>

      <div className="footer-right">
        <span>© {new Date().getFullYear()}</span>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
