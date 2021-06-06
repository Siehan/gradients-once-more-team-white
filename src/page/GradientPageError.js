import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const GradientPageError = () => {
  const { id } = useParams();

  return (
    <div className="App min-vh-100 d-flex flex-column">
      <div className="flex-fill d-flex error-bg ">
        <nav className="fixed-top nav">
          <li className="nav-item">
            <NavLink
              to="/"
              type="button"
              aria-label="Click to go back to all the gradients"
              className="btn btn-dark text-white nav-link me-2"
            >
              Home
            </NavLink>
          </li>
          {id > 1 ? (
            <li className="nav-item">
              <NavLink
                to={`/gradient/${Number(id) - 1}`}
                type="button"
                aria-label="Click to display the previous gradient"
                className="btn btn-dark text-white nav-link me-2"
              >
                Previous
              </NavLink>
            </li>
          ) : (
            ""
          )}
          {id < 25 ? (
            <li className="nav-item">
              <NavLink
                to={`/gradient/${Number(id) + 1}`}
                type="button"
                aria-label="Click to display the next gradient"
                className="btn btn-dark text-white nav-link me-2"
              >
                Next
              </NavLink>
            </li>
          ) : (
            ""
          )}
        </nav>
        <p className="error-exit m-auto text-center">Oops, this gradient does not exist</p>
      </div>
      <Footer />
    </div>
  );
};

export default GradientPageError;
