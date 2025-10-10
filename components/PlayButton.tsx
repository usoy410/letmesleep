import { Ionicons } from "@expo/vector-icons"
import { View } from "react-native"

export const PlayButton = () => {
  return (
      <View className=" flex-1 justify-center items-center w-full min-h-72">
        {/* This is the Cirrcle for play buttn */}
        <View className="circle flex justify-center items-center pl-14 bg-[#161723]">
          <Ionicons name="play" color={'white'} size={450} />
        </View>
      </View>
  )
}
