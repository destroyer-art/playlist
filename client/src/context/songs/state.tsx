import axios from "axios";
import { Track } from "@models/Track";
import React, { useReducer } from "react";
import * as trackActions from "./actions";
import TracksContext, { ITracksContext } from "./context";
import { tracksReducer } from "./reducer";

const TracksState = (props: any) => {
	const initialState = {
		tracks: [],
		currentTrack: undefined,
		fetchTracks: () => {},
		setCurrentTrack: () => {},
	} as ITracksContext;

	const [state, dispatch] = useReducer(tracksReducer, initialState);

	const fetchTracks = async () => {
		const { data } = await axios.get("http://0.0.0.0:3000/allTracks");
		dispatch({
			type: trackActions.SET_ALL_TRACKS,
			payload: data,
		});
	};

	const setCurrentTrack = (track?: Track) => {
		dispatch({
			type: trackActions.SET_CURRENT_TRACK,
			payload: track,
		});
	};

	return (
		<TracksContext.Provider
			value={{
				tracks: state.tracks,
				currentTrack: state.currentTrack,
				setCurrentTrack,
				fetchTracks,
			}}
		>
			{props.children}
		</TracksContext.Provider>
	);
};

export default TracksState;
