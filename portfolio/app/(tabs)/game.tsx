import { View, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HangmanGame from "@/components/hangman-game"

export default function GameScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Jogo da Forca</Text>
          <Text style={styles.subtitle}>Um jogo clássico desenvolvido em React Native</Text>
        </View>

        <View style={styles.gameContainer}>
          <HangmanGame />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerSection: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
  },
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    overflow: "hidden",
  },
})
