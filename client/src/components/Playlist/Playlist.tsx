import { Track } from "@models/Track";
import styles from "./Playlist.module.css";
import React, { useMemo } from "react";

interface Props {
	name: string;
	playlistTracks: Track[];
}

const Playlist = ({ name, playlistTracks = [] }: Props) => {
	const previewTracks = useMemo(
		() =>
			playlistTracks.length && playlistTracks.length > 4
				? playlistTracks.slice(0, 4)
				: [playlistTracks[0]],
		[playlistTracks]
	);

	return (
		<div className={styles.listWrapper}>
			<ul>
				{previewTracks.map((track) => (
					<li key={track.id}>
						<img src={track.cover_art} alt={track.title} />
					</li>
				))}
			</ul>
			<h3>{name}</h3>
		</div>
	);
};

export default Playlist;
