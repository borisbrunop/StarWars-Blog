import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StarWarsLogo from "../../img/output-onlinepngtools.png";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3 fixed-top">
				<Link to="/">
					<img src={StarWarsLogo} />
				</Link>
				<DropdownButton id="dropdown-basic-button" title={"Favorites " + store.favorites.length}>
					{store.favorites.map((favorites, id) => {
						return (
							<>
								<Dropdown.ItemText key={id} className="d-flex justify-content-between">
									<a>{favorites.favorito}</a>
									<i className="fas fa-trash-alt m-2" onClick={e => actions.deleteFavorite(e, id)} />
								</Dropdown.ItemText>
							</>
						);
					})}
				</DropdownButton>
			</nav>
		</>
	);
};
