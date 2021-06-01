import {
	createContext,
	useReducer,
	useContext,
	useState,
	useCallback,
} from "react"
import { useIsMounted } from "../hook/useIsMounted"
import gradientReducer from "../reducers/gradientReducer"

export const GradientContext = createContext()

export const GradientContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(gradientReducer, {
		gradients: [],
		loading: true,
		error: "",
	})

	const [filter, setFilter] = useState("all")
	const { gradients, loading, error } = state
	const isMounted = useIsMounted()
	const [active, setActive] = useState(false)
	const [page, setPage] = useState(1)
	const url = `https://gradients-api.herokuapp.com/gradients`

	const initFetch = useCallback(() => dispatch({ type: "FETCH_INIT" }), [])

	const fetchGradient = useCallback(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`Something went wrong with your fetch" : ${response.status}`
					)
				}
				return response.json()
			})
			.then((data) => {
				if (isMounted.current) {
					dispatch({ type: "FETCH_SUCCESS", payload: data })
					console.log(isMounted)
				}
			})
			.catch((error) => {
				if (isMounted.current) {
					dispatch({ type: "FETCH_FAILURE", payload: error.message })
					console.log(isMounted)
				}
			})
	}, [url, isMounted])

	return (
		<GradientContext.Provider
			value={{
				gradients,
				loading,
				filter,
				setFilter,
				error,
				initFetch,
				fetchGradient,
				active,
				setActive,
				page,
				setPage,
			}}
		>
			{children}
		</GradientContext.Provider>
	)
}

export const useGradient = () => {
	const context = useContext(GradientContext)
	if (context === undefined) {
		throw new Error(
			"It seems that you are trying to use GradientContext outside of its provider"
		)
	}
	return context
}
