import * as songActions from "./actions";
import { ISongsContext } from "./context";

export const songsReducer = (state: ISongsContext, action: any) => {
	switch (action.type) {
		case songActions.SET_ALL_SONGS:
			return {
				...state,
				tracks: action.payload,
			};
		case songActions.SET_CURRENT_SONG:
			return {
				...state,
				currentTrack: action.payload,
			};
		default:
			return state;
	}
};
