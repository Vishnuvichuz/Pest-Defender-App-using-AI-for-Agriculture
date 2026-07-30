import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileHeader}>
                    <View style={styles.avatarPlaceholder}>
                        <Text style={styles.avatarText}>JD</Text>
                    </View>
                    <View>
                        <Text style={styles.profileName}>John Doe</Text>
                        <Text style={styles.profileRole}>Farm Owner</Text>
                    </View>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.sectionTitle}>My Farms</Text>
                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.listItemIcon}>
                        <IconSymbol name="map.fill" size={24} color="#059669" />
                    </View>
                    <View style={styles.listItemContent}>
                        <Text style={styles.listItemTitle}>Sunnyvale North</Text>
                        <Text style={styles.listItemSubtitle}>240 Acres • Active Sensors</Text>
                    </View>
                    <IconSymbol name="chevron.right" size={20} color="#cbd5e1" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.listItemIcon}>
                        <IconSymbol name="map.fill" size={24} color="#059669" />
                    </View>
                    <View style={styles.listItemContent}>
                        <Text style={styles.listItemTitle}>Riverbend South</Text>
                        <Text style={styles.listItemSubtitle}>120 Acres • 2 Alerts</Text>
                    </View>
                    <IconSymbol name="chevron.right" size={20} color="#cbd5e1" />
                </TouchableOpacity>

                <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Settings</Text>
                <TouchableOpacity style={styles.listItem}>
                    <View style={[styles.listItemIcon, { backgroundColor: '#f1f5f9' }]}>
                        <IconSymbol name="bell.fill" size={24} color="#64748b" />
                    </View>
                    <View style={styles.listItemContent}>
                        <Text style={styles.listItemTitle}>Push Notifications</Text>
                    </View>
                    <IconSymbol name="chevron.right" size={20} color="#cbd5e1" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.listItem}>
                    <View style={[styles.listItemIcon, { backgroundColor: '#fee2e2' }]}>
                        <IconSymbol name="rectangle.portrait.and.arrow.right" size={24} color="#dc2626" />
                    </View>
                    <View style={styles.listItemContent}>
                        <Text style={[styles.listItemTitle, { color: '#dc2626' }]}>Log Out</Text>
                    </View>
                </TouchableOpacity>
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
        backgroundColor: '#1e293b',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    avatarPlaceholder: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#10b981',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    profileRole: {
        fontSize: 14,
        color: '#94a3b8',
        marginTop: 4,
    },
    content: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#64748b',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 12,
        marginLeft: 8,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        gap: 16,
    },
    listItemIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#d1fae5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemContent: {
        flex: 1,
    },
    listItemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
    },
    listItemSubtitle: {
        fontSize: 14,
        color: '#64748b',
        marginTop: 4,
    },
});
