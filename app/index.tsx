/// <reference types="react-native-css-interop/types" />

import { PlayButton } from "@/components/PlayButton";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 flex-column items-center bg-[#1A1D2B]">
      {/* Title  */}
      <View className="justify-top py-20">
        <Text className="text-5xl font-bold text-white">Sleep Hub 😴</Text>
      </View>
      {/* Play button */}
      <PlayButton />
      {/* choosing from high frequency to guided meditation  dropdown*/}
      <View className=" flex-1 justify-center items-center w-full border border-white">
        <View>
          <Ionicons name="chevron-down" color={'white'} size={40} />
        </View>
      </View>
    </View>
  );
}
