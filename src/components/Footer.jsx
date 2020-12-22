import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}
      <a className="fab fa-github" href="https://github.com/leyulunna/keeper-note-app" target="_blank"></a>
      </p>
    </footer>
  );
}

export default Footer;
