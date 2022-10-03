import axios from "axios";
import { Track } from "@models/Track";
import React, { useReducer } from "react";
import * as playlistActions from "./actions";
import PlaylistContext, { IPlaylistsContext } from "./context";
import { playlistReducer } from "./reducer";

const PlaylistState = (props: any) => {
	const initialState = {
		playlists: [],
		isLoading: false,
		createPlaylist: () => {},
		deletePlaylist: () => {},
		editPlaylist: () => {},
		fetchPlaylists: () => {},
	} as IPlaylistsContext;

	const [state, dispatch] = useReducer(playlistReducer, initialState);

	const fetchPlaylists = async () => {
		dispatch({ type: playlistActions.FETCH_PLAYLISTS });
		try {
			const { data } = await axios.get("http://0.0.0.0:3000/playlists");
			dispatch({
				type: playlistActions.FETCH_PLAYLISTS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({ type: playlistActions.FETCH_PLAYLISTS_FAILURE });
		}
	};

	const createPlaylist = async (name: string, tracks: Track[]) => {
		dispatch({ type: playlistActions.CREATE_PLAYLIST });
		try {
			const { data } = await axios.post(`http://0.0.0.0:3000/playlists/`, {
				name,
				tracks,
			});

			dispatch({
				type: playlistActions.CREATE_PLAYLIST_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({ type: playlistActions.CREATE_PLAYLIST_FAILURE });
		}
	};

	const deletePlaylist = async (playlistId: string) => {
		dispatch({
			type: playlistActions.DELETE_PLAYLIST,
		});
		try {
			await axios.delete(`http://0.0.0.0:3000/playlists/${playlistId}`);
			dispatch({ type: playlistActions.DELETE_PLAYLIST_SUCCESS });
		} catch (error) {
			dispatch({ type: playlistActions.DELETE_PLAYLIST_FAILURE });
		}
		return window.location.replace("/playlists");
	};

	const editPlaylist = async (
		playlistId: string,
		updatedTracks: Track[],
		playlistName: string
	) => {
		dispatch({ type: playlistActions.UPDATE_PLAYLIST });
		try {
			const { data } = await axios.patch(
				`http://0.0.0.0:3000/playlists/${playlistId}`,
				{
					name: playlistName,
					tracks: updatedTracks,
				}
			);
			dispatch({
				type: playlistActions.UPDATE_PLAYLIST_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({ type: playlistActions.UPDATE_PLAYLIST_FAILURE });
		}
	};

	return (
		<PlaylistContext.Provider
			value={{
				playlists: state.playlists,
				isLoading: state.isLoading,
				createPlaylist,
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
