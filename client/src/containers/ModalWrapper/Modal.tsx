import React, { useContext, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import ModalContext from "context/modal/context";
import close from "../../assets/close_icon.svg";
import SongsContext from "context/songs/context";
import { useRef } from "react";
import PlaylistsContext from "context/playlists/context";
import { IPlaylist } from "@models/Playlist";

interface Props {
	readonly playlistId?: string;
}

const Modal = ({ playlistId }: Props) => {
	const { tracks } = useContext(SongsContext);
	const { closeModal } = useContext(ModalContext);
	const { createPlaylist, editPlaylist, playlists } =
		useContext(PlaylistsContext);

	const [playlistName, setPlaylistName] = useState("New Playlist");
	const [selectedForPlaylist, updateSelectedForPlaylist] = useState<string[]>(
		[]
	);

	useEffect(() => {
		if (playlistId && playlists[playlistId]) {
			setPlaylistName(playlists[playlistId].name);
			updateSelectedForPlaylist(playlists[playlistId].tracks.map((t) => t.id));
		}
	}, [playlistId]);

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

		updateSelectedForPlaylist((selected) => {
			const i = selected.indexOf(id);
			if (i == -1) return [...selected, id];
			return selected.filter((c) => c !== id);
		});
	};

	const handleOnPlaylistCreate = () => {
		if (!selectedForPlaylist.length) return; //display an error that new list is empty
		createPlaylist(playlistName, selectedForPlaylist);
	};
	const handleOnPlaylistEdit = () => {
		if (!selectedForPlaylist.length) return; //display an error that new list is empty
		editPlaylist(playlistId!, selectedForPlaylist);
	};

	const handleOnModalClose = () => closeModal();

	return (
		<div className={styles.modalContainer}>
			<div className={styles.topSection}>
				<img onClick={handleOnModalClose} src={close} alt="close" />
				<input type="text" value={playlistName} onChange={handleNameChange} />
				{playlistId ? (
					<button className={styles.creatBtn} onClick={handleOnPlaylistEdit}>
						Update
					</button>
				) : (
					<button className={styles.creatBtn} onClick={handleOnPlaylistCreate}>
						Create
					</button>
				)}
			</div>
			<div className={styles.availableSongsContainer}>
				<ul ref={availableTracksRef}>
					{tracks.map((track) => (
						<li
							id={track.id}
							key={track.id}
							onClick={() => toggleSelectTrack(track.id)}
							className={
								selectedForPlaylist.includes(track.id) ? "selected" : ""
							}
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
