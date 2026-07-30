import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockCatalog = [
    { id: '1', name: 'Brown Plant Hopper', info: 'Key info', image: 'https://via.placeholder.com/150/4CAF50/FFF?text=Hopper' },
    { id: '2', name: 'Aphids', info: 'Host plants\nTreatment Guide', image: 'https://via.placeholder.com/150/4CAF50/FFF?text=Aphid' },
];

const mockTreatments = [
    { id: '1', name: 'Treatment 1', image: 'https://via.placeholder.com/50/FFC107/FFF?text=T1' },
    { id: '2', name: 'Treatment 2', image: 'https://via.placeholder.com/50/FFC107/FFF?text=T2' },
    { id: '3', name: 'Treatment 3', image: 'https://via.placeholder.com/50/FFC107/FFF?text=T3' },
];

const PestAIDashboardScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={styles.headerTitle}>Pest AI Dashboard</Text>
            </View>

            <View style={styles.tabs}>
                <Text style={[styles.tabText, styles.activeTab]}>Pest Catalog</Text>
                <Text style={styles.tabText}>AI Scanner</Text>
            </View>

            <View style={styles.searchBar}>
                <Ionicons name="search" size={20} color="#888" />
                <Text style={styles.searchText}>Search catalog</Text>
            </View>

            <FlatList
                data={mockCatalog}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.catalogCard}>
                        <Image source={{ uri: item.image }} style={styles.pestImage} />
                        <Text style={styles.pestName}>{item.name}</Text>
                        <Text style={styles.pestInfo}>{item.info}</Text>
                    </View>
                )}
            />

            <Text style={styles.sectionTitle}>Recommended Treatments</Text>
            <View style={styles.treatmentRow}>
                {mockTreatments.map(t => (
                    <Image key={t.id} source={{ uri: t.image }} style={styles.treatmentImage} />
                ))}
            </View>

            <TouchableOpacity style={styles.scanBtn}>
                <Ionicons name="scan-outline" size={24} color="#FFF" />
                <Text style={styles.scanBtnText}>Identify Pest with AI</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAF8F5', paddingTop: 50, paddingHorizontal: 20 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
    tabs: { flexDirection: 'row', marginBottom: 15 },
    tabText: { fontSize: 16, marginRight: 20, color: '#888' },
    activeTab: { color: '#D84315', fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: '#D84315' },
    searchBar: { flexDirection: 'row', backgroundColor: '#FFF', padding: 10, borderRadius: 25, alignItems: 'center', marginBottom: 20 },
    searchText: { color: '#888', marginLeft: 10 },
    catalogCard: { width: 140, backgroundColor: '#FFF', borderRadius: 12, marginRight: 15, padding: 10 },
    pestImage: { width: '100%', height: 100, borderRadius: 8, marginBottom: 10 },
    pestName: { fontWeight: 'bold', fontSize: 14 },
    pestInfo: { fontSize: 12, color: '#666', marginTop: 5 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
    treatmentRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
    treatmentImage: { width: 60, height: 80, borderRadius: 5, backgroundColor: '#FFF' },
    scanBtn: { flexDirection: 'row', backgroundColor: '#FF7043', padding: 15, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
    scanBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }
});

export default PestAIDashboardScreen;
