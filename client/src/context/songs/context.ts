import { Track } from "@models/Track";
import { createContext } from "react";

export interface ISongsContext {
	readonly tracks: Track[];
	readonly currentTrack: Track;
	setAllSongs: (songs: Track[]) => void;
	setCurrentSong: (song?: Track) => void;
}

const SongsContext = createContext({} as ISongsContext);

export default SongsContext;
