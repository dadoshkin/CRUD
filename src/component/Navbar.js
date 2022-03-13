import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="container
  "
        >
          <Link className="navbar-brand" to="/">
            CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="justify-content-between align-items-center d-flex">
              <ul className="navbar-nav mx-5 ">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-primary"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-primary" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-primary" to="/student">
                    Student
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="ms-auto">
              <Link className="btn btn-primary  align-items-center mt-3" to="/add">
                Add User
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
