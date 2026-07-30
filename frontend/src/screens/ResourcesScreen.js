import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockLabourers = [
    { id: '1', name: 'Name Ston', specialty: 'Harvesting Specialist', location: 'Planting Town', image: 'https://i.pravatar.cc/150?img=11' },
    { id: '2', name: 'Nams Nameo', specialty: 'Planting Town', location: 'Key Skills', image: 'https://i.pravatar.cc/150?img=12' },
];

const mockEquipment = [
    { id: '1', name: 'Small tractor', desc: 'Small tractor suitable for...', rate: '75', image: 'https://via.placeholder.com/150/FF8C00/FFF?text=Tractor' },
    { id: '2', name: 'Sprayer', desc: 'Smarker sprayer...', rate: 'Nhhy', image: 'https://via.placeholder.com/150/FF8C00/FFF?text=Sprayer' },
];

const ResourcesScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={styles.headerTitle}>Nearby Resources</Text>
            </View>

            <Text style={styles.sectionTitle}>Available Labour & Equipment</Text>

            <Text style={styles.subTitle}>Available Labourers</Text>
            <FlatList
                data={mockLabourers}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.avatar} />
                        <Text style={styles.cardName}>{item.name}</Text>
                        <Text style={styles.cardDesc}>{item.specialty}</Text>
                        <TouchableOpacity style={styles.contactBtn}>
                            <Text style={styles.contactBtnText}>Contact</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Text style={styles.subTitle}>Equipment for Rent</Text>
            <FlatList
                data={mockEquipment}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.equipImage} />
                        <Text style={styles.cardName}>{item.name}</Text>
                        <Text style={styles.cardDesc}>{item.desc}</Text>
                        <TouchableOpacity style={styles.rentBtn}>
                            <Text style={styles.rentBtnText}>Rent Now</Text>
                        </TouchableOpacity>
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
    sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
    subTitle: { fontSize: 18, fontWeight: '600', marginVertical: 10 },
    card: { backgroundColor: '#FFF', borderRadius: 12, padding: 15, marginRight: 15, alignItems: 'center', width: 140, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
    avatar: { width: 60, height: 60, borderRadius: 30, marginBottom: 10 },
    equipImage: { width: 100, height: 80, borderRadius: 8, marginBottom: 10 },
    cardName: { fontWeight: 'bold', textAlign: 'center' },
    cardDesc: { color: '#666', fontSize: 12, textAlign: 'center', marginVertical: 5 },
    contactBtn: { backgroundColor: '#E0F2F1', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 },
    contactBtnText: { color: '#00796B', fontWeight: 'bold' },
    rentBtn: { backgroundColor: '#FF9800', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 },
    rentBtnText: { color: '#FFF', fontWeight: 'bold' }
});

export default ResourcesScreen;
