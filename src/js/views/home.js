import React, { useContext, useEffect } from "react";
import placeHolder from "../../img/300.png";
import "../../styles/home.scss";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPersonajes();
		actions.fetchPlanets();
	}, []);

	return (
		<>
			<h1 className="text-danger ml-4 margen">Characters</h1>
			<div className="">
				<CardGroup className="card-group-scroll">
					{store.people.map((personajes, id) => (
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
									onClick={e => history.push(`/peopleDetails/${id}`)}>
									Ver Detalles
								</Button>
								<Button
									variant="outline-warning"
									onClick={e => actions.addFavorites(e, personajes.name)}>
									♥
								</Button>
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			</div>
			<h1 className="text-danger ml-4">Planets</h1>
			<div className="">
				<CardGroup className="card-group-scroll">
					{store.planets.map((planets, id) => (
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
									Ver Detalles
								</Button>
								<Button variant="outline-warning" onClick={e => actions.addFavorites(e, planets.name)}>
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
