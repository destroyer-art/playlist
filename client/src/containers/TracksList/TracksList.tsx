import React, { useContext } from "react";
import { TrackRow } from "../../components";
import { Track } from "@models/Track";
import TracksContext from "context/tracks/context";

interface Props {
	handlePlay: (track: Track) => void;
}

const TracksList = ({ handlePlay }: Props) => {
	const { tracks } = useContext(TracksContext);

	return (
		<>
			{tracks.map((track, ix) => (
				<TrackRow key={ix} track={track} handlePlay={handlePlay} />
			))}
		</>
	);
};

export default TracksList;
