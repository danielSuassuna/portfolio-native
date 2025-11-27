import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ProfessionalScreen() {
  const experiences = [
    {
      company: "Drogafonte",
      position: "Engenheiro de machine learning junior",
      period: "2023 - Presente",
      description: "desenvolver projetos de machine learning e de análise de dados",
      responsibilities: [
        "Criar modelos de previsão",
        "Criar dashbords interativos e sistemas de análise de dados",
      ],
    },
    {
      company: "Projetos Acadêmicos",
      position: "Desenvolvedor",
      period: "2021 - Presente",
      description: "Participação em projetos acadêmicos desenvolvendo sistemas educacionais e de gerenciamento.",
      responsibilities: [
        "Trabalhar em equipe",
        "Implementar funcionalidades específicas",
        "Documentar código",
        "Fazer revisão de código",
      ],
    },
  ]

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.headerSection}>
            <Text style={styles.mainTitle}>Experiência Profissional</Text>
          </View>

          {experiences.map((exp, index) => (
            <View key={index} style={styles.experienceCard}>
              <View>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.position}>{exp.position}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>

              <Text style={styles.description}>{exp.description}</Text>

              <View style={styles.responsibilitiesContainer}>
                <Text style={styles.responsibilitiesTitle}>Responsabilidades:</Text>
                {exp.responsibilities.map((resp, respIndex) => (
                  <View key={respIndex} style={styles.responsibilityItem}>
                    <Text style={styles.bullet}>▸</Text>
                    <Text style={styles.responsibilityText}>{resp}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          {/* Skills Developed */}
          <View style={styles.skillsSection}>
            <Text style={styles.sectionTitle}>Habilidades Desenvolvidas</Text>
            <View style={styles.skillsContainer}>
              {[
                "Resolução de Problemas",
                "Trabalho em Equipe",
                "Comunicação",
                "Gestão de Tempo",
                "Criatividade",
                "Aprendizado Contínuo",
              ].map((skill, index) => (
                <View key={index} style={styles.skillBadge}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
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
  companyName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  position: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 4,
  },
  period: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
    marginBottom: 12,
  },
  description: {
    fontSize: 13,
    lineHeight: 20,
    color: "#374151",
    marginBottom: 12,
  },
  responsibilitiesContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
  },
  responsibilitiesTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  responsibilityItem: {
    flexDirection: "row",
    marginBottom: 6,
    alignItems: "flex-start",
  },
  bullet: {
    fontSize: 12,
    color: "#000000",
    marginRight: 8,
    marginTop: 2,
  },
  responsibilityText: {
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
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillBadge: {
    backgroundColor: "#000000",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  skillText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
})
