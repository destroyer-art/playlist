import React from "react";
import styles from "./CreatePlaylist.module.css";
import ModalContext from "context/modal/context";
import { useContext } from "react";

const CreatePlaylist = () => {
	const { toggleOpenCreate } = useContext(ModalContext);

	return (
		<button className={styles.btn} onClick={toggleOpenCreate}>
			New Playlist
		</button>
	);
};
export default CreatePlaylist;
