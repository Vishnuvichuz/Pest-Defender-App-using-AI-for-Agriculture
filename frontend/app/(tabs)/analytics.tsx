import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function AnalyticsScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Analytics</Text>
                <Text style={styles.headerSubtitle}>Farm health overview</Text>
            </View>

            <View style={styles.content}>
                {/* Mock Chart Area */}
                <View style={styles.chartCard}>
                    <Text style={styles.cardTitle}>NDVI Index (Last 30 Days)</Text>
                    <View style={styles.chartPlaceholder}>
                        <View style={styles.barContainer}>
                            {[40, 60, 45, 80, 70, 90, 85].map((height, i) => (
                                <View key={i} style={[styles.bar, { height: `${height}%` }]} />
                            ))}
                        </View>
                    </View>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsGrid}>
                    <View style={styles.statBox}>
                        <View style={styles.statIconContainer}>
                            <IconSymbol name="chart.pie.fill" size={24} color="#8b5cf6" />
                        </View>
                        <Text style={styles.statValue}>12%</Text>
                        <Text style={styles.statLabel}>Crop Loss Est.</Text>
                    </View>

                    <View style={styles.statBox}>
                        <View style={[styles.statIconContainer, { backgroundColor: '#dcfce7' }]}>
                            <IconSymbol name="dollarsign.circle.fill" size={24} color="#059669" />
                        </View>
                        <Text style={styles.statValue}>+24%</Text>
                        <Text style={styles.statLabel}>Treatment ROI</Text>
                    </View>
                </View>

                {/* Insights */}
                <View style={styles.insightsCard}>
                    <Text style={styles.cardTitle}>AI Insights</Text>
                    <View style={styles.insightRow}>
                        <IconSymbol name="sparkles" size={20} color="#f59e0b" />
                        <Text style={styles.insightText}>
                            Applying fungicide to the North Sector in the next 48 hours is projected to save $2,400 in yield.
                        </Text>
                    </View>
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
        color: '#e0e7ff',
        marginTop: 4,
    },
    content: {
        padding: 16,
        gap: 16,
    },
    chartCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 16,
    },
    chartPlaceholder: {
        height: 180,
        backgroundColor: '#f8fafc',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderStyle: 'dashed',
        justifyContent: 'flex-end',
        padding: 16,
    },
    barContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '100%',
    },
    bar: {
        width: 24,
        backgroundColor: '#818cf8',
        borderRadius: 4,
    },
    statsGrid: {
        flexDirection: 'row',
        gap: 16,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    statIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#ede9fe',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    statLabel: {
        fontSize: 14,
        color: '#64748b',
        marginTop: 4,
    },
    insightsCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    insightRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
        backgroundColor: '#fef3c7',
        padding: 16,
        borderRadius: 12,
    },
    insightText: {
        flex: 1,
        fontSize: 14,
        color: '#92400e',
        lineHeight: 20,
    },
});
