import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

interface Props {}

const Navigation: React.FC<Props> = () => {
	return (
		<nav>
			<img src={logo} className={styles.logo} alt="Logo" />
			<ul className={styles.menu}>
				<li>
					<NavLink to="/">Tracks</NavLink>
				</li>
				<li>
					<NavLink to="/playlists">Playlists</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
