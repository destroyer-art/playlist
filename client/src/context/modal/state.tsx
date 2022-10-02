import React, { useReducer } from "react";
import * as modalActions from "./actions";
import ModalContext, { IModal } from "./context";
import { modalReducer } from "./reducer";

const ModalState = (props: any) => {
	const initialState = {
		isOpenEdit: false,
		isOpenCreate: false,
		toggleOpenEdit: (playlistId: string) => {
			dispatch({
				type: modalActions.TOGGLE_MODAL_EDIT,
			});
		},
		toggleOpenCreate: () => {
			dispatch({
				type: modalActions.TOGGLE_MODAL_CREATE,
			});
		},
		closeModal: () => {
			dispatch({
				type: modalActions.CLOSE_MODAL,
			});
		},
	} as IModal;

	const [state, dispatch] = useReducer(modalReducer, initialState);

	return (
		<ModalContext.Provider
			value={{
				isOpenEdit: state.isOpenEdit,
				isOpenCreate: state.isOpenCreate,
				closeModal: state.closeModal,
				toggleOpenEdit: state.toggleOpenEdit,
				toggleOpenCreate: state.toggleOpenCreate,
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalState;
