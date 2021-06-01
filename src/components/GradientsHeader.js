import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg"
import { ReactComponent as Next } from "bootstrap-icons/icons/arrow-right.svg"
import { ReactComponent as Prev } from "bootstrap-icons/icons/arrow-left.svg"

const GradientsHeader = ({
	children,
	style,
	handleNextClick,
	handlePrevClick,
	handleReloadClick,
}) => {
	return (
		<header
			className="text-center bg-dark text-white py-5 mb-5 shadow-sm bg-white"
			style={style}
		>
			{children}
			<button
				aria-label="Clicker pour afficher le dégradé précédant"
				type="button"
				className="btn btn-outline-light m-1"
				onClick={handlePrevClick}
			>
				<Prev />
			</button>
			<button
				aria-label="Clicker pour changer le dégradé"
				type="button"
				className="btn btn-outline-light m-1"
				onClick={handleReloadClick}
			>
				<SvgToggle />
			</button>
			<button
				aria-label="Clicker pour afficher le dégradé suivant"
				type="button"
				className="btn btn-outline-light m-1"
				onClick={handleNextClick}
			>
				<Next />
			</button>
		</header>
	)
}

export default GradientsHeader
