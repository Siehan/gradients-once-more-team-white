const ToggleModeButton = (props) => {
	const { darkMode, setDarkMode } = props

	const handleButtonClick = () => {
		setDarkMode(!darkMode)
	}

	return (
		<>
			{!darkMode ? (
				<button
					onClick={handleButtonClick}
					aria-label="Clickez pour afficher le mode sombre"
					className="btn btn-dark position-absolute"
					//className="btn btn-dark position-absolute top-20 start-50 translate-middle"
				>
					🌒
				</button>
			) : (
				<button
					onClick={handleButtonClick}
					aria-label="Clickez pour afficher le mode clair"
					className="btn btn-light position-absolute"
					//className="btn btn-light position-absolute top-20 start-50 translate-middle"
				>
					🌔
				</button>
			)}
		</>
	)
}
export default ToggleModeButton
