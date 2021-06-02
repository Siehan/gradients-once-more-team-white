const ToggleModeButton = (props) => {
  const { darkMode, setDarkMode } = props;

  const handleButtonClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {!darkMode ? (
        <button
          onClick={handleButtonClick}
          aria-label="Clickez pour afficher le mode sombre"
          className="btn btn-secondary position-absolute"
        >
          🌒
        </button>
      ) : (
        <button
          onClick={handleButtonClick}
          aria-label="Clickez pour afficher le mode couleur"
          className="btn btn-warning position-absolute"
        >
          🌔
        </button>
      )}
    </>
  );
};
export default ToggleModeButton;
