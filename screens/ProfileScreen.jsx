import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { layout, text, buttons, profile } from '../styles/globalStyles';

/**
 * ProfileScreen component - User profile page
 * @param {Object} navigation - Navigation object from React Navigation
 */
const ProfileScreen = ({ navigation }) => {
    // Mock user data - in a real app this would come from state management
    const userProfile = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        location: 'New York, NY',
        memberSince: 'January 2024',
    };

    return (
        <ScrollView style={layout.container}>
            <View style={layout.headerContainer}>
                <Text style={text.headerTitle}>Profile</Text>
                <TouchableOpacity
                    style={buttons.secondaryButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={buttons.secondaryButtonText}>← Back</Text>
                </TouchableOpacity>
            </View>

            <View style={layout.cardContainer}>
                <View style={profile.avatarContainer}>
                    <View style={profile.avatar}>
                        <Text style={text.avatarText}>
                            {userProfile.name.charAt(0)}
                        </Text>
                    </View>
                </View>

                <Text style={text.userName}>{userProfile.name}</Text>
                <Text style={text.userEmail}>{userProfile.email}</Text>

                <View style={profile.infoSection}>
                    <View style={profile.infoRow}>
                        <Text style={text.label}>Phone:</Text>
                        <Text style={text.value}>{userProfile.phone}</Text>
                    </View>

                    <View style={profile.infoRow}>
                        <Text style={text.label}>Location:</Text>
                        <Text style={text.value}>{userProfile.location}</Text>
                    </View>

                    <View style={profile.infoRow}>
                        <Text style={text.label}>Member Since:</Text>
                        <Text style={text.value}>{userProfile.memberSince}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={buttons.editButton}
                    onPress={() => alert('Edit Profile functionality would go here')}
                >
                    <Text style={buttons.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen; 