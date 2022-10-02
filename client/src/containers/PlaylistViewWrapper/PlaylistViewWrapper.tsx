import React from "react";
import TrackRow from "../../components/TrackRow";
import PlaylistsContext from "context/playlists/context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import SongsContext from "context/songs/context";

interface Props {}

const PlaylistViewWrapper = () => {
	const { id = "" } = useParams();
	const { playlists } = useContext(PlaylistsContext);
	const { setCurrentSong } = useContext(SongsContext);

	return (
		<div>
			<h2>{playlists[id].name}</h2>
			<>
				{playlists[id].tracks.map((track, ix) => (
					<TrackRow
						key={ix}
						track={track}
						handlePlay={(track) => setCurrentSong(track)}
					/>
				))}
			</>
		</div>
	);
};

export default PlaylistViewWrapper;
