import ModalContext from "context/modal/context";
import PlaylistsContext from "context/playlists/context";
import React, { useState } from "react";
import { useContext } from "react";
import menu from "../../assets/menuIcon.png";
import styles from "./DropdownMenu.module.css";

interface Props {
	playlistId: string;
}

const DropdownMenu = ({ playlistId }: Props) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { deletePlaylist } = useContext(PlaylistsContext);
	const { toggleOpenEdit } = useContext(ModalContext);

	const handleToggleOpen = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<div className={styles.dropdownWrapper} onClick={handleToggleOpen}>
			<img src={menu} alt="" />
			{menuOpen && (
				<ul className={styles.menu}>
					<li onClick={() => toggleOpenEdit(playlistId)}>Edit</li>
					<li onClick={() => deletePlaylist(playlistId)}>Delete playlist</li>
				</ul>
			)}
		</div>
	);
};

export default DropdownMenu;
