import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TfiAlignJustify } from "react-icons/tfi";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Navbar = () => {
  const { state } = useContext(ThemeContext);

  let mode = state.darkMode;
  return (
    <div
      className="n-wrapper"
      style={{
        backgroundColor: mode ? "#222" : "white",
        color: mode && "var(--orange)",
      }}
    >
      <h2 className="n-name" id="logo">
        {" "}
        <Link smooth spy to="Home" activeClass="activeClass">
          Tarun
        </Link>{" "}
      </h2>
      <Toggle />
      <ul style={{ listStyleType: "none" }} id="item">
        <li>
          <Link
            smooth
            spy
            to="Home"
            activeClass="activeClass"
            onClick={() => {
              document.getElementById("item").style.right == "-300px"
                ? (document.getElementById("item").style.right = "0")
                : (document.getElementById("item").style.right = "-300px");
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            smooth
            spy
            to="About"
            activeClass="activeClass"
            onClick={() => {
              document.getElementById("item").style.right == "-300px"
                ? (document.getElementById("item").style.right = "0")
                : (document.getElementById("item").style.right = "-300px");
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            smooth
            spy
            to="Skills"
            activeClass="activeClass"
            onClick={() => {
              document.getElementById("item").style.right == "-300px"
                ? (document.getElementById("item").style.right = "0")
                : (document.getElementById("item").style.right = "-300px");
            }}
          >
            Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link
            smooth
            spy
            to="Projects"
            activeClass="activeClass"
            onClick={() => {
              document.getElementById("item").style.right == "-300px"
                ? (document.getElementById("item").style.right = "0")
                : (document.getElementById("item").style.right = "-300px");
            }}
          >
            Projects
          </Link>
        </li>

        <li>
          {" "}
          <Link
            spy={true}
            to={"Contact"}
            smooth={true}
            onClick={() => {
              document.getElementById("item").style.right == "-300px"
                ? (document.getElementById("item").style.right = "0")
                : (document.getElementById("item").style.right = "-300px");
            }}
          >
            Contact
          </Link>
        </li>
        {/* <li>
          <a
            href="https://drive.google.com/file/d/1HIh48C2cqkc8bAgmB5vnDb-fkb2XVuoX/view?usp=sharing"
            style={{ textDecoration: "none", color: mode ? "var(--orange)" : "black" }}
            target="_blank"
          id="a_resume">
            Resume
          </a>
        </li> */}
      </ul>

      <TfiAlignJustify
        id="bar"
        onClick={() => {
          document.getElementById("item").style.right == "-300px"
            ? (document.getElementById("item").style.right = "0")
            : (document.getElementById("item").style.right = "-300px");
        }}
      />
    </div>
  );
};

export default Navbar;
