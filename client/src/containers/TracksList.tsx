import React from "react";
import TrackRow from "../components/TrackRow";
import { Track } from "../models/Track";

interface Props {
	tracks: Track[];
	handlePlay: (track: Track) => void;
}

const TracksList = ({ tracks = [], handlePlay }: Props) => {
	return (
		<>
			{tracks.map((track, ix) => (
				<TrackRow key={ix} track={track} handlePlay={handlePlay} />
			))}
		</>
	);
};

export default TracksList;
