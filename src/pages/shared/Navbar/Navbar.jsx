import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { APP_NAME } from "../../../utilities/utilities";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto px-4">
        <div className="">
          <Link to="/">
            <img
              src={logo}
              alt={`${APP_NAME} logo`}
              className="w-16 h-16 mx-auto"
              width="64"
              height="64"
              decoding="async"
              fetchpriority="low"
            />
          </Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
