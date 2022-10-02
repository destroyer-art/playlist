import React, { useContext, useState } from "react";
import styles from "./Modal.module.css";
import ModalContext from "context/modal/context";
import close from "../../assets/close_icon.svg";
import SongsContext from "context/songs/context";
import { useRef } from "react";
import PlaylistsContext from "context/playlists/context";

const Modal = () => {
	const { toggleModal } = useContext(ModalContext);
	const { createPlaylist } = useContext(PlaylistsContext);

	const [playlistName, setPlaylistName] = useState("New Playlist");

	const [selectedForPlaylist, updateSelectedForPlaylist] = useState<string[]>(
		[]
	);
	const { tracks } = useContext(SongsContext);
	const availableTracksRef = useRef<HTMLUListElement>(null);

	const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
		setPlaylistName((e.target as HTMLInputElement).value);
	};

	const toggleSelectTrack = (id: string) => {
		if (availableTracksRef.current) {
			const element = Array.from(availableTracksRef.current.children).find(
				(li) => li.getAttribute("id") === id
			);
			element?.classList.contains("selected")
				? element?.classList.remove("selected")
				: element?.classList.add("selected");
		}
		//move to its own hook
		updateSelectedForPlaylist((selected) => {
			const index = selected.indexOf(id);
			index !== -1 ? selected.splice(index, 1) : selected.push(id);
			return selected;
		});
	};

	const handleOnPlaylistCreate = () => {
		if (!selectedForPlaylist.length) return; //display an error that new list is empty
		createPlaylist(playlistName, selectedForPlaylist);
	};

	return (
		<div className={styles.modalContainer}>
			<div className={styles.topSection}>
				<img onClick={toggleModal} src={close} alt="close" />
				<input type="text" value={playlistName} onChange={handleNameChange} />
				<button className={styles.creatBtn} onClick={handleOnPlaylistCreate}>
					Create
				</button>
			</div>
			<div className={styles.availableSongsContainer}>
				<ul ref={availableTracksRef}>
					{tracks.map((track) => (
						<li
							id={track.id}
							key={track.id}
							onClick={() => toggleSelectTrack(track.id)}
						>
							{track.title} by {track.main_artists}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Modal;
