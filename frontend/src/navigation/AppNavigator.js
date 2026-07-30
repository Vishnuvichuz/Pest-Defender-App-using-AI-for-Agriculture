import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResourcesScreen from '../screens/ResourcesScreen';
import AlertsScreen from '../screens/AlertsScreen';
import PestAIDashboardScreen from '../screens/PestAIDashboardScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Nearby Res" component={ResourcesScreen} />
            <Tab.Screen name="Pest AI" component={PestAIDashboardScreen} />
            <Tab.Screen name="Alerts" component={AlertsScreen} />
            <Tab.Screen name="Analytics" component={AnalyticsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
