import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "@/constants/images";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";

const Search = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const {
		data: movies = [],
		loading,
		error,
		refetch: loadMovies,
		reset,
	} = useFetch(
		() =>
			fetchMovies({
				query: searchQuery,
			}),
		false
	);

	useEffect(() => {
		const handler = setTimeout(async () => {
			if (searchQuery.trim()) {
				await loadMovies();
			} else {
				reset();
			}
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [searchQuery]);

	return (
		<View className="flex-1 bg-primary">
			<Image
				source={images.bg}
				className="absolute w-full z-0"
				style={{ width: "100%" }}
			/>
			<FlatList
				data={movies || null}
				renderItem={({ item }) => (
					// <Text className="text-white text-sm">{item.title}</Text>
					<MovieCard {...item} />
				)}
				keyExtractor={(item) => item.id.toString()}
				numColumns={3}
				columnWrapperStyle={{
					justifyContent: "center",
					gap: 20,
					marginVertical: 16,
				}}
				className="px-5"
				contentContainerStyle={{
					paddingBottom: 100,
				}}
				ListHeaderComponent={
					<>
						<View className="w-full flex-row justify-center mt-20 items-center">
							<Image
								source={icons.logo}
								className="w-16 h-12 z-10 mt-20 mb-5 mx-auto"
							/>
						</View>
						<View className="my-5">
							<SearchBar
								placeholder={"Search through 300+ movies online"}
								value={searchQuery}
								onChangeText={(text: string) => setSearchQuery(text)}
							/>
							{loading && (
								<ActivityIndicator
									size={"large"}
									color={"#0000ff"}
									className="my-3"
								/>
							)}
							{error && <Text>Error: {error.message}</Text>}
							{!loading &&
								!error &&
								searchQuery.trim() &&
								movies !== null &&
								movies?.length > 0 && (
									<Text className="text-xl text-white font-bold my-3">
										Search Results for{" "}
										<Text className="text-accent">{searchQuery}</Text>
									</Text>
								)}
						</View>
					</>
				}
			/>
		</View>
	);
};

export default Search;
