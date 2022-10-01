import { IPlaylist } from "@models/Playlist";
import { createContext } from "react";

export interface IPlaylists {
	playlists: IPlaylist[];
	isLoading: boolean;
	createPlaylist: (name: string, ids: string[]) => void;
}

const PlaylistsContext = createContext({} as IPlaylists);

export default PlaylistsContext;
