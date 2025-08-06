import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { layout, text, buttons, utilities } from '../styles/globalStyles';

/**
 * HomeScreen component - Main landing page of the app
 * @param {Object} navigation - Navigation object from React Navigation
 */
const HomeScreen = ({ navigation }) => {
    return (
        <View style={layout.centeredContainer}>
            <Text style={text.title}>Welcome to Financo</Text>
            <Text style={[text.subtitle, utilities.marginBottomLarge]}>Your Personal Finance App</Text>

            <View style={utilities.buttonContainer}>
                <TouchableOpacity
                    style={buttons.primaryButton}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={buttons.primaryButtonText}>Go to Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={buttons.primaryButton}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={buttons.primaryButtonText}>Go to Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={buttons.primaryButton}
                    onPress={() => navigation.navigate('About')}
                >
                    <Text style={buttons.primaryButtonText}>Go to About</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen; 