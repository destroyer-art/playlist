import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

import { PlaylistsWrapper, TracksList, Navigation } from "./containers";
import { AudioPlayer } from "./components";
import ModalState from "context/modal/state";

function App() {
	const [tracks, setTracks] = useState([]);
	const [currentTrack, setCurrentTrack] = useState();

	useEffect(() => {
		fetch("http://0.0.0.0:8000/tracks/", { mode: "cors" })
			.then((res) => res.json())
			.then((data) => {
				console.log({ data });
				return setTracks(data);
			});
	}, []);

	const handlePlay = (track: any) => setCurrentTrack(track);

	return (
		<>
			<ModalState>
				<main className={styles.app}>
					<Router>
						<Navigation />
						<Routes>
							<Route
								path="/"
								element={<TracksList tracks={tracks} handlePlay={handlePlay} />}
							/>
							<Route path="/playlists" element={<PlaylistsWrapper />} />
						</Routes>
					</Router>
				</main>
			</ModalState>
			{currentTrack && <AudioPlayer track={currentTrack} />}
		</>
	);
}

export default App;
