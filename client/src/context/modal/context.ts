import { createContext } from "react";

export interface IModal {
	isOpen: boolean;
	toggleModal: () => void;
}

const ModalContext = createContext({} as IModal);

export default ModalContext;
