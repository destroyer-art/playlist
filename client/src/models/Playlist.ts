import { Track } from "./Track";

export interface IPlaylistWithId {
	[id: string]: IPlaylist;
}

export interface IPlaylist {
	name: string;
	tracks: Track[];
}
