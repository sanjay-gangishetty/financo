import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { layout, text, utilities } from '../styles/globalStyles';

/**
 * About Screen Component
 * Displays information about the Financo app
 */
const AboutScreen = () => {
    return (
        <SafeAreaView style={layout.container}>
            <View style={[layout.centeredContainer, styles.content]}>
                {/* App Title */}
                <Text style={[text.title, utilities.marginBottomLarge]}>Financo</Text>

                {/* App Description */}
                <Text style={[text.description, utilities.marginBottomLarge, utilities.textCenter]}>
                    Your personal finance companion app designed to help you manage your money effectively.
                </Text>

                {/* Version Information */}
                <View style={[styles.versionContainer, utilities.marginBottomLarge]}>
                    <Text style={styles.versionText}>Version 1.0.0</Text>
                    <Text style={styles.buildText}>Build 2024</Text>
                </View>

                {/* Features List */}
                <View style={[styles.featuresContainer, utilities.marginBottomLarge]}>
                    <Text style={[text.sectionTitle, utilities.textCenter]}>Key Features:</Text>
                    <Text style={styles.featureItem}>• Personal Finance Tracking</Text>
                    <Text style={styles.featureItem}>• Budget Management</Text>
                    <Text style={styles.featureItem}>• Expense Analytics</Text>
                    <Text style={styles.featureItem}>• Financial Goals</Text>
                </View>

                {/* Contact Information */}
                <View style={styles.contactContainer}>
                    <Text style={[text.sectionTitle, utilities.textCenter]}>Contact Us</Text>
                    <Text style={styles.contactText}>support@financo.com</Text>
                    <Text style={styles.contactText}>www.financo.com</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

// Styles for the About screen - only custom styles that don't exist in global styles
const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
    },
    versionContainer: {
        alignItems: 'center',
    },
    versionText: {
        fontSize: 14,
        color: '#95a5a6',
        marginBottom: 5,
    },
    buildText: {
        fontSize: 12,
        color: '#bdc3c7',
    },
    featuresContainer: {
        width: '100%',
    },
    featureItem: {
        fontSize: 14,
        color: '#34495e',
        marginBottom: 8,
        textAlign: 'center',
    },
    contactContainer: {
        alignItems: 'center',
    },
    contactText: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 5,
    },
});

export default AboutScreen; 