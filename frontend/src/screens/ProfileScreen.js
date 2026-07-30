import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={styles.headerTitle}>Farmer Profile</Text>
            </View>

            <View style={styles.profileSection}>
                <Image source={{ uri: 'https://i.pravatar.cc/150?img=11' }} style={styles.avatar} />
                <Text style={styles.name}>Raju K.V.</Text>
                <Text style={styles.location}>KLCARM-42</Text>
                <Text style={styles.location}>Alappuzha, Sector 3</Text>
            </View>

            <Text style={styles.sectionTitle}>My Farms</Text>
            <View style={styles.card}>
                <View style={styles.farmRow}>
                    <View style={styles.farmInfo}>
                        <Text style={styles.farmEmoji}>🌾</Text>
                        <Text style={styles.farmName}>Rice</Text>
                    </View>
                    <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                </View>
                <View style={styles.separator} />
                <View style={styles.farmRow}>
                    <View style={styles.farmInfo}>
                        <Text style={styles.farmEmoji}>🥥</Text>
                        <Text style={styles.farmName}>Coconut</Text>
                    </View>
                    <Ionicons name="alert-circle" size={20} color="#8BC34A" />
                </View>
                <View style={styles.separator} />
                <View style={styles.farmRow}>
                    <View style={styles.farmInfo}>
                        <Text style={styles.farmEmoji}>🥭</Text>
                        <Text style={styles.farmName}>Mango</Text>
                    </View>
                    <Ionicons name="warning" size={20} color="#FFC107" />
                </View>
            </View>

            <Text style={styles.sectionTitle}>Device Management</Text>
            <TouchableOpacity style={styles.card}>
                <View style={styles.farmRow}>
                    <View>
                        <Text style={styles.deviceName}>Smart traps</Text>
                        <Text style={styles.deviceDesc}>Smart traps, sensor</Text>
                    </View>
                    <View style={styles.statusRow}>
                        <Text style={styles.statusText}>Status</Text>
                        <Ionicons name="chevron-forward" size={16} color="#888" />
                    </View>
                </View>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Settings</Text>
            <View style={styles.settingsCard}>
                <TouchableOpacity style={styles.settingRow}>
                    <Ionicons name="person-circle-outline" size={24} color="#555" />
                    <Text style={styles.settingText}>Account</Text>
                    <Ionicons name="chevron-forward" size={16} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingRow}>
                    <Ionicons name="notifications-outline" size={24} color="#555" />
                    <Text style={styles.settingText}>Notifications</Text>
                    <Ionicons name="chevron-forward" size={16} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingRow}>
                    <Ionicons name="sync-circle-outline" size={24} color="#555" />
                    <Text style={styles.settingText}>Data Sync</Text>
                    <Ionicons name="chevron-forward" size={16} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.settingRow, { borderBottomWidth: 0 }]}>
                    <Ionicons name="help-circle-outline" size={24} color="#555" />
                    <Text style={styles.settingText}>Support</Text>
                    <Ionicons name="chevron-forward" size={16} color="#888" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAF8F5', paddingTop: 50, paddingHorizontal: 20 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
    profileSection: { alignItems: 'center', marginBottom: 30 },
    avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
    name: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
    location: { color: '#666', fontSize: 14 },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#333' },
    card: { backgroundColor: '#FFF', borderRadius: 12, padding: 15, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 1 },
    farmRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
    farmInfo: { flexDirection: 'row', alignItems: 'center' },
    farmEmoji: { fontSize: 20, marginRight: 10 },
    farmName: { fontSize: 16, fontWeight: '500' },
    separator: { height: 1, backgroundColor: '#EEE', marginVertical: 5 },
    deviceName: { fontSize: 16, fontWeight: 'bold' },
    deviceDesc: { color: '#888', fontSize: 12 },
    statusRow: { flexDirection: 'row', alignItems: 'center' },
    statusText: { color: '#4CAF50', marginRight: 5, fontWeight: 'bold' },
    settingsCard: { backgroundColor: '#FFF', borderRadius: 12, paddingHorizontal: 15, marginBottom: 30, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 1 },
    settingRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#EEE' },
    settingText: { flex: 1, marginLeft: 15, fontSize: 16 }
});

export default ProfileScreen;
