import React from "react";
import { useGradient } from "../context/GradientsContext";

const SwitchPage = () => {
  const { page, setPage } = useGradient();
  return (
    <div className="btn-group mb-4">
      <button
        aria-label="Click to show all"
        className="btn btn-outline-light rounded-3 m-1"
        disabled={page === "tous"}
        onClick={() => setPage("tous")}
      >
        Tous
      </button>
      <button className="btn btn-outline-light rounded-3 m-1" disabled={page === 1} onClick={() => setPage(1)}>
        1
      </button>
      <button className="btn btn-outline-light rounded-3 m-1" disabled={page === 2} onClick={() => setPage(2)}>
        2
      </button>
      <button className="btn btn-outline-light rounded-3 m-1" disabled={page === 3} onClick={() => setPage(3)}>
        3
      </button>
      <button className="btn btn-outline-light rounded-3 m-1" disabled={page === 4} onClick={() => setPage(4)}>
        4
      </button>
      <button className="btn btn-outline-light rounded-3 m-1" disabled={page === 5} onClick={() => setPage(5)}>
        5
      </button>
      <button className="btn btn-outline-light rounded-3 m-1" disabled={page === 6} onClick={() => setPage(6)}>
        6
      </button>
    </div>
  );
};

export default SwitchPage;
