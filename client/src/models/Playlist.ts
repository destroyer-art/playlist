import { Track } from "./Track";

export interface IPlaylist {
	id: string;
	name: string;
	tracks: Track[];
}
