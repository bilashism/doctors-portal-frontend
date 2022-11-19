import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet />

            {/* <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label> */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">my appointments</Link>
              </li>
              <li>
              <Link to="/dashboard/allUsers">all users</Link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
