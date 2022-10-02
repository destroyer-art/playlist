import { Track } from "@models/Track";
import React, { useReducer } from "react";
import * as modalActions from "./actions";
import SongsContext, { ISongsContext } from "./context";
import { songsReducer } from "./reducer";

const SongState = (props: any) => {
	const initialState = {
		tracks: [],
		currentTrack: undefined,
		setCurrentSong: () => {},
		setAllSongs: () => {},
	} as ISongsContext;

	const [state, dispatch] = useReducer(songsReducer, initialState);

	const setAllSongs = (songs: Track[]) => {
		dispatch({
			type: modalActions.SET_ALL_SONGS,
			payload: songs,
		});
	};

	const setCurrentSong = (song?: Track) => {
		dispatch({
			type: modalActions.SET_CURRENT_SONG,
			payload: song,
		});
	};

	return (
		<SongsContext.Provider
			value={{
				tracks: state.tracks,
				currentTrack: state.currentTrack,
				setCurrentSong,
				setAllSongs,
			}}
		>
			{props.children}
		</SongsContext.Provider>
	);
};

export default SongState;
