import React from "react"
import { NavLink } from "react-router-dom"

const GradientButton = ({ id }) => {
	return (
		<div className="mt-3">
			<NavLink to={`/gradient/${id}`}>
				<button className="btn btn-outline-dark w-100">Full screen</button>
			</NavLink>
		</div>
	)
}

export default GradientButton
