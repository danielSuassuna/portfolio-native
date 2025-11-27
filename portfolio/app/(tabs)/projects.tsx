import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ProjectsScreen() {
  const projects = [
    {
      title: "Detecção de face",
      description:
        "Aplicação de detecção de rostos humanos em imagens usando o algorítmo YOLO",
      technologies: ["Python", "YOLO"],
      date: "2024",
    },
    {
      title: "ResNet with keras",
      description: "Código completo criando a arquitetura Resnet com keras",
      technologies: ["Python", "Keras", "Tensorflow"],
      date: "2024",
    },
    {
      title: "Portfólio Web",
      description:
        "Site pessoal responsivo desenvolvido com React e estilizado com Tailwind CSS, showcase de projetos e informações profissionais.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      date: "2023",
    },
    {
      title: "Aplicação de Notas",
      description: "Sistema de notas com categorização, busca e edição em tempo real.",
      technologies: ["React Native", "Expo Router", "Context API"],
      date: "2023",
    },
  ]

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.headerSection}>
            <Text style={styles.mainTitle}>Meus Projetos</Text>
            <Text style={styles.subtitle}>Alguns dos meus trabalhos em desenvolvimento</Text>
          </View>

          {projects.map((project, index) => (
            <View key={index} style={styles.projectCard}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDate}>{project.date}</Text>

              <Text style={styles.projectDescription}>{project.description}</Text>

              <View style={styles.technologiesContainer}>
                {project.technologies.map((tech, techIndex) => (
                  <View key={techIndex} style={styles.techTag}>
                    <Text style={styles.techTagText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <View style={styles.ctaSection}>
            <Text style={styles.ctaText}>Quer ver mais projetos?</Text>
            <Text style={styles.ctaSubtext}>Visite meu GitHub para explorar mais do meu trabalho</Text>
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
    fontSize: 14,
    color: "#6B7280",
  },
  projectCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#000000",
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  projectDate: {
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "500",
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: "#374151",
    marginBottom: 12,
  },
  technologiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  techTag: {
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  techTagText: {
    fontSize: 11,
    fontWeight: "500",
    color: "#000000",
  },
  ctaSection: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginTop: 24,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  ctaSubtext: {
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
  },
})
