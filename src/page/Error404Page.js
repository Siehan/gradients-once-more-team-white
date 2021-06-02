import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

export const Error404Page = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column error-template  error-page">
        <div className=" m-auto text-center">
          <h1 className="oops">Oops!</h1>
          <h2 className="not-found">404 Not Found</h2>
          <div className="error-details">Sorry, an error has occured, Requested page not found!</div>
          <div class="error-actions">
            <NavLink to="/" type="button" aria-label="Click to go back home" className="btn btn-light btn-lg text-dark">
              Take Me Home
            </NavLink>
            <a href="https://alyra.fr" className="btn btn-dark btn-lg text-white">
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
