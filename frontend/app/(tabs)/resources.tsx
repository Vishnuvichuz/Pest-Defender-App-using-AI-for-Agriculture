import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ResourcesScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Agri Resources</Text>
                <Text style={styles.headerSubtitle}>Rent equipment and hire labor</Text>
            </View>

            <View style={styles.tabsContainer}>
                <TouchableOpacity style={[styles.tab, styles.activeTab]}>
                    <Text style={styles.activeTabText}>Equipment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Labor</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                {/* Mock Resource Card */}
                <View style={styles.card}>
                    <View style={styles.placeholderImage}>
                        <IconSymbol name="plus.circle.fill" size={32} color="#94a3b8" />
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Tractor - John Deere</Text>
                        <Text style={styles.cardSubtitle}>Available • 5km away</Text>
                        <Text style={styles.cardPrice}>$50 / hour</Text>
                        <TouchableOpacity style={styles.rentButton}>
                            <Text style={styles.rentButtonText}>Rent Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Mock Resource Card */}
                <View style={styles.card}>
                    <View style={styles.placeholderImage}>
                        <IconSymbol name="plus.circle.fill" size={32} color="#94a3b8" />
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Pesticide Sprayer Drone</Text>
                        <Text style={styles.cardSubtitle}>Available • 12km away</Text>
                        <Text style={styles.cardPrice}>$120 / day</Text>
                        <TouchableOpacity style={styles.rentButton}>
                            <Text style={styles.rentButtonText}>Rent Now</Text>
                        </TouchableOpacity>
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
        color: '#e0f2fe',
        marginTop: 4,
    },
    tabsContainer: {
        flexDirection: 'row',
        padding: 16,
        gap: 12,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#e2e8f0',
    },
    activeTab: {
        backgroundColor: '#0ea5e9',
    },
    tabText: {
        color: '#64748b',
        fontWeight: '600',
    },
    activeTabText: {
        color: '#ffffff',
        fontWeight: '600',
    },
    listContainer: {
        paddingHorizontal: 16,
        gap: 16,
        paddingBottom: 24,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 12,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
        gap: 16,
    },
    placeholderImage: {
        width: 100,
        height: 100,
        backgroundColor: '#f1f5f9',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    cardSubtitle: {
        fontSize: 12,
        color: '#64748b',
    },
    cardPrice: {
        fontSize: 14,
        fontWeight: '600',
        color: '#059669',
        marginTop: 4,
    },
    rentButton: {
        backgroundColor: '#0ea5e9',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    rentButtonText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '600',
    },
});
