import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>LOGO</li>
          </Link>
          <Link to={"/settings"}>
            <li>SETTINGS</li>
          </Link>

          <Link to={"/signin-and-signup"}>
            <li>SIGNIN & SIGNUP</li>
          </Link>
          <Link to={"/create-campagin"}>
            <li>CREATE CAMPAGIN</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
