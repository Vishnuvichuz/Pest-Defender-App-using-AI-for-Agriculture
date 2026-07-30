import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockAlerts = [
    { id: '1', alertType: 'Brown Plant Hopper Alert', detail: 'Detected in Sector 3 - Rice field', action: 'Action Required: Clear weeds', color: '#FBE9E7', icon: 'bug', iconColor: '#D84315' },
    { id: '2', alertType: 'Aphid', detail: 'Detected in Sector 3 - Rice field', action: 'Action Required: Check moisture', color: '#FFF3E0', icon: 'leaf', iconColor: '#E65100' },
];

const AlertsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={styles.headerTitle}>Farm Pest Alerts</Text>
            </View>

            <FlatList
                data={mockAlerts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.card, { backgroundColor: item.color }]}>
                        <View style={styles.cardHeader}>
                            <Ionicons name={item.icon} size={24} color={item.iconColor} />
                            <Text style={styles.alertTitle}>{item.alertType}</Text>
                        </View>
                        <Text style={styles.detailText}>{item.detail}</Text>
                        <Text style={styles.actionText}>{item.action}</Text>
                        <View style={styles.actionsRow}>
                            <TouchableOpacity style={styles.mapBtn}>
                                <Ionicons name="location-outline" size={16} color="black" />
                                <Text style={styles.mapBtnText}>Map View</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.clearBtn}>
                                <Text style={styles.clearBtnText}>Report as Cleared</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAF8F5', paddingTop: 50, paddingHorizontal: 20 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
    card: { borderRadius: 12, padding: 15, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
    cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    alertTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
    detailText: { fontSize: 14, color: '#333', marginBottom: 5 },
    actionText: { fontSize: 14, fontWeight: 'bold', color: '#B71C1C', marginBottom: 15 },
    actionsRow: { flexDirection: 'row', justifyContent: 'space-between' },
    mapBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: '#DDD' },
    mapBtnText: { marginLeft: 5, fontWeight: '600' },
    clearBtn: { backgroundColor: '#FFF', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: '#FF8A65' },
    clearBtnText: { color: '#D84315', fontWeight: 'bold' }
});

export default AlertsScreen;
