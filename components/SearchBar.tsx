import { View, TextInput, Image } from "react-native";
import { TMDB_CONFIG } from "../services/api";

import { icons } from "@/constants/icons";
import { useEffect, useState } from "react";

interface Props {
	placeholder: string;
	value?: string;
	onChangeText?: (text: string) => void;
	onPress?: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {
	const [movies, setMovies] = useState<any[]>([]);

	const getAllMovies = async () => {
		try {
			const url =
				"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

			const response = await fetch(url, {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjgxZDRjZmZkMDg3MmM1MDU4MzY2MGU4NGIzYjZjNiIsIm5iZiI6MTc0MzQ5NTYxOC40MDMsInN1YiI6IjY3ZWJhMWMyNThlMGFhMjMzOGZiMDViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VfEPC88Ch9slFoz-0Nkhoi2kJNOod7ZI8vrZyaQR3J0",
				},
			});

			const json = await response.json();
			console.log(json.results); // Array of movies
			setMovies(json.results);
		} catch (error) {
			console.error("Failed to fetch movies:", error);
		}

		// await fetch("https://jsonplaceholder.typicode.com/posts")
		// 	.then((response) => response.json())
		// 	.then((json) => {
		// 		console.log(json);
		// 		setMovies(json);
		// 	});
	};

	useEffect(() => {
		getAllMovies();
	}, []);

	return (
		<View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
			<Image
				source={icons.search}
				className="w-5 h-5"
				resizeMode="contain"
				tintColor="#AB8BFF"
			/>
			<TextInput
				onPress={onPress}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				className="flex-1 ml-2 text-white"
				placeholderTextColor="#A8B5DB"
			/>
		</View>
	);
};

export default SearchBar;
