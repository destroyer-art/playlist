import React, { useState, useEffect, useContext } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	redirect,
	Navigate,
} from "react-router-dom";
import styles from "./App.module.css";

import {
	PlaylistsWrapper,
	TracksList,
	Navigation,
	PlaylistViewWrapper,
} from "./containers";
import { AudioPlayer } from "./components";
import ModalState from "context/modal/state";
import SongsContext from "context/songs/context";
import PlaylistState from "context/playlists/state";
import { Track } from "@models/Track";

function App() {
	const { setAllSongs, setCurrentSong, currentTrack } =
		useContext(SongsContext);

	useEffect(() => {
		fetch("http://0.0.0.0:3000/allTracks", { mode: "cors" })
			.then((res) => res.json())
			.then((data) => setAllSongs(data));
	}, []);

	const handlePlay = (track: Track) => setCurrentSong(track);

	return (
		<>
			<PlaylistState>
				<ModalState>
					<main className={styles.app}>
						<Router>
							<Navigation />
							<Routes>
								<Route
									path="/tracks"
									element={<TracksList handlePlay={handlePlay} />}
								/>
								<Route path="/playlists" element={<PlaylistsWrapper />} />
								<Route
									path="/playlists/:id"
									element={<PlaylistViewWrapper />}
								/>
								<Route path="*" element={<Navigate to="/tracks" replace />} />
							</Routes>
						</Router>
					</main>
				</ModalState>
			</PlaylistState>
			{currentTrack && <AudioPlayer track={currentTrack} />}
		</>
	);
}

export default App;
