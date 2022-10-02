import { IPlaylist } from "@models/Playlist";
import { createContext } from "react";

export interface IPlaylists {
	playlists: IPlaylist;
	isLoading: boolean;
	editPlaylist: (id: string) => void;
	deletePlaylist: (id: string) => void;
	selectPlaylist: (id: string) => IPlaylist;
	setPlaylists: (playlists: IPlaylist) => void;
	createPlaylist: (name: string, track_ids: string[]) => void;
}

const PlaylistsContext = createContext({} as IPlaylists);

export default PlaylistsContext;
