import { Ionicons } from "@expo/vector-icons";
import react from "react";
import { View } from "react-native";
import { Audio } from "expo-av";
export const PlayButton = () => {
    const [sound, setSound] = react.useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = react.useState(false);

    react.useEffect(() => {
        const loadSound = async () => {
            const { sound: newSound } = await Audio.Sound.createAsync(
                require("../assets/audio/432hz.mp3")
            );
            setSound(newSound);
        };
        loadSound();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    const togglePlayback = async () => {
        if (!sound) return;
        if (isPlaying) {
            await sound.pauseAsync();
            setIsPlaying(false);
        } else {
            await sound.setIsLoopingAsync(true);
            await sound.playAsync();
            setIsPlaying(true);
        }
    };

    console.log(isPlaying);
    return (
        <View>
            <Ionicons
                name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
                onPress={togglePlayback}
                color={"white"}
                size={600}
            />
        </View>
    );
};
