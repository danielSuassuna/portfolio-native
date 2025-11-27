"use client"

import { useState, useEffect, useRef } from "react"
import { View, StyleSheet, Text, Pressable, Dimensions, PanResponder } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const GAME_WIDTH = Dimensions.get("window").width - 40
const GAME_HEIGHT = 400
const PADDLE_WIDTH = 80
const PADDLE_HEIGHT = 10
const BALL_SIZE = 8
const BRICK_WIDTH = (GAME_WIDTH - 30) / 5
const BRICK_HEIGHT = 20

export default function BreakoutGame() {
  const [gameActive, setGameActive] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [paddleX, setPaddleX] = useState(GAME_WIDTH / 2 - PADDLE_WIDTH / 2)
  const [ballX, setBallX] = useState(GAME_WIDTH / 2 - BALL_SIZE / 2)
  const [ballY, setBallY] = useState(GAME_HEIGHT - 100)
  const [ballVelX, setBallVelX] = useState(2)
  const [ballVelY, setBallVelY] = useState(-4)
  const [bricks, setBricks] = useState(() => {
    const newBricks = []
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 5; col++) {
        newBricks.push({
          id: `${row}-${col}`,
          x: col * BRICK_WIDTH + col * 6 + 3,
          y: row * BRICK_HEIGHT + row * 6 + 20,
          active: true,
        })
      }
    }
    return newBricks
  })

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event) => {
        const x = event.nativeEvent.locationX - PADDLE_WIDTH / 2
        const constrainedX = Math.max(0, Math.min(x, GAME_WIDTH - PADDLE_WIDTH))
        setPaddleX(constrainedX)
      },
    }),
  ).current

  useEffect(() => {
    if (!gameActive || gameOver) return

    const gameLoop = setInterval(() => {
      setBallX((prevX) => {
        const newX = prevX + ballVelX

        // Colisão com paredes horizontais
        if (newX <= 0 || newX >= GAME_WIDTH - BALL_SIZE) {
          setBallVelX((prev) => -prev)
          return Math.max(0, Math.min(newX, GAME_WIDTH - BALL_SIZE))
        }
        return newX
      })

      setBallY((prevY) => {
        const newY = prevY + ballVelY

        // Colisão com parede superior
        if (newY <= 0) {
          setBallVelY((prev) => -prev)
          return 0
        }

        // Colisão com parede inferior (game over)
        if (newY >= GAME_HEIGHT) {
          setGameOver(true)
          return prevY
        }

        return newY
      })

      // Colisão com paddle
      setBallY((prevY) => {
        if (
          prevY + ballVelY + BALL_SIZE >= GAME_HEIGHT - PADDLE_HEIGHT &&
          prevY + ballVelY <= GAME_HEIGHT - PADDLE_HEIGHT + 10 &&
          ballX + BALL_SIZE >= paddleX &&
          ballX <= paddleX + PADDLE_WIDTH
        ) {
          setBallVelY((prev) => -Math.abs(prev))
          return GAME_HEIGHT - PADDLE_HEIGHT - BALL_SIZE
        }
        return prevY
      })

      // Colisão com bricks
      setBricks((prevBricks) => {
        const newBricks = [...prevBricks]
        newBricks.forEach((brick) => {
          if (
            brick.active &&
            ballX + BALL_SIZE >= brick.x &&
            ballX <= brick.x + BRICK_WIDTH &&
            ballY + BALL_SIZE >= brick.y &&
            ballY <= brick.y + BRICK_HEIGHT
          ) {
            brick.active = false
            setBallVelY((prev) => -prev)
            setScore((prev) => prev + 10)
          }
        })
        return newBricks
      })
    }, 40)

    return () => clearInterval(gameLoop)
  }, [gameActive, gameOver, ballX, ballY, ballVelX, ballVelY, paddleX])

  const activeBricks = bricks.filter((b) => b.active)
  const allBricksDestroyed = activeBricks.length === 0

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.gameWrapper}>
        <View style={styles.scoreBoard}>
          <Text style={styles.score}>Score: {score}</Text>
          {allBricksDestroyed && <Text style={styles.levelComplete}>🎉 Nível Completo!</Text>}
        </View>

        <View style={[styles.gameArea, { width: GAME_WIDTH, height: GAME_HEIGHT }]} {...panResponder.panHandlers}>
          {/* Bricks */}
          {bricks.map((brick) =>
            brick.active ? (
              <View
                key={brick.id}
                style={[
                  styles.brick,
                  {
                    left: brick.x,
                    top: brick.y,
                    width: BRICK_WIDTH - 3,
                    height: BRICK_HEIGHT,
                  },
                ]}
              />
            ) : null,
          )}

          {/* Ball */}
          <View
            style={[
              styles.ball,
              {
                left: ballX,
                top: ballY,
                width: BALL_SIZE,
                height: BALL_SIZE,
              },
            ]}
          />

          {/* Paddle */}
          <View
            style={[
              styles.paddle,
              {
                left: paddleX,
                top: GAME_HEIGHT - PADDLE_HEIGHT,
                width: PADDLE_WIDTH,
                height: PADDLE_HEIGHT,
              },
            ]}
          />

          {/* Game Over Message */}
          {gameOver && (
            <View style={styles.gameOverOverlay}>
              <Text style={styles.gameOverText}>Game Over!</Text>
              <Text style={styles.finalScore}>Score: {score}</Text>
              <Pressable style={styles.restartButton} onPress={() => window.location.reload()}>
                <Text style={styles.restartButtonText}>Restart</Text>
              </Pressable>
            </View>
          )}
        </View>

        <View style={styles.instructions}>
          <Text style={styles.instructionsText}>Mova o paddle para cima e para baixo com o dedo</Text>
        </View>

        {gameOver && (
          <Pressable
            style={styles.restartButtonBottom}
            onPress={() => {
              setGameOver(false)
              setBallX(GAME_WIDTH / 2 - BALL_SIZE / 2)
              setBallY(GAME_HEIGHT - 100)
              setBallVelX(2)
              setBallVelY(-4)
              setPaddleX(GAME_WIDTH / 2 - PADDLE_WIDTH / 2)
              setBricks((prevBricks) => prevBricks.map((brick) => ({ ...brick, active: true })))
              setScore(0)
            }}
          >
            <Text style={styles.restartButtonTextBottom}>Jogar Novamente</Text>
          </Pressable>
        )}
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameWrapper: {
    width: "100%",
    alignItems: "center",
  },
  scoreBoard: {
    paddingVertical: 12,
    alignItems: "center",
  },
  score: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
  },
  levelComplete: {
    fontSize: 16,
    fontWeight: "600",
    color: "#10B981",
    marginTop: 4,
  },
  gameArea: {
    backgroundColor: "#000000",
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  ball: {
    position: "absolute",
    backgroundColor: "#FBBF24",
    borderRadius: 4,
  },
  paddle: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  brick: {
    position: "absolute",
    backgroundColor: "#EF4444",
    borderRadius: 3,
  },
  gameOverOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  finalScore: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FBBF24",
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: "#000000",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  restartButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  instructions: {
    marginTop: 16,
    paddingHorizontal: 20,
  },
  instructionsText: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
  },
  restartButtonBottom: {
    marginTop: 16,
    backgroundColor: "#000000",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  restartButtonTextBottom: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
})
