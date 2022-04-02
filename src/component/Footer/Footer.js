import React from "react";
import "./Footer.css";

function Footer({ logo }) {
  return (
    <footer className="footer">
      <img src={logo} alt="Travel Companion" />
      <div className="social">
        <h3>Our Social Presence</h3>
        <div>
        <a
          href="https://www.linkedin.com/in/anshul-choubey-3985491b2/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/linkedin.svg" alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/anshulchoubeyofficial/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/instagram.svg" alt="Instagram" />
        </a>
        <a
          href="https://github.com/Anshul9826"
          target="_blank"
          rel="noreferrer"
        >
          <img src="assets/github.svg" alt="Github" />
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
