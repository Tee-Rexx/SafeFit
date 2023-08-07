# SafeFit


React Native Project
This project is based on React Native version `0.69.12`.

Getting Started
To run the project locally on your machine, follow these steps:

# Install Dependencies:
Before you start, make sure you have Node.js and npm installed on your system. To install project dependencies, run:
`npm install`

# Run the App:
To start the development server and run the app on your connected device or emulator, use the following command:

`npx react-native run-android`
or for iOS
`npx react-native run-ios`

This will launch the app on your device or emulator, and you can see your changes live as you develop.

# Build APK
To create a release build of the app in APK format for Android devices, follow these steps:

# Generate APK:
To generate the release APK, run the following command:

`cd android` 
and
`./gradlew bundleRelease`

The APK will be generated at `android/app/build/outputs/apk/release/app-release.apk`.

# License
This project is licensed under the MIT License.
