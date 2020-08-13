import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import placeHolder from "../../img/500.png";
import "../../styles/home.scss";

function PlanetsDetails() {
	const { store, actions } = useContext(Context);
	const { detailsId } = useParams();

	useEffect(() => {
		if (store.planets.length == 0) {
			actions.fetchPlanets();
		}
	}, []);

	return (
		<>
			{store.planets.map((planet, id) => {
				if (id === parseInt(detailsId)) {
					return (
						<>
							<div key={id} className="margen">
								<div className="d-flex flex-inline">
									<div className="m-3">
										<img src={placeHolder} width="500px" height="500px" />
									</div>
									<div className="text-center">
										<h1>{planet.name}</h1>
										<p className="m-3">
											{
												"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
											}
										</p>
									</div>
								</div>
								<div style={{ width: "1200px", height: "2px" }} className="m-5 bg-danger container" />
								<div className="d-flex justify-content-between container">
									<div className="text-danger text-center m-3">
										<p className="text-danger">
											<strong>Name</strong>
										</p>
										<p className="text-danger">{planet.name}</p>
									</div>
									<div className="text-danger text-center m-3">
										<p className="text-danger">
											<strong>Climate</strong>
										</p>
										<p className="text-danger">{planet.climate}</p>
									</div>
									<div className="text-danger text-center m-3">
										<p className="text-danger">
											<strong>Population</strong>
										</p>
										<p className="text-danger">{planet.population}</p>
									</div>
									<div className="text-danger text-center m-3">
										<p className="text-danger">
											<strong>Orbit Period</strong>
										</p>
										<p className="text-danger">{planet.orbital_period}</p>
									</div>
									<div className="text-danger text-center m-3">
										<p className="text-danger">
											<strong>Rotation Period</strong>
										</p>
										<p className="text-danger">{planet.rotation_period}</p>
									</div>
									<div className="text-danger text-center m-3">
										<p className="text-danger">
											<strong>Diameter</strong>
										</p>
										<p className="text-danger">{planet.diameter}</p>
									</div>
								</div>
							</div>
						</>
					);
				}
			})}
		</>
	);
}

export default PlanetsDetails;
