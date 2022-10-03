import { IPlaylistWithId } from "@models/Playlist";
import React, { useReducer } from "react";
import * as playlistActions from "./actions";
import PlaylistContext, { IPlaylists } from "./context";

import { playlistReducer } from "./reducer";

const PlaylistState = (props: any) => {
	const initialState = {
		playlists: {},
		isLoading: false,
		setPlaylists: () => {},
		createPlaylist: () => {},
		deletePlaylist: () => {},
		editPlaylist: () => {},
		fetchPlaylists: () => {},
		selectPlaylist: () => ({}),
	} as IPlaylists;

	const [state, dispatch] = useReducer(playlistReducer, initialState);

	const fetchPlaylists = async () => {
		dispatch({ type: playlistActions.FETCH_PLAYLISTS });
		try {
			const response = await fetch("http://0.0.0.0:3000/playlists", {
				mode: "cors",
			});
			const data = await response.json();
			dispatch({
				type: playlistActions.FETCH_PLAYLISTS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({ type: playlistActions.FETCH_PLAYLISTS_FAILURE });
		}
	};

	const createPlaylist = (name: string, track_ids: string[]) => {
		dispatch({
			type: playlistActions.CREATE_PLAYLIST,
		});
		//make request here and
		//dispatch({type: playlistActions.CREATE_PLAYLIST_SUCCESS});
		// or
		//dispatch({type: playlistActions.CREATE_PLAYLIST_FAILURE});
		console.log("Create playlist", { name, track_ids });
	};

	const setPlaylists = (playlists: IPlaylistWithId) => {
		dispatch({
			type: playlistActions.SET_PLAYLISTS,
			payload: playlists,
		});
	};

	const selectPlaylist = (id: string) => state.playlists[id];

	const deletePlaylist = (id: string) => {
		console.log({ delete: id });

		dispatch({
			type: playlistActions.DELETE_PLAYLIST,
		});
		//make DELETE request with id
		//dispatch({type: playlistActions.DELETE_PLAYLIST_SUCCESS});
		// or
		//dispatch({type: playlistActions.DELETE_PLAYLIST_FAILURE});

		//redirect to playlists page
	};

	const editPlaylist = (playlistId: string, track_ids: string[]) => {
		dispatch({
			type: playlistActions.UPDATE_PLAYLIST,
		});
		//make PUT request with id
		//dispatch({type: playlistActions.UPDATE_PLAYLIST_SUCCESS});
		// or
		//dispatch({type: playlistActions.UPDATE_PLAYLIST_FAILURE});

		//redirect to playlists page

		console.log("Edit playlist", { playlistId, track_ids });
	};

	return (
		<PlaylistContext.Provider
			value={{
				playlists: state.playlists,
				isLoading: state.isLoading,
				createPlaylist,
				selectPlaylist,
				setPlaylists,
				deletePlaylist,
				editPlaylist,
				fetchPlaylists,
			}}
		>
			{props.children}
		</PlaylistContext.Provider>
	);
};

export default PlaylistState;
