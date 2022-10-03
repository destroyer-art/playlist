import * as trackActions from "./actions";
import { ITracksContext } from "./context";

export const tracksReducer = (state: ITracksContext, action: any) => {
	switch (action.type) {
		case trackActions.SET_ALL_TRACKS:
			return {
				...state,
				tracks: action.payload,
			};
		case trackActions.SET_CURRENT_TRACK:
			return {
				...state,
				currentTrack: action.payload,
			};
		default:
			return state;
	}
};
