import { Tabs } from "expo-router"
import { StyleSheet } from "react-native"
import { HomeIcon, InfoIcon, BriefcaseIcon, ProjectIcon, GamepadIcon } from "@/components/icons"

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#9CA3AF",
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color }) => <InfoIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="academic"
        options={{
          title: "Acadêmica",
          tabBarIcon: ({ color }) => <BriefcaseIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="professional"
        options={{
          title: "Profissional",
          tabBarIcon: ({ color }) => <ProjectIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projetos",
          tabBarIcon: ({ color }) => <ProjectIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: "Jogo",
          tabBarIcon: ({ color }) => <GamepadIcon color={color} size={24} />,
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderTopColor: "#E5E7EB",
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    height: 60,
  },
  tabBarLabel: {
    fontSize: 10,
    marginTop: 4,
    fontWeight: "600",
  },
})
