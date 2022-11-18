import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoadingCircle from "../../../components/ui/LoadingCircle";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import logo from "../../../images/logo.svg";
import { APP_NAME } from "../../../utilities/utilities";

const Navbar = () => {
  const { user, userLogOut, authLoading } = useContext(AuthContext);

  const menuItems = (
    <>
      <li>
        <Link to="/" className="capitalize">
          home
        </Link>
      </li>
      <li>
        <Link to="/appointment" className="capitalize">
          appointment
        </Link>
      </li>
      <li>
        <Link to="/about" className="capitalize">
          about
        </Link>
      </li>
      <li>
        <Link to="/reviews" className="capitalize">
          reviews
        </Link>
      </li>
      {authLoading ? (
        <LoadingCircle />
      ) : user?.uid ? (
        <>
          <li>
            <Link to="/dashboard" className="capitalize">
              dashboard
            </Link>
          </li>
          <li>
            <button type="button" onClick={userLogOut}>
              Log out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login" className="capitalize">
            login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="">
      <div className="container mx-auto px-4">
        <div className="navbar justify-between px-0 bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
              </ul>
            </div>
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
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 gap-4">{menuItems}</ul>
          </div>
          <label
            tabIndex={0}
            htmlFor="dashboard-drawer"
            className="btn btn-ghost lg:hidden text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
