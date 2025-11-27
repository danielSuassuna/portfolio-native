"use client"

import { useState, useEffect } from "react"
import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native"

const WORDS = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NATIVE",
  "PROGRAMMING",
  "COMPUTER",
  "UNIVERSITY",
  "ALGORITHM",
  "DATABASE",
  "FUNCTION",
  "COMPONENT",
  "DEVELOPMENT",
  "INTERFACE",
  "VARIABLE",
  "NETWORK",
  "PERNAMBUCO",
  "UNICAP",
]

const HANGMAN_STAGES = [
  "  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========",
  "  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========",
  "  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========",
  "  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========",
  "  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========",
  "  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========",
  "  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========",
]

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function HangmanGame() {
  const [word, setWord] = useState("")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongGuesses, setWrongGuesses] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)

  useEffect(() => {
    resetGame()
  }, [])

  useEffect(() => {
    if (word.length === 0) return

    // Verifica se venceu
    const allLettersGuessed = word.split("").every((letter) => guessedLetters.includes(letter))
    if (allLettersGuessed) {
      setWon(true)
      setGameOver(true)
    }

    // Verifica se perdeu
    if (wrongGuesses >= HANGMAN_STAGES.length - 1) {
      setGameOver(true)
    }
  }, [guessedLetters, wrongGuesses, word])

  const resetGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)]
    setWord(randomWord)
    setGuessedLetters([])
    setWrongGuesses(0)
    setGameOver(false)
    setWon(false)
  }

  const handleLetterPress = (letter: string) => {
    if (guessedLetters.includes(letter) || gameOver) return

    const newGuessed = [...guessedLetters, letter]
    setGuessedLetters(newGuessed)

    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1)
    }
  }

  const displayWord = word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ")

  const wrongCount = wrongGuesses
  const maxWrong = HANGMAN_STAGES.length - 1

  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        {/* Hangman Drawing */}
        <View style={styles.hangmanDisplay}>
          <Text style={styles.hangmanArt}>{HANGMAN_STAGES[wrongGuesses]}</Text>
        </View>

        {/* Wrong Guesses Counter */}
        <View style={styles.counterContainer}>
          <Text style={styles.counterLabel}>Tentativas Restantes</Text>
          <Text style={styles.counterValue}>
            {maxWrong - wrongCount} / {maxWrong}
          </Text>
        </View>

        {/* Word Display */}
        <View style={styles.wordContainer}>
          <Text style={styles.wordDisplay}>{displayWord}</Text>
        </View>

        {/* Game Status */}
        {gameOver && (
          <View style={[styles.statusContainer, won ? styles.wonContainer : styles.lostContainer]}>
            <Text style={styles.statusText}>{won ? "Você Venceu! 🎉" : "Game Over! 💀"}</Text>
            {!won && <Text style={styles.answerText}>Resposta: {word}</Text>}
          </View>
        )}

        {/* Alphabet Grid */}
        <ScrollView style={styles.lettersContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.letterGrid}>
            {ALPHABET.map((letter) => {
              const isGuessed = guessedLetters.includes(letter)
              const isCorrect = word.includes(letter)
              const isWrong = isGuessed && !isCorrect

              return (
                <Pressable
                  key={letter}
                  style={[
                    styles.letterButton,
                    isGuessed && isCorrect && styles.letterCorrect,
                    isGuessed && isWrong && styles.letterWrong,
                    isGuessed && styles.letterDisabled,
                  ]}
                  onPress={() => handleLetterPress(letter)}
                  disabled={isGuessed || gameOver}
                >
                  <Text
                    style={[
                      styles.letterText,
                      isGuessed && styles.letterTextGuessed,
                      isWrong && styles.letterTextWrong,
                    ]}
                  >
                    {letter}
                  </Text>
                </Pressable>
              )
            })}
          </View>
        </ScrollView>

        {/* Restart Button */}
        {gameOver && (
          <Pressable style={styles.restartButton} onPress={resetGame}>
            <Text style={styles.restartButtonText}>Jogar Novamente</Text>
          </Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
  },
  gameContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  hangmanDisplay: {
    alignItems: "center",
    marginVertical: 16,
  },
  hangmanArt: {
    fontFamily: "monospace",
    fontSize: 12,
    color: "#1F2937",
    letterSpacing: 1,
    lineHeight: 18,
  },
  counterContainer: {
    alignItems: "center",
    marginVertical: 12,
  },
  counterLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  counterValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
  },
  wordContainer: {
    alignItems: "center",
    marginVertical: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
  },
  wordDisplay: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
    letterSpacing: 8,
  },
  statusContainer: {
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  wonContainer: {
    backgroundColor: "#D1FAE5",
  },
  lostContainer: {
    backgroundColor: "#FEE2E2",
  },
  statusText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  answerText: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  lettersContainer: {
    flex: 1,
    marginVertical: 12,
  },
  letterGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  letterButton: {
    width: "22%",
    aspectRatio: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  letterCorrect: {
    backgroundColor: "#D1FAE5",
    borderColor: "#10B981",
  },
  letterWrong: {
    backgroundColor: "#FEE2E2",
    borderColor: "#EF4444",
  },
  letterDisabled: {
    opacity: 0.6,
  },
  letterText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },
  letterTextGuessed: {
    color: "#000000",
  },
  letterTextWrong: {
    color: "#DC2626",
  },
  restartButton: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 12,
  },
  restartButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
})
