import { createContext } from "react";

export interface IModal {
	isOpenEdit: boolean;
	isOpenCreate: boolean;
	closeModal: () => void;
	toggleOpenCreate: () => void;
	toggleOpenEdit: (playlistId: string) => void;
}

const ModalContext = createContext({} as IModal);

export default ModalContext;
