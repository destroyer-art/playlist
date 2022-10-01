import React, { useContext, useState } from "react";
import styles from "./Modal.module.css";
import ModalContext from "context/modal/context";
import close from "../../assets/close_icon.svg";

interface Props {}

const Modal = () => {
	const { toggleModal } = useContext(ModalContext);
	const [playlistName, setPlaylistName] = useState("New Playlist");
	const [playlistTracks, setPlaylistTracks] = useState<string[]>([]);

	const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {};

	return (
		<div className={styles.modalContainer}>
			<button onClick={toggleModal}>
				<img src={close} alt="close" />
			</button>
			<div>
				<input type="text" value={playlistName} onChange={handleNameChange} />
			</div>
			<div>
				<input type="text" value={playlistName} onChange={handleNameChange} />
			</div>
		</div>
	);
};

export default Modal;
