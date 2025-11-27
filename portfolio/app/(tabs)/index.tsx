import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Header Profile */}
          <View style={styles.profileSection}>
            <View style={styles.avatarPlaceholder} />
            <Text style={styles.name}>Daniel Suassuna</Text>
            <Text style={styles.title}>Ciência da Computação</Text>
            <Text style={styles.university}>Universidade Católica de Pernambuco</Text>
          </View>

          {/* Bio Section */}
          <View style={styles.bioSection}>
            <Text style={styles.bioText}>
              Apaixonado por machine learning e inteligência artificial.
            </Text>
          </View>

          {/* Quick Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>5+</Text>
              <Text style={styles.statLabel}>Projetos</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>8+</Text>
              <Text style={styles.statLabel}>Tecnologias</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Dedicação</Text>
            </View>
          </View>

          {/* Featured Skills */}
          <View style={styles.skillsSection}>
            <Text style={styles.sectionTitle}>Principais Habilidades</Text>
            <View style={styles.skillsGrid}>
              <View style={styles.skillBadge}>
                <Text style={styles.skillText}>TensoFlow</Text>
              </View>
              <View style={styles.skillBadge}>
                <Text style={styles.skillText}>Keras</Text>
              </View>
              <View style={styles.skillBadge}>
                <Text style={styles.skillText}>Machine Learning</Text>
              </View>
              <View style={styles.skillBadge}>
                <Text style={styles.skillText}>Inteligência Artificial</Text>
              </View>
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
  profileSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E5E7EB",
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 4,
  },
  university: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
  bioSection: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#374151",
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  skillsSection: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 16,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillBadge: {
    backgroundColor: "#000000",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
  },
  skillText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
})
