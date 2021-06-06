import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGradient } from "../context/GradientsContext";
import GradientText from "./GradientText";
import Footer from "../components/Footer";
import GradientPageError from "./GradientPageError";

const GradientPage = () => {
  const { gradients } = useGradient();
  const { id } = useParams();

  return (
    <>
      {id < 26 ? (
        <div className="App min-vh-100 d-flex flex-column">
          <div
            className="flex-fill d-flex"
            style={{
              backgroundImage: `linear-gradient(to right, ${gradients[id - 1]?.start}, ${gradients[id - 1]?.end})`,
            }}
          >
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
                    aria-label="Click to display the next gradient"
                    type="button"
                    className="btn btn-dark text-white nav-link me-2"
                  >
                    Next
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </nav>
            <GradientText />
          </div>
          <Footer />
        </div>
      ) : (
        <GradientPageError />
      )}
    </>
  );
};

export default GradientPage;
