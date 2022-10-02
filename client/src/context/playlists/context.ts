import { IPlaylist, IPlaylistWithId } from "@models/Playlist";
import { createContext } from "react";

export interface IPlaylists {
	playlists: IPlaylistWithId;
	isLoading: boolean;
	deletePlaylist: (id: string) => void;
	selectPlaylist: (id: string) => IPlaylistWithId;
	setPlaylists: (playlists: IPlaylistWithId) => void;
	createPlaylist: (name: string, track_ids: string[]) => void;
	editPlaylist: (playlistId: string, track_ids: string[]) => void;
}

const PlaylistsContext = createContext({} as IPlaylists);

export default PlaylistsContext;
