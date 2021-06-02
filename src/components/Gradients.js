import GradientsList from "./GradientsList";
import GradientsSelect from "./GradientsSelect";
import { useGradient } from "../context/GradientsContext";

const Gradients = () => {
  const { loading, error } = useGradient();

  return (
    <div>
      {loading ? (
        <p className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-border text-success" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-border text-info" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only"></span>
          </div>
        </p>
      ) : (
        <GradientsSelect />
      )}
      {error && <p>{error}</p>}
      <GradientsList />
    </div>
  );
};

export default Gradients;
