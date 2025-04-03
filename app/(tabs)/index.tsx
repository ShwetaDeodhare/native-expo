import { View, Image, ScrollView } from "react-native";
import "./../../assets/styles/global.css";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";

export default function Index() {
	const router = useRouter();

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
				<View className="mt-5 flex-1">
					<SearchBar
					 placeholder={"Search through 300+ movies online"} 
					 onPress={() => router.push("/Search")}
					 />
				</View>
			</ScrollView>
		</View>
	);
}
