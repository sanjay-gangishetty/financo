# Financo - Personal Finance App

A React Native app with navigation between multiple screens.

## Navigation Structure

The app uses React Navigation with a stack navigator to manage screen transitions. The navigation includes:

### Screens

1. **Home Screen** (`screens/HomeScreen.jsx`)

   - Main landing page
   - Welcome message and navigation buttons
   - Navigate to Profile and Settings

2. **Profile Screen** (`screens/ProfileScreen.jsx`)

   - User profile information
   - Mock user data display
   - Edit profile functionality (placeholder)
   - Back navigation to Home

3. **Settings Screen** (`screens/SettingsScreen.jsx`)
   - App settings with toggle switches
   - Notifications, Dark Mode, Biometric settings
   - Account actions (Change Password, Privacy Policy, Terms)
   - App information display
   - Back navigation to Home

## Features

- **Smooth Navigation**: Slide animations between screens
- **Custom Headers**: Each screen has its own custom header with back navigation
- **Modern UI**: Clean, modern design with shadows and proper spacing
- **Interactive Elements**: Toggle switches, buttons, and touch interactions
- **Responsive Design**: Works on different screen sizes

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Run on iOS:

   ```bash
   npm run ios
   ```

4. Run on Android:
   ```bash
   npm run android
   ```

## Dependencies

- `@react-navigation/native` - Core navigation library
- `@react-navigation/native-stack` - Stack navigator
- `react-native-screens` - Native screen components
- `react-native-safe-area-context` - Safe area handling

## File Structure

```
Financo/
├── App.js                 # Main app entry point with navigation
├── Test.jsx              # Alternative entry point
├── screens/
│   ├── HomeScreen.jsx    # Home screen component
│   ├── ProfileScreen.jsx # Profile screen component
│   └── SettingsScreen.jsx # Settings screen component
└── package.json
```

## Navigation Flow

```
Home Screen
├── Navigate to Profile
└── Navigate to Settings

Profile Screen
└── Back to Home

Settings Screen
└── Back to Home
```

## Customization

- Modify screen components in the `screens/` directory
- Update navigation options in `App.js` or `Test.jsx`
- Add new screens by creating new components and adding them to the navigator
- Customize styles in each component's StyleSheet
