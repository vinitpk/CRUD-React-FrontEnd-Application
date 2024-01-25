import React from "react";
import { Link } from "react-router-dom";
import img_logo from "../../image/logo-dark.png";

// Functional component representing the navigation bar
const NavBar = () => {
  return (
    // Navbar container with styling classes
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 shadow rounded">
      <div className="container-fluid">
        {/* Logo and brand name linking to the home page */}
        <Link className="navbar-brand d-flex align-items-center" to={"/"}>
          {/* Logo image */}
          <img
            src={img_logo}
            width="45"
            height="auto"
            className="d-inline-block align-center"
            alt=""
          />
          {/* Brand name */}
          <b className="h3 d-inline-block align-center p-2">C.R.U.D</b>
        </Link>

        {/* Navbar toggle button for responsive design */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Navigation link to view all students */}
            <li className="nav-item">
              <Link className="nav-link" to={"/view-students"}>
                <p className="h6 d-inline-block align-center">
                  View All Students
                </p>
              </Link>
            </li>

            {/* Navigation link to add a new student */}
            <li className="nav-item">
              <Link className="nav-link" to={"/add-students"}>
                <p className="h6 d-inline-block align-center">
                  Add New Student
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Export the NavBar component as the default export
export default NavBar;
