import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AnalyticsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={styles.headerTitle}>Farm Pest Analytics</Text>
            </View>

            <View style={styles.tabs}>
                <Text style={[styles.tabText, styles.activeTab]}>Overview</Text>
                <Text style={styles.tabText}>Pest Trends</Text>
                <Text style={styles.tabText}>Crop Health</Text>
                <Text style={styles.tabText}>Financials</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeaderRow}>
                    <Text style={styles.cardTitle}>NDVI Veg Index</Text>
                    <View style={styles.pillRow}>
                        <Text style={styles.pillActive}>This Week</Text>
                        <Text style={styles.pillInactive}>Last Month</Text>
                    </View>
                </View>
                <View style={styles.chartPlaceholder}>
                    <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>75</Text>
                        <Text style={styles.subGaugeText}>Index</Text>
                    </View>
                    <View style={styles.barChartRow}>
                        <View style={[styles.bar, { height: 60, backgroundColor: '#4CAF50' }]} />
                        <View style={[styles.bar, { height: 80, backgroundColor: '#8BC34A' }]} />
                        <View style={[styles.bar, { height: 40, backgroundColor: '#FFC107' }]} />
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Health Issues List</Text>
                <Text style={styles.issueText}>Sector 3: Nutrient Deficiency in Mango - Recommended Action: Soil test</Text>
            </View>

            <View style={styles.rowCards}>
                <View style={[styles.card, { flex: 1, marginRight: 10 }]}>
                    <Text style={styles.cardTitle}>Cost Breakdown</Text>
                    <View style={styles.piePlaceholder} />
                </View>
                <View style={[styles.card, { flex: 1, marginLeft: 10 }]}>
                    <Text style={styles.cardTitle}>Treatment ROI</Text>
                    <View style={styles.roiPlaceholder}>
                        <View style={[styles.bar, { height: 50, backgroundColor: '#FF9800' }]} />
                        <View style={[styles.bar, { height: 90, backgroundColor: '#4CAF50' }]} />
                        <View style={[styles.bar, { height: 30, backgroundColor: '#8BC34A' }]} />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.reportBtn}>
                <Text style={styles.reportBtnText}>Generate Custom Report</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAF8F5', paddingTop: 50, paddingHorizontal: 20 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
    tabs: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    tabText: { fontSize: 14, color: '#888' },
    activeTab: { color: '#D84315', fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: '#D84315' },
    card: { backgroundColor: '#FFF', borderRadius: 12, padding: 15, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
    cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
    cardTitle: { fontSize: 16, fontWeight: 'bold' },
    pillRow: { flexDirection: 'row', backgroundColor: '#F0F0F0', borderRadius: 15, padding: 2 },
    pillActive: { backgroundColor: '#FFF', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 13, fontSize: 12, fontWeight: 'bold' },
    pillInactive: { color: '#888', paddingHorizontal: 10, paddingVertical: 4, fontSize: 12 },
    chartPlaceholder: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 100 },
    gauge: { width: 80, height: 80, borderRadius: 40, borderWidth: 8, borderColor: '#4CAF50', borderBottomColor: '#FFC107', justifyContent: 'center', alignItems: 'center' },
    gaugeText: { fontSize: 24, fontWeight: 'bold' },
    subGaugeText: { fontSize: 10, color: '#888' },
    barChartRow: { flexDirection: 'row', alignItems: 'flex-end', height: '100%' },
    bar: { width: 15, marginHorizontal: 5, borderRadius: 3 },
    issueText: { fontSize: 14, color: '#333', marginTop: 5 },
    rowCards: { flexDirection: 'row', justifyContent: 'space-between' },
    piePlaceholder: { width: 60, height: 60, borderRadius: 30, borderWidth: 10, borderColor: '#FF9800', borderLeftColor: '#4CAF50', borderBottomColor: '#8BC34A', alignSelf: 'center', marginTop: 10 },
    roiPlaceholder: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', height: 60, marginTop: 10 },
    reportBtn: { backgroundColor: '#FFB74D', padding: 15, borderRadius: 25, alignItems: 'center', marginVertical: 20 },
    reportBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});

export default AnalyticsScreen;
