import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"
import { useGradient } from "../context/GradientsContext"

const Gradients = () => {
	const { loading, error } = useGradient()

	return (
		<div>
			{loading ? (
				<p className="text-center">Loading...</p>
			) : (
				<GradientsSelect />
			)}
			{error && <p>{error}</p>}
			<GradientsList />
		</div>
	)
}

export default Gradients
