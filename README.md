# Alyra Gradients Team White Project - Context API
White Team: Nassim ,Sylvie, Victor et Grégory
## Mise en place du Gradient Context
```js
Nous y avons, déclarer toute nos variables de state, nos Callbacks et le fetch des données.
Nous avons aussi rencontrer quelque problèmes avec le scope du "FilterContextProvider" et avons
donc décidé de le placer directement dans le GradientContext.

Exemple : 

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
setPage,}}
>
{children}
</GradientContext.Provider>
```

## Fetch des données

```js
Les données ont été fetch depuis l'API https://gradients-api.herokuapp.com/gradients

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
	}
		})
.catch((error) => {
	if (isMounted.current) {
	dispatch({ type: "FETCH_FAILURE", payload: error.message })
	}
		})
	}, [url, isMounted])
```
## Les Bonus

```js
Utilisations du custom hook "isMounted" :
Exemple : if (isMounted.current) {
	dispatch({ type: "FETCH_SUCCESS", payload: data })
	}

 Des fonctions Callback pour le loading et la récupération de données:
 Exemple: 	const initFetch = useCallback(() => dispatch({ type: "FETCH_INIT" }), [])

 Mise en places des pages(vu en cours):
 Exemple : dans le fichier "SwitchPage",

<button
	className="btn btn-outline-dark"
	disabled={page === 1}
	onClick={() => setPage(1)}
>
				1
</button>
Puis dans le fichier GradientList,
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
```

