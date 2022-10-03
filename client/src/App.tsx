import React, { useEffect, useContext } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
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
import TracksContext from "context/tracks/context";
import PlaylistState from "context/playlists/state";
import { Track } from "@models/Track";

function App() {
	const { fetchTracks, setCurrentTrack, currentTrack } =
		useContext(TracksContext);

	useEffect(() => {
		fetchTracks();
	}, []);

	const handlePlay = (track: Track) => setCurrentTrack(track);

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
