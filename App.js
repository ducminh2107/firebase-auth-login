import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  HomeScreen,
  ForgotPasswordScreen,
  LoginScreen,
  SignupScreen,
} from "./screens";
import { RootNavigator } from "./navigation/RootNavigator";
import { AuthenticatedUserProvider } from "./providers";

const firebaseConfig = {
  apiKey: "AIzaSyBpGYXRloua2yYp7Qbxp3feNNA_dlr2QHw",
  authDomain: "authfirebasereactnative-79632.firebaseapp.com",
  projectId: "authfirebasereactnative-79632",
  storageBucket: "authfirebasereactnative-79632.appspot.com",
  messagingSenderId: "260385658731",
  appId: "1:260385658731:web:7bebb209c3e975acdfde2e",
  measurementId: "G-1LVJ5RRGT2",
};

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <SignupScreen />
        <LoginScreen />
        <ForgotPasswordScreen />
        <HomeScreen />
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};
export default App;
