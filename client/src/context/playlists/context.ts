import { IPlaylist } from "@models/Playlist";
import { Track } from "@models/Track";
import { createContext } from "react";

export interface IPlaylistsContext {
	playlists: IPlaylist[];
	isLoading: boolean;
	deletePlaylist: (id: string) => void;
	createPlaylist: (name: string, tracks: Track[]) => void;
	editPlaylist: (
		playlistId: string,
		track_ids: Track[],
		playlistName: string
	) => void;
	fetchPlaylists: () => void;
}

const PlaylistsContext = createContext({} as IPlaylistsContext);

export default PlaylistsContext;
