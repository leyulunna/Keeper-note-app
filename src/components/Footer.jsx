import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}
      <a className="fab fa-github" rel="noreferrer" href="https://github.com/leyulunna/keeper-note-app" target="_blank">{null}</a>
      </p>
    </footer>
  );
}

export default Footer;

