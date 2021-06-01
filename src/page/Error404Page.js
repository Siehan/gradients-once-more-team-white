import "bootstrap/dist/css/bootstrap.css";
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
            <a href="https://gradients-once-more-team-white.netlify.app/" className="btn btn-danger btn-lg">
              Take Me Home
            </a>
            <a href="https://alyra.fr" className="btn btn-default bg-white btn-lg">
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
