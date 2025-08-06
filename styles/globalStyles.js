import { StyleSheet } from 'react-native';

/**
 * Global Styles for Financo App
 * This file contains all styling definitions used across the app
 * Organized by categories for better maintainability
 */

// Color palette for consistent theming
const colors = {
    // Primary colors
    primary: '#007AFF',
    primaryLight: '#4DA6FF',
    primaryDark: '#0056CC',

    // Background colors
    background: '#f5f5f5',
    surface: '#ffffff',

    // Text colors
    textPrimary: '#333333',
    textSecondary: '#666666',
    textLight: '#999999',
    textWhite: '#ffffff',

    // Border colors
    borderLight: '#e0e0e0',
    borderMedium: '#f0f0f0',

    // Status colors
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',

    // Switch colors
    switchTrackFalse: '#e0e0e0',
    switchTrackTrue: '#007AFF',
    switchThumbFalse: '#f4f3f4',
    switchThumbTrue: '#ffffff',
};

// Typography scale
const typography = {
    // Font sizes
    fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 28,
        '4xl': 32,
    },

    // Font weights
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: 'bold',
    },

    // Line heights
    lineHeight: {
        tight: 16,
        normal: 20,
        relaxed: 24,
    },
};

// Spacing scale
const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 15,
    xl: 20,
    '2xl': 30,
    '3xl': 40,
};

// Border radius values
const borderRadius = {
    sm: 5,
    md: 10,
    lg: 15,
    xl: 20,
    full: 50,
};

// Shadow configurations
const shadows = {
    small: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
};

// Layout styles
const layout = StyleSheet.create({
    // Container styles
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    // Screen container with padding
    screenContainer: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.xl,
    },

    // Centered container
    centeredContainer: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.xl,
    },

    // Header container
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: spacing.xl,
        paddingTop: 60,
        backgroundColor: colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderLight,
    },

    // Card container
    cardContainer: {
        backgroundColor: colors.surface,
        borderRadius: borderRadius.lg,
        padding: spacing.xl,
        marginBottom: spacing.xl,
        ...shadows.medium,
    },

    // Section container
    sectionContainer: {
        backgroundColor: colors.surface,
        borderRadius: borderRadius.lg,
        padding: spacing.xl,
        marginBottom: spacing.xl,
        ...shadows.medium,
    },

    // Row container
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    // Space between row
    spaceBetweenRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

// Typography styles
const text = StyleSheet.create({
    // Title styles
    title: {
        fontSize: typography.fontSize['3xl'],
        fontWeight: typography.fontWeight.bold,
        color: colors.textPrimary,
        textAlign: 'center',
    },

    subtitle: {
        fontSize: typography.fontSize.base,
        color: colors.textSecondary,
        textAlign: 'center',
    },

    headerTitle: {
        fontSize: typography.fontSize['2xl'],
        fontWeight: typography.fontWeight.bold,
        color: colors.textPrimary,
    },

    // Section titles
    sectionTitle: {
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.bold,
        color: colors.textPrimary,
        marginBottom: spacing.lg,
    },

    // Label styles
    label: {
        fontSize: typography.fontSize.base,
        color: colors.textSecondary,
        fontWeight: typography.fontWeight.medium,
    },

    // Value styles
    value: {
        fontSize: typography.fontSize.base,
        color: colors.textPrimary,
        fontWeight: typography.fontWeight.normal,
    },

    // Description text
    description: {
        fontSize: typography.fontSize.sm,
        color: colors.textSecondary,
        lineHeight: typography.lineHeight.normal,
    },

    // User name
    userName: {
        fontSize: typography.fontSize['2xl'],
        fontWeight: typography.fontWeight.bold,
        color: colors.textPrimary,
        textAlign: 'center',
    },

    // User email
    userEmail: {
        fontSize: typography.fontSize.base,
        color: colors.textSecondary,
        textAlign: 'center',
    },

    // Avatar text
    avatarText: {
        color: colors.textWhite,
        fontSize: typography.fontSize['4xl'],
        fontWeight: typography.fontWeight.bold,
    },
});

// Button styles
const buttons = StyleSheet.create({
    // Primary button
    primaryButton: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing['2xl'],
        borderRadius: borderRadius.md,
        alignItems: 'center',
        ...shadows.medium,
    },

    // Primary button text
    primaryButtonText: {
        color: colors.textWhite,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
    },

    // Secondary button (text only)
    secondaryButton: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
    },

    // Secondary button text
    secondaryButtonText: {
        color: colors.primary,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
    },

    // Action button
    actionButton: {
        paddingVertical: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderMedium,
    },

    // Action button text
    actionButtonText: {
        fontSize: typography.fontSize.base,
        color: colors.primary,
        fontWeight: typography.fontWeight.medium,
    },

    // Edit button
    editButton: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.lg,
        borderRadius: borderRadius.md,
        alignItems: 'center',
    },

    // Edit button text
    editButtonText: {
        color: colors.textWhite,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
    },
});

// Form and input styles
const forms = StyleSheet.create({
    // Input container
    inputContainer: {
        marginBottom: spacing.lg,
    },

    // Input field
    input: {
        borderWidth: 1,
        borderColor: colors.borderLight,
        borderRadius: borderRadius.md,
        padding: spacing.md,
        fontSize: typography.fontSize.base,
        color: colors.textPrimary,
        backgroundColor: colors.surface,
    },

    // Input label
    inputLabel: {
        fontSize: typography.fontSize.sm,
        color: colors.textSecondary,
        marginBottom: spacing.xs,
        fontWeight: typography.fontWeight.medium,
    },
});

// Profile specific styles
const profile = StyleSheet.create({
    // Avatar container
    avatarContainer: {
        alignItems: 'center',
        marginBottom: spacing.xl,
    },

    // Avatar
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Info section
    infoSection: {
        marginBottom: spacing['2xl'],
    },

    // Info row
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderMedium,
    },
});

// Settings specific styles
const settings = StyleSheet.create({
    // Settings container
    settingsContainer: {
        padding: spacing.xl,
    },

    // Setting row
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderMedium,
    },

    // Setting info container
    settingInfo: {
        flex: 1,
        marginRight: spacing.lg,
    },

    // Setting label
    settingLabel: {
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
        color: colors.textPrimary,
        marginBottom: spacing.xs,
    },

    // Setting description
    settingDescription: {
        fontSize: typography.fontSize.sm,
        color: colors.textSecondary,
        lineHeight: typography.lineHeight.normal,
    },

    // Info row for app information
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderMedium,
    },
});

// Utility styles
const utilities = StyleSheet.create({
    // Margin utilities
    marginBottom: {
        marginBottom: spacing.xl,
    },

    marginBottomLarge: {
        marginBottom: spacing['2xl'],
    },

    // Padding utilities
    paddingHorizontal: {
        paddingHorizontal: spacing.xl,
    },

    // Text alignment
    textCenter: {
        textAlign: 'center',
    },

    // Flex utilities
    flexOne: {
        flex: 1,
    },

    // Gap for button containers
    buttonContainer: {
        width: '100%',
        gap: spacing.lg,
    },
});

// Export all styles and constants
export {
    colors,
    typography,
    spacing,
    borderRadius,
    shadows,
    layout,
    text,
    buttons,
    forms,
    profile,
    settings,
    utilities,
};

// Export default styles object for easy access
export default {
    colors,
    typography,
    spacing,
    borderRadius,
    shadows,
    layout,
    text,
    buttons,
    forms,
    profile,
    settings,
    utilities,
}; 