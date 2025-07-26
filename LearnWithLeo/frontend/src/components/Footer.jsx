import logo from '../assets/logo-white.png';
import instagramIcon from '../assets/instagram-icon.svg';
import tiktokIcon from '../assets/tiktok-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import xIcon from '../assets/x-icon.svg';

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #3aafa9 0%, #2b7a78 100%)",
        padding: "0.4rem 0 0.2rem 0",
        textAlign: "center",
        marginTop: "2rem",
        boxShadow: "0 -2px 8px rgba(60, 170, 169, 0.10)",
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.7rem",
          marginBottom: "0.1rem"
        }}>
          <img
            src={logo}
            alt="LearnWithLeo Logo"
            style={{
              height: "44px", // made logo bigger for visibility
              borderRadius: "7px",
              padding: "2px",
              boxShadow: "0 1px 6px rgba(60,170,169,0.08)",
              background: "none"
            }}
          />
          <span style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.25rem",
            letterSpacing: "1px"
          }}>
            LearnWithLeo
          </span>
        </div>
        <p style={{ color: "#e0f7fa", fontSize: "1rem", marginBottom: "0.1rem" }}>
          Inspiring kids to play, learn, save, and grow every day!
        </p>
        <p style={{ color: "#b2dfdb", fontSize: "0.95rem", marginBottom: "0.1rem" }}>
          &copy; {new Date().getFullYear()} LearnWithLeo. All rights reserved.
        </p>
        <p>
          <a
            href="mailto:support@learnwithleo.com"
            style={{
              color: "#ffd700",
              textDecoration: "underline",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Contact Support
          </a>
        </p>
        <div style={{
          marginTop: "0.2rem",
          display: "flex",
          justifyContent: "center",
          gap: "20px"
        }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            style={{ display: "inline-block" }}
          >
            <img src={instagramIcon} alt="Instagram" style={{ height: 32, width: 32, background: "none" }} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            style={{ display: "inline-block" }}
          >
            <img src={tiktokIcon} alt="TikTok" style={{ height: 32, width: 32, background: "none" }} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            style={{ display: "inline-block" }}
          >
            <img src={facebookIcon} alt="Facebook" style={{ height: 32, width: 32, background: "none" }} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            title="X"
            style={{ display: "inline-block" }}
          >
            <img src={xIcon} alt="X" style={{ height: 32, width: 32, background: "none" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;