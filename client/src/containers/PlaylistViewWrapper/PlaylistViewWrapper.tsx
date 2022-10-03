import React, { useMemo } from "react";
import { TrackRow, DropdownMenu } from "../../components";
import PlaylistsContext from "context/playlists/context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import TracksContext from "context/songs/context";
import styles from "./Styles.module.css";
import ModalContext from "context/modal/context";
import { Modal } from "..";

const PlaylistViewWrapper = () => {
	const { id = "" } = useParams();
	const { playlists } = useContext(PlaylistsContext);
	const { setCurrentTrack } = useContext(TracksContext);
	const { isOpenEdit } = useContext(ModalContext);

	const selectedPlaylist = useMemo(
		() => playlists.find((p) => `${p.id}` === id),
		[playlists, id]
	);

	if (!selectedPlaylist) {
		return <div>Not found</div>;
	}

	return (
		selectedPlaylist && (
			<div className={styles.playlistPreview}>
				<div className={styles.titleBar}>
					<h2>{selectedPlaylist.name}</h2>
					<div className={styles.menu}>
						<DropdownMenu playlistId={id} />
					</div>
				</div>
				{isOpenEdit && <Modal playlistId={id} />}
				{selectedPlaylist.tracks.map((track, ix) => (
					<TrackRow
						key={ix}
						track={track}
						handlePlay={(track) => setCurrentTrack(track)}
					/>
				))}
			</div>
		)
	);
};

export default PlaylistViewWrapper;
