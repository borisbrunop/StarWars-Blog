const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			newFavorite: {
				favorito: ""
			}
		},
		actions: {
			fetchPersonajes: async () => {
				let people = [];
				try {
					let response = await fetch(`https://swapi.dev/api/people/`, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});
					if (response.ok) {
						people = await response.json();
					} else {
						console.log(`error: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				setStore({
					people: people.results
				});
			},
			fetchPlanets: async () => {
				let planets = [];
				try {
					let response = await fetch(`https://swapi.dev/api/planets/`, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});
					if (response.ok) {
						planets = await response.json();
					} else {
						console.log(`error: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				setStore({
					planets: planets.results
				});
			},
			addFavorites: async (e, name) => {
				let actions = getActions();
				setStore({
					newFavorite: {
						favorito: name
					}
				});
				await actions.addNewFavorite();
				await setStore({
					newFavorite: {
						favorito: ""
					}
				});
			},
			addNewFavorite: () => {
				let store = getStore();
				setStore({
					favorites: [...store.favorites, store.newFavorite]
				});
			},
			deleteFavorite: (e, id) => {
				let store = getStore();
				let finishFavorites = store.favorites.filter((fav, i) => i != id);
				setStore({
					favorites: [...finishFavorites]
				});
			}
		}
	};
};

export default getState;
