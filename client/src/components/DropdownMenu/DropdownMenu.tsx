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
	const { deletePlaylist, editPlaylist } = useContext(PlaylistsContext);
	const { toggleOpenEdit } = useContext(ModalContext);

	const handleOnMenuOpen = () => {
		setMenuOpen((prev) => !prev);
	};

	const hendleEditPlaylistClick = () => {
		toggleOpenEdit(playlistId);
	};

	return (
		<>
			<div className={styles.dropdownWrapper} onClick={handleOnMenuOpen}>
				<img src={menu} alt="" />
				{menuOpen && (
					<ul className={styles.menu}>
						<li onClick={hendleEditPlaylistClick}>Edit</li>
						<li onClick={() => deletePlaylist(playlistId)}>Delete playlist</li>
					</ul>
				)}
			</div>
		</>
	);
};

export default DropdownMenu;
