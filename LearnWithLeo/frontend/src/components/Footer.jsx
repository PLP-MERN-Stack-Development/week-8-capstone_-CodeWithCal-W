function Footer() {
  return (
    <footer style={{ background: "#ffda85", padding: "1rem", textAlign: "center", marginTop: "2rem" }}>
      <p>&copy; {new Date().getFullYear()} Learn With Leo. All rights reserved.</p>
      <p>
        <a href="mailto:support@learnwithleo.com">Contact Support</a>
      </p>
    </footer>
  );
}

export default Footer;