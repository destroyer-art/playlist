import { Track } from "@models/Track";
import styles from "./Playlist.module.css";
import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

interface Props {
	name: string;
	playlistTracks: Track[];
	id: string;
}

const Playlist = ({ name, playlistTracks = [], id }: Props) => {
	const previewTracks = useMemo(
		() =>
			playlistTracks.length && playlistTracks.length >= 4
				? playlistTracks.slice(0, 4)
				: [playlistTracks[0]],
		[playlistTracks]
	);

	return (
		<NavLink to={`/playlists/${id}`}>
			<div className={styles.listWrapper}>
				<ul>
					{previewTracks.map((track) => (
						<li
							key={track.id}
							className={previewTracks.length === 1 ? styles.soloImage : ""}
						>
							<img src={track.cover_art} alt={track.title} />
						</li>
					))}
				</ul>
				<h3>{name}</h3>
			</div>
		</NavLink>
	);
};

export default Playlist;
