import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pest Alerts</Text>
        <Text style={styles.headerSubtitle}>Monitor your fields in real-time</Text>
      </View>

      <View style={styles.alertsContainer}>
        {/* Mock Alert Card */}
        <View style={[styles.alertCard, styles.highSeverity]}>
          <View style={styles.alertHeader}>
            <IconSymbol name="exclamationmark.triangle.fill" size={24} color="#dc2626" />
            <Text style={styles.alertTitle}>Fall Armyworm Detected</Text>
          </View>
          <Text style={styles.alertDescription}>
            Sensors in North Field Sector A indicate potential pest activity. Immediate inspection recommended.
          </Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>

        {/* Mock Alert Card */}
        <View style={[styles.alertCard, styles.lowSeverity]}>
          <View style={styles.alertHeader}>
            <IconSymbol name="info.circle.fill" size={24} color="#059669" />
            <Text style={styles.alertTitle}>Field Status Normal</Text>
          </View>
          <Text style={styles.alertDescription}>
            South Field sensors report no anomalies over the last 48 hours.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2ffe5',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#047e14',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#d1fae5',
    marginTop: 4,
  },
  alertsContainer: {
    padding: 16,
    gap: 16,
  },
  alertCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  highSeverity: {
    borderLeftWidth: 4,
    borderLeftColor: '#dc2626',
  },
  lowSeverity: {
    borderLeftWidth: 4,
    borderLeftColor: '#059669',
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  alertDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 12,
  },
  actionButton: {
    backgroundColor: '#fee2e2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  actionButtonText: {
    color: '#dc2626',
    fontWeight: '600',
    fontSize: 14,
  },
});
