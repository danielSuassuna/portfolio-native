import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function AboutScreen() {
  const technologies = [
    { category: "Frontend", items: ["React", "React Native", "TypeScript", "Expo"] },
    { category: "Backend", items: ["Node.js", "JavaScript", "REST APIs"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
    { category: "Módulos Utilizados", items: ["Expo Router", "React Navigation", "Axios", "AsyncStorage"] },
  ]

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.headerSection}>
            <Text style={styles.mainTitle}>Sobre Mim</Text>
            <Text style={styles.subtitle}>Desenvolvedor e Estudante</Text>
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionText}>
              Sou estudante de Ciência da Computação na Universidade Católica de Pernambuco, apaixonado por tecnologia e
              Machine Learning. Tenho experiência em Inteligência artificial, com foco em criar
              Modelos de previsão.
            </Text>
          </View>

          {/* Technologies Section */}
          <View style={styles.techSection}>
            <Text style={styles.sectionTitle}>Stack de Tecnologias</Text>

            {technologies.map((tech, index) => (
              <View key={index} style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>{tech.category}</Text>
                <View style={styles.itemsContainer}>
                  {tech.items.map((item, itemIndex) => (
                    <View key={itemIndex} style={styles.techItem}>
                      <Text style={styles.techItemText}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* App Stack Section */}
          <View style={styles.appStackSection}>
            <Text style={styles.sectionTitle}>Tecnologias Utilizadas Neste App</Text>
            <View style={styles.stackItem}>
              <Text style={styles.stackItemTitle}>Expo</Text>
              <Text style={styles.stackItemDescription}>Framework React Native com acesso a APIs nativas</Text>
            </View>
            <View style={styles.stackItem}>
              <Text style={styles.stackItemTitle}>Expo Router</Text>
              <Text style={styles.stackItemDescription}>Roteamento baseado em arquivos para navegação</Text>
            </View>
            <View style={styles.stackItem}>
              <Text style={styles.stackItemTitle}>TypeScript</Text>
              <Text style={styles.stackItemDescription}>Tipagem estática para melhor segurança</Text>
            </View>
            <View style={styles.stackItem}>
              <Text style={styles.stackItemTitle}>StyleSheet API</Text>
              <Text style={styles.stackItemDescription}>Estilização nativa do React Native</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  headerSection: {
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
  },
  descriptionSection: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
    marginBottom: 28,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#374151",
  },
  techSection: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 16,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 12,
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  techItem: {
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  techItemText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000000",
  },
  appStackSection: {
    marginBottom: 20,
  },
  stackItem: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#000000",
  },
  stackItemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 4,
  },
  stackItemDescription: {
    fontSize: 12,
    color: "#6B7280",
    lineHeight: 18,
  },
})
