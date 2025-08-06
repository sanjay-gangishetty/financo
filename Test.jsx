import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screen components
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

// Create stack navigator
const Stack = createNativeStackNavigator();

/**
 * Test component with navigation setup
 * This is an alternative entry point that uses the same navigation structure
 */
export default function Test() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false, // Hide default headers since we have custom ones
                    animation: 'slide_from_right', // Smooth slide animation
                }}
            >
                {/* Home Screen - Main landing page */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Financo',
                    }}
                />

                {/* Profile Screen - User profile page */}
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: 'Profile',
                    }}
                />

                {/* Settings Screen - App settings page */}
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: 'Settings',
                    }}
                />
            </Stack.Navigator>

            {/* Status bar configuration */}
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
