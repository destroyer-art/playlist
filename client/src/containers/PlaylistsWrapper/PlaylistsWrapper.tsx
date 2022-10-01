import React, { useContext, useEffect, useState } from "react";
import { Playlist } from "../../components";
import { IPlaylist } from "@models/Playlist";
import { CreatePlaylist } from "../../components";
import ModalContext from "context/modal/context";
import { Modal } from "..";
import styles from "./Styles.module.css";

interface Props {}

const PlaylistsWrapper = () => {
	const [playlists, setPlaylists] = useState<IPlaylist[]>([]);
	const { isOpen } = useContext(ModalContext);

	//useffect to fetch playlists
	useEffect(() => {
		setPlaylists([mockPlaylist, mockPlaylistSingle]);
	}, []);

	return (
		<>
			<div className={styles.newPlaylistWrapper}>
				<CreatePlaylist />
				{isOpen && <Modal />}
			</div>
			<div>
				{playlists.map((list) => (
					<Playlist name={list.name} playlistTracks={list.tracks} />
				))}
			</div>
		</>
	);
};

export default PlaylistsWrapper;

//Delete these
const mockPlaylistSingle = {
	name: "Mocha",
	tracks: [
		{
			id: "em55KruCAt",
			title: "Where the Sunflowers Bloom",
			length: 194,
			bpm: 114,
			genres: ["Indie Pop"],
			moods: ["Happy", "Hopeful"],
			main_artists: ["Elin Sandberg"],
			featured_artists: ["Christine Smit"],
			audio:
				"https://storage.googleapis.com/tech-coding-interview-assets/em55KruCAt.mp3",
			cover_art:
				"https://storage.googleapis.com/tech-coding-interview-assets/em55KruCAt.jpg",
			waveform:
				"https://storage.googleapis.com/tech-coding-interview-assets/em55KruCAt.json",
			spotify: "http://link.epidemicsound.com/em55KruCAt/spotify",
		},
	],
};

const mockPlaylist = {
	name: "Hot Hits",
	tracks: [
		{
			id: "FKYVlOXV8Q",
			title: "Slum Village",
			length: 166,
			bpm: 148,
			genres: ["Mainstream Hip Hop"],
			moods: ["Dark", "Restless"],
			main_artists: ["Tilden Parc"],
			featured_artists: [],
			audio:
				"https://storage.googleapis.com/tech-coding-interview-assets/FKYVlOXV8Q.mp3",
			cover_art:
				"https://storage.googleapis.com/tech-coding-interview-assets/FKYVlOXV8Q.jpg",
			waveform:
				"https://storage.googleapis.com/tech-coding-interview-assets/FKYVlOXV8Q.json",
			spotify: "http://link.epidemicsound.com/FKYVlOXV8Q/spotify",
		},
		{
			id: "Ru3QrB13Uf",
			title: "Hues",
			length: 163,
			bpm: 2,
			genres: ["Build"],
			moods: ["Dreamy", "Floating"],
			main_artists: ["Rannar Sillard"],
			featured_artists: [],
			audio:
				"https://storage.googleapis.com/tech-coding-interview-assets/Ru3QrB13Uf.mp3",
			cover_art:
				"https://storage.googleapis.com/tech-coding-interview-assets/Ru3QrB13Uf.jpg",
			waveform:
				"https://storage.googleapis.com/tech-coding-interview-assets/Ru3QrB13Uf.json",
			spotify: "http://link.epidemicsound.com/Ru3QrB13Uf/spotify",
		},
		{
			id: "rQMxJJ48DR",
			title: "Backyard Stories",
			length: 186,
			bpm: 110,
			genres: ["Soft House"],
			moods: ["Happy", "Laid Back"],
			main_artists: ["Sum Wave"],
			featured_artists: [],
			audio:
				"https://storage.googleapis.com/tech-coding-interview-assets/rQMxJJ48DR.mp3",
			cover_art:
				"https://storage.googleapis.com/tech-coding-interview-assets/rQMxJJ48DR.jpg",
			waveform:
				"https://storage.googleapis.com/tech-coding-interview-assets/rQMxJJ48DR.json",
			spotify: "http://link.epidemicsound.com/rQMxJJ48DR/spotify",
		},
		{
			id: "FAweBkmanc",
			title: "Just Wanna Come Alive",
			length: 189,
			bpm: 119,
			genres: ["Electro"],
			moods: ["Hopeful", "Restless"],
			main_artists: ["SOOP"],
			featured_artists: [],
			audio:
				"https://storage.googleapis.com/tech-coding-interview-assets/FAweBkmanc.mp3",
			cover_art:
				"https://storage.googleapis.com/tech-coding-interview-assets/FAweBkmanc.jpg",
			waveform:
				"https://storage.googleapis.com/tech-coding-interview-assets/FAweBkmanc.json",
			spotify: "http://link.epidemicsound.com/FAweBkmanc/spotify",
		},
		{
			id: "CNl5uZ2W8p",
			title: "Grasp of Freedom",
			length: 176,
			bpm: 110,
			genres: ["Alternative"],
			moods: ["Epic", "Happy"],
			main_artists: ["Christoffer Moe Ditlevsen"],
			featured_artists: [],
			audio:
				"https://storage.googleapis.com/tech-coding-interview-assets/CNl5uZ2W8p.mp3",
			cover_art:
				"https://storage.googleapis.com/tech-coding-interview-assets/CNl5uZ2W8p.jpg",
			waveform:
				"https://storage.googleapis.com/tech-coding-interview-assets/CNl5uZ2W8p.json",
			spotify: "http://link.epidemicsound.com/CNl5uZ2W8p/spotify",
		},
	],
};
