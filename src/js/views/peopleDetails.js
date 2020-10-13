import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import placeHolder from "../../img/500.png";
import "../../styles/home.scss";

function PeopleDetails() {
	const { store, actions } = useContext(Context);
	const { name } = useParams();

	useEffect(() => {
		if (store.people.length == 0) {
			actions.fetchPersonajes();
		}
	}, []);

	return (
		<>
			{store.people.map((personaje, id) => {
				if (personaje.name === name) {
					return (
						<div key={id} className="margen">
							<div className="d-flex flex-inline">
								<div className="m-3">
									<img src={placeHolder} width="500px" height="500px" />
								</div>
								<div className="text-center">
									<h1>{personaje.name}</h1>
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
									<p className="text-danger">{personaje.name}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Birth Year</strong>
									</p>
									<p className="text-danger">{personaje.birth_year}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Gender</strong>
									</p>
									<p className="text-danger">{personaje.gender}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Height</strong>
									</p>
									<p className="text-danger">{personaje.height}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Skin Color</strong>
									</p>
									<p className="text-danger">{personaje.skin_color}</p>
								</div>
								<div className="text-danger text-center m-3">
									<p className="text-danger">
										<strong>Eye Color</strong>
									</p>
									<p className="text-danger">{personaje.eye_color}</p>
								</div>
							</div>
						</div>
					);
				}
			})}
		</>
	);
}

export default PeopleDetails;
