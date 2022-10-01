import React, { useReducer } from "react";
import * as modalActions from "./actions";
import ModalContext, { IModal } from "./context";
import { modalReducer } from "./reducer";

const ModalState = (props: any) => {
	const initialState = {
		isOpen: false,
		toggleModal: () => {
			dispatch({
				type: modalActions.TOGGLE_MODAL,
			});
		},
	} as IModal;

	const [state, dispatch] = useReducer(modalReducer, initialState);

	return (
		<ModalContext.Provider
			value={{
				isOpen: state.isOpen,
				toggleModal: state.toggleModal,
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalState;
