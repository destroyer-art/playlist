import * as modalActions from "./actions";
import { IModal } from "./context";

export const modalReducer = (state: IModal, action: any) => {
	switch (action.type) {
		case modalActions.TOGGLE_MODAL:
			return {
				...state,
				isOpen: !state.isOpen,
			};
		default:
			return state;
	}
};
