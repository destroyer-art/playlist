import { Track } from "@models/Track";
import React, { useReducer } from "react";
import * as modalActions from "./actions";
import SongsContext, { ISongsContext } from "./context";
import { songsReducer } from "./reducer";

const ModalState = (props: any) => {
	const initialState = {
		tracks: [],
		setAllSongs: () => {},
	} as ISongsContext;

	const [state, dispatch] = useReducer(songsReducer, initialState);
	const setAllSongs = (songs: Track[]) => {
		dispatch({
			type: modalActions.SET_ALL_SONGS,
			payload: songs,
		});
	};
	return (
		<SongsContext.Provider
			value={{
				tracks: state.tracks,
				setAllSongs,
			}}
		>
			{props.children}
		</SongsContext.Provider>
	);
};

export default ModalState;
