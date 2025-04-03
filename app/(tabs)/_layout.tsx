// import { View, Text } from "react-native";
// import React from "react";
// import { Tabs } from "expo-router";
// import FontAwesome from "@expo/vector-icons/FontAwesome";

// const TabItem = ({
// 	name,
// 	icon,
// 	color,
// 	focused,
// }: {
// 	name: string;
// 	icon: any;
// 	color: string;
// 	focused: boolean;
// }) => {
// 	if (focused) {
// 		return (
// 			<View className="tab-item flex flex-row w-full flex-1 min-w-[112px] min-h-[53px] mt-4 justify-center items-center rounded-full overflow-hidden bg-white">
// 				<FontAwesome size={28} name={icon} color={color} />
// 				<Text className="pl-2 font-medium">{name}</Text>
// 			</View>
// 		);
// 	} else {
// 		return (
// 			<View className="tab-item text-gray-500 flex flex-row w-full flex-1 min-w-[112px] min-h-[53px] mt-4 justify-center items-center rounded-full overflow-hidden">
// 				<FontAwesome size={28} name={icon} color={color} />
// 			</View>
// 		);
// 	}
// };

// const TabsLayout = () => {
// 	return (
// 		<Tabs
// 			screenOptions={{
// 				tabBarShowLabel: false,
// 				tabBarItemStyle: {
// 					width: "100%",
// 					height: "100%",
// 					justifyContent: "center",
// 					alignItems: "center",
// 				},
// 				tabBarStyle: {
// 					backgroundColor: "#0F0D23",
// 					borderRadius: 50,
// 					marginHorizontal: 20,
// 					marginBottom: 36,
// 					height: 52,
// 					position: "absolute",
// 					overflow: "hidden",
// 					borderWidth: 1,
// 					borderColor: "#0F0D23",
// 				},
// 			}}>
// 			<Tabs.Screen
// 				name="index"
// 				options={{
// 					title: "Home",
// 					headerShown: false,
// 					tabBarIcon: ({ color, focused }) => (
// 						<TabItem focused={focused} name="Home" icon="home" color={color} />
// 					),
// 				}}
// 			/>
// 			<Tabs.Screen
// 				name="Search"
// 				options={{
// 					title: "Search",
// 					headerShown: false,
// 					tabBarIcon: ({ color, focused }) => (
// 						<TabItem
// 							focused={focused}
// 							name="Search"
// 							icon="search"
// 							color={color}
// 						/>
// 					),
// 				}}
// 			/>
// 			<Tabs.Screen
// 				name="Saved"
// 				options={{
// 					title: "Saved",
// 					headerShown: false,
// 					tabBarIcon: ({ color, focused }) => (
// 						<TabItem
// 							focused={focused}
// 							name="Saved"
// 							icon="bookmark"
// 							color={color}
// 						/>
// 					),
// 				}}
// 			/>
// 			<Tabs.Screen
// 				name="Profile"
// 				options={{
// 					title: "Profile",
// 					headerShown: false,
// 					tabBarIcon: ({ color, focused }) => (
// 						<TabItem
// 							focused={focused}
// 							name="Profile"
// 							icon="user"
// 							color={color}
// 						/>
// 					),
// 				}}
// 			/>
// 		</Tabs>
// 	);
// };

// export default TabsLayout;

import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

function TabIcon({ focused, icon, title }: any) {
	if (focused) {
		return (
			<ImageBackground
				source={images.highlight}
				resizeMode="cover"
				style={{ height: 56, width: 120 }}
				className="background-image flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden">
				<Image source={icon} tintColor="#151312" className="size-5" />
				<Text className="text-secondary text-base font-semibold ml-2">
					{title}
				</Text>
			</ImageBackground>
		);
	}

	return (
		<View className="size-full justify-center items-center mt-4 rounded-full">
			<Image source={icon} tintColor="#A8B5DB" className="size-5" />
		</View>
	);
}

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: "100%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				},
				tabBarStyle: {
					backgroundColor: "#0F0D23",
					borderRadius: 50,
					marginHorizontal: 20,
					marginBottom: 36,
					height: 52,
					position: "absolute",
					overflow: "hidden",
					borderWidth: 1,
					borderColor: "#0F0D23",
					elevation: 5, // Required for Android
				},
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.home} title="Home" />
					),
				}}
			/>

			<Tabs.Screen
				name="Search"
				options={{
					title: "Search",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.search} title="Search" />
					),
				}}
			/>

			<Tabs.Screen
				name="Saved"
				options={{
					title: "Saved",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.save} title="Save" />
					),
				}}
			/>

			<Tabs.Screen
				name="Profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.person} title="Profile" />
					),
				}}
			/>
		</Tabs>
	);
}
