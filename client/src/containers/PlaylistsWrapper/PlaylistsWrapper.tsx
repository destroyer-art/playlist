import React, { useContext, useEffect, useState } from "react";
import { Playlist } from "../../components";
import { CreatePlaylist } from "../../components";
import ModalContext from "context/modal/context";
import { Modal } from "..";
import styles from "./Styles.module.css";
import PlaylistsContext from "context/playlists/context";

const PlaylistsWrapper = () => {
	const { isOpenCreate } = useContext(ModalContext);
	const { playlists, fetchPlaylists } = useContext(PlaylistsContext);

	useEffect(() => {
		fetchPlaylists();
	}, []);

	return (
		<>
			<div className={styles.newPlaylistWrapper}>
				<CreatePlaylist />
				{isOpenCreate && <Modal />}
			</div>
			<div className={styles.playlistsOverview}>
				{playlists.map((playlist) => (
					<Playlist
						key={playlist.id}
						name={playlist.name}
						playlistTracks={playlist.tracks}
						id={playlist.id}
					/>
				))}
			</div>
		</>
	);
};

export default PlaylistsWrapper;
