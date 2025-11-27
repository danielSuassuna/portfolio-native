import { View, Text } from "react-native"

interface IconProps {
  color: string
  size: number
}

export const HomeIcon = ({ color, size }: IconProps) => (
  <View style={{ width: size, height: size }}>
    <Text style={[{ fontSize: size, color }]}>🏠</Text>
  </View>
)

export const InfoIcon = ({ color, size }: IconProps) => (
  <View style={{ width: size, height: size }}>
    <Text style={[{ fontSize: size, color }]}>ℹ️</Text>
  </View>
)

export const BriefcaseIcon = ({ color, size }: IconProps) => (
  <View style={{ width: size, height: size }}>
    <Text style={[{ fontSize: size, color }]}>💼</Text>
  </View>
)

export const ProjectIcon = ({ color, size }: IconProps) => (
  <View style={{ width: size, height: size }}>
    <Text style={[{ fontSize: size, color }]}>📁</Text>
  </View>
)

export const GamepadIcon = ({ color, size }: IconProps) => (
  <View style={{ width: size, height: size }}>
    <Text style={[{ fontSize: size, color }]}>🎮</Text>
  </View>
)
