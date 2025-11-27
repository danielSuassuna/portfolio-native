import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function AcademicScreen() {
  const experiences = [
    {
      school: "Universidade Católica de Pernambuco",
      course: "Bacharelado em Ciência da Computação",
      period: "2021 - Presente",
      description:
        "Cursando segundo semestre, com foco em programação, estrutura de dados e desenvolvimento de aplicações.",
      achievements: ["GPA: 3.8/4.0", "Monitor em Programação", "Projetos em grupo"],
    },
    {
      school: "Educação Complementar",
      course: "Cursos Online e Certificações",
      period: "2022 - Presente",
      description:
        "Aprimorando conhecimentos através de plataformas como  freeCodeCamp, Coursera e documentações oficiais.",
      achievements: ["Deep Learning especialization", "data analyses", "NLP"],
    },
  ]

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.headerSection}>
            <Text style={styles.mainTitle}>Experiência Acadêmica</Text>
          </View>

          {experiences.map((exp, index) => (
            <View key={index} style={styles.experienceCard}>
              <View style={styles.experienceHeader}>
                <View>
                  <Text style={styles.schoolName}>{exp.school}</Text>
                  <Text style={styles.courseName}>{exp.course}</Text>
                </View>
                <Text style={styles.period}>{exp.period}</Text>
              </View>

              <Text style={styles.description}>{exp.description}</Text>

              <View style={styles.achievementsContainer}>
                <Text style={styles.achievementsTitle}>Destaques:</Text>
                {exp.achievements.map((achievement, achIndex) => (
                  <View key={achIndex} style={styles.achievementItem}>
                    <Text style={styles.achievementBullet}>•</Text>
                    <Text style={styles.achievementText}>{achievement}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          {/* Skills by Subject */}
          <View style={styles.skillsSection}>
            <Text style={styles.sectionTitle}>Disciplinas Relevantes</Text>
            <View style={styles.disciplinesGrid}>
              {["Programação I", "Cálculo", "Álgebra Linear", "Lógica Digital", "Estrutura de Dados", "Algoritmos"].map(
                (discipline, index) => (
                  <View key={index} style={styles.disciplineChip}>
                    <Text style={styles.disciplineText}>{discipline}</Text>
                  </View>
                ),
              )}
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
  },
  experienceCard: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#000000",
  },
  experienceHeader: {
    marginBottom: 12,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  courseName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  period: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  description: {
    fontSize: 13,
    lineHeight: 20,
    color: "#374151",
    marginBottom: 12,
  },
  achievementsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
  },
  achievementsTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  achievementItem: {
    flexDirection: "row",
    marginBottom: 6,
    alignItems: "flex-start",
  },
  achievementBullet: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "600",
    marginRight: 8,
    marginTop: 2,
  },
  achievementText: {
    fontSize: 12,
    color: "#374151",
    flex: 1,
  },
  skillsSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 16,
  },
  disciplinesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  disciplineChip: {
    backgroundColor: "#E5E7EB",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  disciplineText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000000",
  },
})
