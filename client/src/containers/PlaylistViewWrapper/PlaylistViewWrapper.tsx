import React from "react";
import { TrackRow, DropdownMenu } from "../../components";
import PlaylistsContext from "context/playlists/context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import SongsContext from "context/songs/context";
import styles from "./Styles.module.css";
import ModalContext from "context/modal/context";
import { Modal } from "..";

interface Props {}

const PlaylistViewWrapper = () => {
	const { id = "" } = useParams();
	const { playlists } = useContext(PlaylistsContext);
	const { setCurrentSong } = useContext(SongsContext);
	const { isOpenEdit } = useContext(ModalContext);

	return (
		<div>
			<div className={styles.titleBar}>
				<h2>{playlists[id].name}</h2>
				<div className={styles.menu}>
					<DropdownMenu playlistId={id} />
				</div>
			</div>
			{isOpenEdit && <Modal playlistId={id} />}
			{playlists[id].tracks.map((track, ix) => (
				<TrackRow
					key={ix}
					track={track}
					handlePlay={(track) => setCurrentSong(track)}
				/>
			))}
		</div>
	);
};

export default PlaylistViewWrapper;
