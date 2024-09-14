import React from "react";
import { HashLink } from "react-router-hash-link";
import pic from "../assets/pic.jpg";
import cv from "../assets/cv.pdf";
const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -67;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <>
      <div className="navbar bg-base-200 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  to="#experiences"
                >
                  Experience
                </HashLink>
              </li>
              <li>
                <HashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  to="#projects"
                >
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  to="#skills"
                >
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  to="#education"
                >
                  Education
                </HashLink>
              </li>
              <li>
                <HashLink
                  scroll={(el) => scrollWithOffset(el)}
                  smooth
                  to="#contact"
                >
                  Contact Me
                </HashLink>
              </li>
            </ul>
          </div>
          <span className="btn btn-ghost text-xl">Yash Kumar Dromar</span>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#experiences"
              >
                Experience
              </HashLink>
            </li>
            <li>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#projects"
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#skills"
              >
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#education"
              >
                Education
              </HashLink>
            </li>
            <li>
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                smooth
                to="#contact"
              >
                Contact Me
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={pic}
            className="max-w-sm rounded-full shadow-2xl "
            alt="pic"
          />
          <div>
            <h1 className="text-5xl font-bold">Yash Kumar Dromar</h1>
            <p className="py-6">
              I am a final-year undergraduate student at IIT Kanpur, in
              Department of Biological Sciences and Bioengineering with a strong
              passion for technology. My primary interests lie in software and
              web development, where I enjoy exploring and learning about
              various technologies. I am always eager to seize opportunities to
              deepen my knowledge and showcase my skills. I thrive in
              collaborative environments, especially when working with motivated
              and enthusiastic individuals who are equally driven to explore and
              innovate
            </p>
            <a href={cv} target="_blank" rel="noreferrer">
              <button className="btn btn-primary">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
