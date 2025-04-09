import { View, Image, ScrollView, Text, FlatList } from "react-native";
import "./../../assets/styles/global.css";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
	const router = useRouter();

	const {
		data: movies,
		loading: moviesLoading,
		error: moviesError,
	} = useFetch(() =>
		fetchMovies({
			query: "",
		})
	);

	return (
		<View className="flex flex-1 bg-primary">
			<Image
				source={images.bg}
				className="absolute w-full z-0"
				style={{ width: "100%" }}
			/>
			<ScrollView
				className="flex-1 px-5"
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>
				<Image
					source={icons.logo}
					className="w-16 h-12 z-10 mt-20 mb-5 mx-auto"
				/>

				{moviesLoading ? (
					<Text>Loading</Text>
				) : moviesError ? (
					<Text>Error {moviesError?.message}</Text>
				) : (
					<View className="mt-5 flex-1">
						<SearchBar
							placeholder={"Search through 300+ movies online"}
							onPress={() => router.push("/Search")}
						/>
						<Text>Latest Movies</Text>
						<FlatList
							data={movies || null}
							renderItem={({ item }) => (
								// <Text className="text-white text-sm">{item.title}</Text>
								<MovieCard {...item} />
							)}
							keyExtractor={(item) => item.id.toString()}
							numColumns={3}
							columnWrapperStyle={{
								justifyContent: "flex-start",
								gap: 20,
								paddingRight: 5,
								marginBottom: 10,
							}}
							className="mt-2 pb-32"
							scrollEnabled={false}
						/>
					</View>
				)}
			</ScrollView>
		</View>
	);
}
