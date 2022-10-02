import * as playlistActions from "./actions";
import { IPlaylists } from "./context";

export const playlistReducer = (state: IPlaylists, action: any) => {
	switch (action.type) {
		case playlistActions.CREATE_PLAYLIST:
			return {
				...state,
				isLoading: true,
			};
		case playlistActions.CREATE_PLAYLIST_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case playlistActions.SET_PLAYLISTS:
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};
