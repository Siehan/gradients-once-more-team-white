import React from "react"
import { useParams } from "react-router"
import { useGradient } from "../context/GradientsContext"

const GradientText = () => {
	const { gradients } = useGradient()
	let { id } = useParams()
	return (
		<div className="m-auto text-center">
			<h1 className="text-white display-1">{gradients[id - 1]?.name}</h1>
			<div className="bg-white shadow p-2 rounded">{`background-image: linear-gradient(to right, ${
				gradients[id - 1]?.start
			}, ${gradients[id - 1]?.end})`}</div>
		</div>
	)
}

export default GradientText
