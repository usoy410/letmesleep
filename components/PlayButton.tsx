import { Ionicons } from "@expo/vector-icons"
import { View } from "react-native"
import react from "react"

export const PlayButton = () => {
  const [isPlaying, setIsPlaying] = react.useState(false);
  console.log(isPlaying)
  return (
    <View>
      <Ionicons name={isPlaying ? 'pause-circle-outline' : 'play-circle-outline'} onPress={() => setIsPlaying(!isPlaying)} color={'white'} size={600} />
    </View>

  )
}
