import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { layout, text, buttons, settings, colors } from '../styles/globalStyles';

/**
 * SettingsScreen component - App settings page
 * @param {Object} navigation - Navigation object from React Navigation
 */
const SettingsScreen = ({ navigation }) => {
    // State for toggle switches
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [biometricEnabled, setBiometricEnabled] = useState(false);

    /**
     * Handle setting toggle
     * @param {boolean} value - New toggle value
     * @param {Function} setter - State setter function
     */
    const handleToggle = (value, setter) => {
        setter(value);
        // In a real app, you would save this to storage
        console.log('Setting updated:', value);
    };

    return (
        <ScrollView style={layout.container}>
            <View style={layout.headerContainer}>
                <Text style={text.headerTitle}>Settings</Text>
                <TouchableOpacity
                    style={buttons.secondaryButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={buttons.secondaryButtonText}>← Back</Text>
                </TouchableOpacity>
            </View>

            <View style={settings.settingsContainer}>
                {/* Notifications Section */}
                <View style={layout.sectionContainer}>
                    <Text style={text.sectionTitle}>Notifications</Text>

                    <View style={settings.settingRow}>
                        <View style={settings.settingInfo}>
                            <Text style={settings.settingLabel}>Push Notifications</Text>
                            <Text style={settings.settingDescription}>
                                Receive alerts for important updates
                            </Text>
                        </View>
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={(value) => handleToggle(value, setNotificationsEnabled)}
                            trackColor={{ false: colors.switchTrackFalse, true: colors.switchTrackTrue }}
                            thumbColor={notificationsEnabled ? colors.switchThumbTrue : colors.switchThumbFalse}
                        />
                    </View>
                </View>

                {/* Appearance Section */}
                <View style={layout.sectionContainer}>
                    <Text style={text.sectionTitle}>Appearance</Text>

                    <View style={settings.settingRow}>
                        <View style={settings.settingInfo}>
                            <Text style={settings.settingLabel}>Dark Mode</Text>
                            <Text style={settings.settingDescription}>
                                Use dark theme throughout the app
                            </Text>
                        </View>
                        <Switch
                            value={darkModeEnabled}
                            onValueChange={(value) => handleToggle(value, setDarkModeEnabled)}
                            trackColor={{ false: colors.switchTrackFalse, true: colors.switchTrackTrue }}
                            thumbColor={darkModeEnabled ? colors.switchThumbTrue : colors.switchThumbFalse}
                        />
                    </View>
                </View>

                {/* Security Section */}
                <View style={layout.sectionContainer}>
                    <Text style={text.sectionTitle}>Security</Text>

                    <View style={settings.settingRow}>
                        <View style={settings.settingInfo}>
                            <Text style={settings.settingLabel}>Biometric Login</Text>
                            <Text style={settings.settingDescription}>
                                Use fingerprint or face ID to login
                            </Text>
                        </View>
                        <Switch
                            value={biometricEnabled}
                            onValueChange={(value) => handleToggle(value, setBiometricEnabled)}
                            trackColor={{ false: colors.switchTrackFalse, true: colors.switchTrackTrue }}
                            thumbColor={biometricEnabled ? colors.switchThumbTrue : colors.switchThumbFalse}
                        />
                    </View>
                </View>

                {/* Account Actions */}
                <View style={layout.sectionContainer}>
                    <Text style={text.sectionTitle}>Account</Text>

                    <TouchableOpacity
                        style={buttons.actionButton}
                        onPress={() => alert('Change Password functionality would go here')}
                    >
                        <Text style={buttons.actionButtonText}>Change Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttons.actionButton}
                        onPress={() => alert('Privacy Policy would open here')}
                    >
                        <Text style={buttons.actionButtonText}>Privacy Policy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttons.actionButton}
                        onPress={() => alert('Terms of Service would open here')}
                    >
                        <Text style={buttons.actionButtonText}>Terms of Service</Text>
                    </TouchableOpacity>
                </View>

                {/* App Info */}
                <View style={layout.sectionContainer}>
                    <Text style={text.sectionTitle}>App Information</Text>

                    <View style={settings.infoRow}>
                        <Text style={text.label}>Version</Text>
                        <Text style={text.value}>1.0.0</Text>
                    </View>

                    <View style={settings.infoRow}>
                        <Text style={text.label}>Build</Text>
                        <Text style={text.value}>2024.1.1</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SettingsScreen; 