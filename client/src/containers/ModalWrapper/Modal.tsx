import React, { useContext, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import ModalContext from "context/modal/context";
import close from "../../assets/close_icon.svg";
import TracksContext from "context/tracks/context";
import { useRef } from "react";
import PlaylistsContext from "context/playlists/context";
import { Track } from "@models/Track";

interface Props {
	readonly playlistId?: string;
}

const Modal = ({ playlistId }: Props) => {
	const { tracks } = useContext(TracksContext);
	const { closeModal } = useContext(ModalContext);
	const { createPlaylist, editPlaylist, playlists } =
		useContext(PlaylistsContext);

	const [playlistName, setPlaylistName] = useState("New Playlist");
	const [selectedForPlaylist, updateSelectedForPlaylist] = useState<Track[]>(
		[]
	);

	useEffect(() => {
		const selectedPlaylist = playlists.find((p) => p.id === playlistId);
		if (playlistId && selectedPlaylist) {
			setPlaylistName(selectedPlaylist.name);
			updateSelectedForPlaylist(selectedPlaylist.tracks);
		}
	}, [playlistId]);

	const availableTracksRef = useRef<HTMLUListElement>(null);

	const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
		setPlaylistName((e.target as HTMLInputElement).value);
	};

	const toggleSelectTrack = (track: Track) => {
		if (availableTracksRef.current) {
			const element = Array.from(availableTracksRef.current.children).find(
				(li) => li.getAttribute("id") === track.id
			);
			element?.classList.contains("selected")
				? element?.classList.remove("selected")
				: element?.classList.add("selected");
		}

		updateSelectedForPlaylist((selectedTracks) => {
			const found = selectedTracks.find((s) => s.id === track.id);
			if (!found) return [...selectedTracks, track];
			return selectedTracks.filter((c) => c.id !== track.id);
		});
	};

	const handleOnPlaylistCreate = () => {
		if (!selectedForPlaylist.length) return;
		createPlaylist(playlistName, selectedForPlaylist);
	};
	const handleOnPlaylistEdit = () => {
		if (!selectedForPlaylist.length) return;
		editPlaylist(playlistId!, selectedForPlaylist, playlistName);
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
			<div className={styles.availableTracksContainer}>
				<ul ref={availableTracksRef}>
					{tracks.map((track) => (
						<li
							id={track.id}
							key={track.id}
							onClick={() => toggleSelectTrack(track)}
							className={
								selectedForPlaylist.find((s) => s.id === track.id)
									? "selected"
									: ""
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
