import * as modalActions from "./actions";
import { IModal } from "./context";

export const modalReducer = (state: IModal, action: any) => {
	switch (action.type) {
		case modalActions.TOGGLE_MODAL_EDIT:
			return {
				...state,
				isOpenEdit: true,
			};
		case modalActions.TOGGLE_MODAL_CREATE:
			return {
				...state,
				isOpenCreate: true,
			};
		case modalActions.CLOSE_MODAL:
			return {
				...state,
				isOpenCreate: false,
				isOpenEdit: false,
			};
		default:
			return state;
	}
};
