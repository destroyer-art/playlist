import { Track } from "@models/Track";
import { createContext } from "react";

export interface ITracksContext {
	readonly tracks: Track[];
	readonly currentTrack?: Track;
	fetchTracks: () => void;
	setCurrentTrack: (track?: Track) => void;
}

const TracksContext = createContext({} as ITracksContext);

export default TracksContext;
