import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from 'react-native';
import { supabase } from '../lib/supabase';

// This handles the redirect back to the app
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    const [loading, setLoading] = useState(false);

    const onGoogleLogin = async () => {
        setLoading(true);
        try {
            // 1. Construct the redirect URL (purduecoach://google-auth/callback)
            const redirectUrl = Linking.createURL('/google-auth/callback');

            // 2. Start the OAuth flow
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: redirectUrl,
                },
            });

            if (error) throw error;

            // 3. Open the browser to let the user sign in
            if (data.url) {
                const result = await WebBrowser.openAuthSessionAsync(data.url, redirectUrl);

                // Note: The session is automatically handled by supabase.auth.onAuthStateChange
                // in your layout file, so we don't need to manually navigate here usually.
            }
        } catch (err: any) {
            Alert.alert('Login Error', err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 justify-center items-center bg-white p-6">
            <View className="mb-10 items-center">
                <Text className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</Text>
                <Text className="text-gray-500 text-center">
                    Sign in to access your personal AI Coach
                </Text>
            </View>

            <TouchableOpacity
                onPress={onGoogleLogin}
                disabled={loading}
                className="flex-row items-center justify-center bg-black rounded-xl py-4 px-6 w-full shadow-md"
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <>
                        {/* You can add a Google Icon SVG here */}
                        <Text className="text-white font-bold text-lg ml-3">
                            Continue with Google
                        </Text>
                    </>
                )}
            </TouchableOpacity>

            <Text className="mt-8 text-xs text-gray-400">
                By continuing, you agree to our Terms & Privacy Policy.
            </Text>
        </View>
    );
}

// tsconfig.json
{
    "compilerOptions": {
        // ...existing options...
        "types": ["nativewind/types"], // add if missing
  },
    "include": [
        "global.d.ts",
        "**/*.ts",
        "**/*.tsx",
        // ...other includes...
    ]
    // ...existing code...
}