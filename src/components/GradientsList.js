import Gradient from "./Gradient"
import { useGradient } from "../context/GradientsContext"
import { useEffect } from "react"

const GradientsList = () => {
	const { gradients, filter, initFetch, fetchGradient, active, page } =
		useGradient()

	useEffect(() => {
		initFetch()
		fetchGradient()
	}, [initFetch, fetchGradient])

	const list = gradients.filter((el) => {
		if (filter === "all") {
			return true
		}
		return el.tags.includes(filter)
	})
	return (
		<>
			{active && (
				<ul className="row list-unstyled">
					{page === "tous" &&
						list.map((el) => {
							const { name, start, end, tags, id = [] } = el
							return (
								<Gradient
									key={id}
									id={id}
									colorStart={start}
									colorEnd={end}
									name={name}
									tags={tags}
								/>
							)
						})}
					{page === 1 &&
						list.slice(0, 4).map((el) => {
							const { name, start, end, tags, id = [] } = el
							return (
								<Gradient
									key={id}
									id={id}
									colorStart={start}
									colorEnd={end}
									name={name}
									tags={tags}
								/>
							)
						})}
					{page === 2 &&
						list.slice(0, 8).map((el) => {
							const { name, start, end, tags, id = [] } = el
							return (
								<Gradient
									key={id}
									id={id}
									colorStart={start}
									colorEnd={end}
									name={name}
									tags={tags}
								/>
							)
						})}
					{page === 3 &&
						list.slice(0, 12).map((el) => {
							const { name, start, end, tags, id = [] } = el
							return (
								<Gradient
									key={id}
									id={id}
									colorStart={start}
									colorEnd={end}
									name={name}
									tags={tags}
								/>
							)
						})}
					{page === 4 &&
						list.slice(0, 16).map((el) => {
							const { name, start, end, tags, id = [] } = el
							return (
								<Gradient
									key={id}
									id={id}
									colorStart={start}
									colorEnd={end}
									name={name}
									tags={tags}
								/>
							)
						})}
					{page === 5 &&
						list.slice(0, 20).map((el) => {
							const { name, start, end, tags, id = [] } = el
							return (
								<Gradient
									key={id}
									id={id}
									colorStart={start}
									colorEnd={end}
									name={name}
									tags={tags}
								/>
							)
						})}
					{page === 6 &&
						list.map((el) => {
							const { name, start, end, tags, id = [] } = el
							return (
								<Gradient
									key={id}
									id={id}
									colorStart={start}
									colorEnd={end}
									name={name}
									tags={tags}
								/>
							)
						})}
				</ul>
			)}
		</>
	)
}

export default GradientsList
