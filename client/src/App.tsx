import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import logo from "./assets/logo.svg";
import AudioPlayer from "./components/AudioPlayer";
import TrackRow from "./components/TrackRow";

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
			<main className={styles.app}>
				<nav>
					<img src={logo} className={styles.logo} alt="Logo" />
					<ul className={styles.menu}>
						<li>
							<a href="#" className={styles.active}>
								Tracks
							</a>
						</li>
						<li>
							<a href="#">Playlists</a>
						</li>
					</ul>
				</nav>
				{tracks.map((track, ix) => (
					<TrackRow key={ix} track={track} handlePlay={handlePlay} />
				))}
			</main>
			{currentTrack && <AudioPlayer track={currentTrack} />}
		</>
	);
}

export default App;
