import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/ykdromar/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/ykdromar" target="_blank" rel="noreferrer">
          <FaGithub size={25} />
        </a>
        <a href="mailto:ykdromarpro@gmail.com" target="_blank" rel="noreferrer">
          <MdEmail size={25} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
