import { Track } from "./Track";

export interface IPlaylistWithId {
	[id: string]: IPlaylist;
}

export interface IPlaylist {
	id: string;
	name: string;
	tracks: Track[];
}
