import { IPlaylistWithId } from "@models/Playlist";
import { createContext } from "react";

export interface IPlaylists {
	playlists: IPlaylistWithId;
	isLoading: boolean;
	editPlaylist: (id: string) => void;
	deletePlaylist: (id: string) => void;
	selectPlaylist: (id: string) => IPlaylistWithId;
	setPlaylists: (playlists: IPlaylistWithId) => void;
	createPlaylist: (name: string, track_ids: string[]) => void;
}

const PlaylistsContext = createContext({} as IPlaylists);

export default PlaylistsContext;
