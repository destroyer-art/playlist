import React, { useContext } from "react";
import { TrackRow } from "../../components";
import { Track } from "@models/Track";
import SongsContext from "context/songs/context";

interface Props {
	handlePlay: (track: Track) => void;
}

const TracksList = ({ handlePlay }: Props) => {
	const { tracks } = useContext(SongsContext);

	return (
		<>
			{tracks.map((track, ix) => (
				<TrackRow key={ix} track={track} handlePlay={handlePlay} />
			))}
		</>
	);
};

export default TracksList;
