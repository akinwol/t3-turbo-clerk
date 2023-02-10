import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

import { TRPCProvider } from "../src/utils/api";
import { tokenCache } from "../src/utils/cache";
import { SignInSignUpScreen } from "./auth/signin";

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <SignedIn>
        <TRPCProvider>
          <SafeAreaProvider>
            {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
            <Stack
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#f472b6",
                },
              }}
            />
            <StatusBar />
          </SafeAreaProvider>
        </TRPCProvider>
      </SignedIn>
      <SignedOut>
        <SignInSignUpScreen />
      </SignedOut>
    </ClerkProvider>
  );
};

export default RootLayout;
