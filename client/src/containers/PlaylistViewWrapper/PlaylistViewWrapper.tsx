import TrackRow from "../../components/TrackRow";
import PlaylistsContext from "context/playlists/context";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

interface Props {}

const PlaylistViewWrapper = () => {
	const { id = "" } = useParams();
	const { playlists } = useContext(PlaylistsContext);

	const handlePlay = () => {};
	return (
		<div>
			<h2>{playlists[id].name}</h2>
			<>
				{playlists[id].tracks.map((track, ix) => (
					<TrackRow key={ix} track={track} handlePlay={handlePlay} />
				))}
			</>
		</div>
	);
};

export default PlaylistViewWrapper;
