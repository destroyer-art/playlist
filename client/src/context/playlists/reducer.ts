import * as playlistActions from "./actions";
import { IPlaylists } from "./context";

export const playlistReducer = (state: IPlaylists, action: any) => {
	switch (action.type) {
		case playlistActions.CREATE_PLAYLIST:
		case playlistActions.DELETE_PLAYLIST:
			return {
				...state,
				isLoading: true,
			};
		case playlistActions.CREATE_PLAYLIST_SUCCESS:
		case playlistActions.DELETE_PLAYLIST_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case playlistActions.SET_PLAYLISTS:
			return {
				...state,
				playlists: action.payload,
			};
		case playlistActions.FETCH_PLAYLISTS_SUCCESS:
			return {
				...state,
				playlists: action.payload,
			};
		default:
			return state;
	}
};
