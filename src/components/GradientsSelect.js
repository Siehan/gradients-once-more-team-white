import { useGradient } from "../context/GradientsContext"

const GradientsSelect = () => {
	const { gradients, filter, setFilter } = useGradient()
	const uniqueTags = allTags(gradients)
	const handleSelectChange = (e) => {
		setFilter(e.target.value)
	}

	function allTags(list) {
		let listTotal = []
		for (let element of list) {
			if ("tags" in element) {
				listTotal = listTotal.concat(element.tags)
			}
		}
		const listTagsUnique = []
		listTotal.forEach((el) => {
			if (!listTagsUnique.includes(el)) {
				listTagsUnique.push(el)
			}
		})
		return listTagsUnique
	}

	return (
		<>
			<div className="input-group mb-3">
				<label className="input-group-text" htmlFor="select">
					Filter per tag
				</label>
				<select
					className="form-select"
					id="select"
					value={filter}
					onChange={handleSelectChange}
				>
					<option value="all">Tous</option>
					{uniqueTags.map((el) => (
						<option key={el} value={el}>
							{el}
						</option>
					))}
				</select>
			</div>
		</>
	)
}

export default GradientsSelect
