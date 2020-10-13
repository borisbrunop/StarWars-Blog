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
						let peopleObjc = await response.json();
						people.push(...peopleObjc.results);
						while (peopleObjc.next != null) {
							let newPeopleObjc = peopleObjc.next.replace("http", "https");
							try {
								let respuesta = await fetch(`${newPeopleObjc}`, {
									method: "GET",
									headers: {
										"Content-Type": "application/JSON"
									}
								});
								if (respuesta.ok) {
									peopleObjc = await respuesta.json();
									people.push(...peopleObjc.results);
								}
							} catch (error) {
								console.log("something failed");
								console.log(error);
							}
						}
					} else {
						console.log(`error: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				setStore({
					people
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
			addNewFavorite: name => {
				let store = getStore();
				let repetido = store.favorites.find(Name => Name == name);
				console.log(repetido);
				console.log(name);
				if (repetido === undefined) {
					console.log("no esta repetido");
					setStore({
						favorites: [...store.favorites, name]
					});
				} else {
					console.log("esta reperito");
					alert("you cant use the same item");
				}
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
