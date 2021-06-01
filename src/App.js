import React from "react";
import { useGradient } from "./context/GradientsContext";
import { useState } from "react";
import GradientsHeader from "./components/GradientsHeader";
import Gradients from "./components/Gradients";
import Footer from "./components/Footer";
import SwitchPage from "./page/SwitchPage";
import ToggleModeButton from "./components/ToggleModeButton";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const modeClasses = darkMode ? "bg-dark text-white" : "bg-light";
  const { gradients, active, setActive } = useGradient();
  const list = gradients;
  const length = list.length;
  const chooseGradient = () => Math.floor(Math.random() * length);

  const [randomGradient, setRandomGradient] = useState(chooseGradient);

  const handleReloadClick = () => {
    setRandomGradient(chooseGradient);
  };
  const handleNextClick = () => {
    setRandomGradient(randomGradient === length - 1 ? 0 : randomGradient + 1);
  };
  const handlePrevClick = () => {
    setRandomGradient(randomGradient === 0 ? length - 1 : randomGradient - 1);
  };
  const style = {
    backgroundImage: `linear-gradient(to right, ${list[randomGradient]?.start}, ${list[randomGradient]?.end})`,
  };

  return (
    <div className={`min-vh-100 d-flex flex-column ${modeClasses}`}>
      <div className="min-vh-100 d-flex flex-column" style={style}>
        <GradientsHeader
          handleReloadClick={handleReloadClick}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
          style={style}
        >
          <h1 className="display-1">Alyra Gradients</h1>
          <p className="tagline mt-3">Ultime collection des plus beaux dégradés</p>
        </GradientsHeader>

        <main className="container">
          <ToggleModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
          <h1 className="text-center my-4 text-white">Alyra Gradients</h1>
          <Gradients />
          {active && <SwitchPage />}
          {!active && (
            <button className="btn btn-dark" onClick={() => setActive(true)}>
              Show the gradients
            </button>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
