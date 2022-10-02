import React, { useContext, useEffect, useState } from "react";
import { Playlist } from "../../components";
import { CreatePlaylist } from "../../components";
import ModalContext from "context/modal/context";
import { Modal } from "..";
import styles from "./Styles.module.css";
import PlaylistsContext from "context/playlists/context";

const PlaylistsWrapper = () => {
	const { isOpen } = useContext(ModalContext);
	const { playlists } = useContext(PlaylistsContext);

	//useffect to fetch playlists
	useEffect(() => {
		//call async method from context
	}, []);

	return (
		<>
			<div className={styles.newPlaylistWrapper}>
				<CreatePlaylist />
				{isOpen && <Modal />}
			</div>
			<div className={styles.playlistsOverview}>
				{Object.entries(playlists).map(([id, list]) => (
					<Playlist name={list.name} playlistTracks={list.tracks} id={id} />
				))}
			</div>
		</>
	);
};

export default PlaylistsWrapper;
