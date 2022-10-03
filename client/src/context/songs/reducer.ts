import * as songActions from "./actions";
import { ITracksContext } from "./context";

export const tracksReducer = (state: ITracksContext, action: any) => {
	switch (action.type) {
		case songActions.SET_ALL_TRACKS:
			return {
				...state,
				tracks: action.payload,
			};
		case songActions.SET_CURRENT_TRACK:
			return {
				...state,
				currentTrack: action.payload,
			};
		default:
			return state;
	}
};
