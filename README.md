# Projet Alyra Gradients Once More
Netlify:
Repo de départ : Gradient starter
Équipe Blanche: Sylvie, Victor, Grégory, Nassim

## Enoncé :

 Dans ce projet, nous avons ciblé différents objectifs :
  - useReducer avec des actions FETCH_INIT FETCH_SUCCESS, FETCH_FAILURE,
  - Les gradients sont récupérés via une API https://gradients-api.herokuapp.com
  - GradientsContext pour appeler les données,
  - La structure des routes, 
  - La navigation (Accueil, Précédent, Suivant) depuis routes /gradient/:id 

## GradientReducer : 

On met en place la constante GradientReducer grâce un switch de 3 actions distinctes "FETCH_INIT", "FETCH_SUCCESS", "FETCH_FAILURE".
On utilise ensuite cette constante et les 3 actions qui lui sont attribuées pour le fetch et ces différents états dans le GradientContext.

    const gradientReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        gradients: action.payload,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      throw new Error (
        `Unsupported action type ${action.type} in gradientReducer`
      )
  }
}

 ## GradientContext : 

  Dans ce fichier nous avons commencé par créer le context et le Component Provider (GradientContext). 
    import {createContext, useReducer, useEffect } from "react";

    export const GradientContext = createContext();

    export const GradientContextProvider = ({ children }) => {

    return (
    <GradientContext.Provider value={{ state, dispatch }}>
      {!state.loaded ? <p>Loading...</p> : children}
    </GradientContext.Provider>
    );
    };
  
  
  Ensuite nous avons ajouté au GradientContextProvider un useReducer, un useState, ainsi que le hook useIsMounted :
    const [state, dispatch] = useReducer(gradientReducer, {
    gradients: [],
    loading: true,
    error: "",
  })
  const [filter, setFilter] = useState("all")
  const { gradients, loading, error } = state
  const [card, setCard] = useState(gradients)
  const isMounted = useIsMounted()

Ensuite nous avons mis en place un useEffect, et utilisé le custom hook "isMounted" :

    useEffect(() => {
    fetch(url)
      .then((response) => {
        dispatch({ type: "FETCH_INIT" })
        if (!response.ok) {
          throw new Error(
            `Something went wrong with your fetch": ${response.status}`
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

## Mise en Place des Routes :
Tout d'abord, nous avons installé les dépendances react router dom 

yarn add react-router-dom

Ensuite on les importe dans le fichier index.js : 
    import { BrowserRouter as Router } from 'react-router-dom'

Puis on met en place les différentes routes : 
    

    ReactDOM.render(
        <React.StrictMode>
            <GradientContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/gradient/:id" component={GradientPage} />
                        <Route exact path="/" component={App} />
                        <App />
                    </Switch>
                </Router>
            </GradientContextProvider>
        </React.StrictMode>,
        document.getElementById("root")
    )

## FullGradient :

 
### Full Page

En cliquant sur le bouton "Full Screen", l'utilisateur sera redirigé vers une page affichant la couleur sélectionnée. 

Cette page comporte différentes fonctionnalités. Tout d'abord, elle récupère l'identifiant "id" afin de d’afficher le bon gradient. 

    const { gradients } = useGradient()
  const { id } = useParams()

Nous avons également trois boutons : 
- "Tous" => qui redirige l'utilisateur vers la liste des gradients.
                
- "Previous" => qui permet d'afficher la couleur précédente. L'identification se fait grâce à l'id. 

- "Next" => qui permet d'afficher la couleur suivante. L'identification se fait grâce à l'id. 

Ces 3 boutons, sont englobé dans une balise Link :

     <NavLink
    to={`/gradient/${Number(id) - 1}`}
    type="button"
    className="btn btn-dark text-white nav-link me-2"
    >
      Previous
   </NavLink>

### GradientText :

En plus de ces boutons, l'utilisateur à accès au nom du gradients affichée, ainsi qu'au code linear. 

    <h1 className="text-white display-1">{gradients[id - 1]?.name}</h1>
        <div className="bg-white shadow p-2 rounded">{`background-image: linear-gradient(to right, ${
            gradients[id - 1]?.start
        }, ${gradients[id - 1]?.end})`}</div>

### GradientPageError :

Les gradients sont identifiés grâce à l'id. Dans la gradient list, récupérée par l'api, nous avons 25 gradients soit 25 id.

Dans le navigateur, l'utilisateur peut modifier, sur l'url, le numéro de l'id afin d'afficher une autre couleur. 
Seulement, si l'utilisateur, indique un id non listé (ex: 50), alors une page, sous fond noir, s'affichera, 

    style={{
                backgroundColor: "black",
            }}

avec un message d'erreur. 

    <p className="text-white m-auto text-center">
          Oops, this gradient does not exist

        </p>

L'utilisateur aura toujours la possibilité de revenir à la liste des gradients (page Home), grâce au bouton "Tous".

Nous y avons, déclaré toutes nos variables de state, nos Callbacks et le fetch des données.
Nous avons aussi rencontré quelques problèmes avec le scope du "FilterContextProvider" et avons donc décidé de le placer directement dans le GradientContext.

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

## Fetch des données :

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
Utilisation du custom hook "isMounted" :
Exemple : if (isMounted.current) {
	dispatch({ type: "FETCH_SUCCESS", payload: data })
	}

 Des fonctions Callback pour le loading et la récupération de données :
 Exemple: 	const initFetch = useCallback(() => dispatch({ type: "FETCH_INIT" }), [])

 Mise en place de plusieurs pages (Comme nous l’avons vu avons en cours):
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

![image](https://user-images.githubusercontent.com/53022990/120336838-087a3400-c2f3-11eb-9684-703ee4ed0338.png)
