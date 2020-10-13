import React, { useContext, useEffect, useState } from "react";
import placeHolder from "../../img/300.png";
import "../../styles/home.scss";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [searchPeople, setSearchPeople] = useState("");
	const [searchPlanets, setSearchPlanets] = useState("");

	useEffect(() => {
		actions.fetchPersonajes();
		actions.fetchPlanets();
	}, []);

	const filteredPeople = store.people.filter(people => {
		return people.name.toLowerCase().includes(searchPeople.toLocaleLowerCase());
	});
	const filteredPlanets = store.planets.filter(planets => {
		return planets.name.toLowerCase().includes(searchPlanets.toLocaleLowerCase());
	});

	console.log(filteredPeople);

	return (
		<>
			<h1 className="text-danger ml-4 margen">Characters</h1>
			<input
				className="w-25 ml-4"
				type="text"
				placeholder="Search"
				onChange={e => setSearchPeople(e.target.value)}
			/>
			<div className="">
				<CardGroup className="card-group-scroll">
					{filteredPeople.map((personajes, id) => (
						<Card key={id} style={{ width: "18rem" }} className="m-4 card">
							<Card.Img variant="top" src={placeHolder} />
							<Card.Body>
								<Card.Title>{personajes.name}</Card.Title>
								<Card.Text>{`Gender: ${personajes.gender}`}</Card.Text>
								<Card.Text>{`Hair color: ${personajes.hair_color}`}</Card.Text>
								<Card.Text>{`Eye color: ${personajes.eye_color}`}</Card.Text>
								<Button
									className="m-2"
									variant="outline-primary"
									onClick={e => history.push(`/peopleDetails/${personajes.name}`)}>
									Learn More
								</Button>
								<Button
									variant="outline-warning"
									onClick={e => actions.addNewFavorite(personajes.name)}>
									♥
								</Button>
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			</div>
			<h1 className="text-danger ml-4">Planets</h1>
			<input
				className="w-25 ml-4"
				type="text"
				placeholder="Search"
				onChange={e => setSearchPlanets(e.target.value)}
			/>
			<div className="">
				<CardGroup className="card-group-scroll">
					{filteredPlanets.map((planets, id) => (
						<Card key={id} style={{ width: "18rem" }} className="m-4 card">
							<Card.Img variant="top" src={placeHolder} />
							<Card.Body>
								<Card.Title>{planets.name}</Card.Title>
								<Card.Text>{`Population: ${planets.population}`}</Card.Text>
								<Card.Text>{`Terrain: ${planets.terrain}`}</Card.Text>
								<Button
									className="m-2"
									variant="outline-primary"
									onClick={e => history.push(`/planetsDetails/${id}`)}>
									Learn More
								</Button>
								<Button variant="outline-warning" onClick={e => actions.addNewFavorite(planets.name)}>
									♥
								</Button>
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			</div>
		</>
	);
};
