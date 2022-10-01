import React, { useReducer } from "react";
import * as playlistActions from "./actions";
import PlaylistContext, { IPlaylists } from "./context";
import { IPlaylist } from "@models/Playlist";

import { playlistReducer } from "./reducer";

const PlaylistState = (props: any) => {
	const initialState = {
		playlists: [],
		isLoading: false,
		createPlaylist: () => {},
	} as IPlaylists;

	const [state, dispatch] = useReducer(playlistReducer, initialState);

	const createPlaylist = (name: string, ids: string[]) => {
		dispatch({
			type: playlistActions.CREATE_PLAYLIST,
		});
		//make request here
		console.log(name, ids);
	};

	return (
		<PlaylistContext.Provider
			value={{
				playlists: state.playlists,
				isLoading: state.isLoading,
				createPlaylist: createPlaylist,
			}}
		>
			{props.children}
		</PlaylistContext.Provider>
	);
};

export default PlaylistState;
