import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screen components
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

/**
 * Main App component with bottom tab navigation setup
 * Uses React Navigation to manage tab-based screen transitions
 */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          // Custom tab bar icon configuration
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Set appropriate icon names based on route
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // Return the Ionicons component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // Tab bar styling
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: '#95a5a6',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#ecf0f1',
            paddingBottom: 5,
            paddingTop: 5,
            height: 70,
          },
          // Header styling
          headerShown: false,
        })}
      >
        {/* Home Tab - Main landing page */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />

        {/* About Tab - App information page */}
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: 'About',
          }}
        />

        {/* Settings Tab - App settings page */}
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
          }}
        />

        {/* Profile Tab - User profile page */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Tab.Navigator>

      {/* Status bar configuration */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
