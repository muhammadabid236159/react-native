import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

const Day2 = () => {
    return (
        <View className="flex-1 bg-slate-100 justify-center px-5">

            {/* Form Card */}
            <View className="bg-white rounded-3xl p-6 shadow-lg">

                {/* Header */}
                <View className="mb-7">
                    <Text className="text-3xl font-bold text-slate-900">
                        Create Account
                    </Text>

                    <Text className="text-slate-500 mt-2">
                        Fill in your details to get started
                    </Text>
                </View>

                {/* Name */}
                <View className="mb-4">
                    <Text className="text-sm font-semibold text-slate-700 mb-2">
                        Full Name
                    </Text>

                    <TextInput
                        className="h-14 border border-slate-300 rounded-2xl px-4 bg-slate-50 text-slate-900"
                        placeholder="John Doe"
                        placeholderTextColor="#94a3b8"
                    />
                </View>

                {/* Email */}
                <View className="mb-4">
                    <Text className="text-sm font-semibold text-slate-700 mb-2">
                        Email Address
                    </Text>

                    <TextInput
                        className="h-14 border border-slate-300 rounded-2xl px-4 bg-slate-50 text-slate-900"
                        placeholder="john@example.com"
                        placeholderTextColor="#94a3b8"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* Password */}
                <View className="mb-4">
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-sm font-semibold text-slate-700">
                            Password
                        </Text>

                        <Text className="text-sm text-blue-600">
                            Forgot?
                        </Text>
                    </View>

                    <TextInput
                        className="h-14 border border-slate-300 rounded-2xl px-4 bg-slate-50 text-slate-900"
                        placeholder="••••••••"
                        placeholderTextColor="#94a3b8"
                        secureTextEntry
                    />
                </View>
                <View className="mb-4">
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-sm font-semibold text-slate-700">
                           conform Password
                        </Text>

                        
                    </View>

                    <TextInput
                        className="h-14 border border-slate-300 rounded-2xl px-4 bg-slate-50 text-slate-900"
                        placeholder="••••••••"
                        placeholderTextColor="#94a3b8"
                        secureTextEntry
                    />
                </View>
                {/* Phone */}
                <View className="mb-5">
                    <Text className="text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                    </Text>

                    <TextInput
                        className="h-14 border border-slate-300 rounded-2xl px-4 bg-slate-50 text-slate-900"
                        placeholder="+92 300 1234567"
                        placeholderTextColor="#94a3b8"
                        keyboardType="phone-pad"
                    />
                </View>

                {/* Register Button */}
                <Pressable className="h-14 bg-blue-600 rounded-2xl items-center justify-center active:bg-blue-700">
                    <Text className="text-white text-lg font-bold">
                        Create Account
                    </Text>
                </Pressable>

                {/* Login */}
                <View className="flex-row justify-center mt-6">
                    <Text className="text-slate-500">
                        Already have an account?
                    </Text>

                    <Pressable>
                        <Text className="text-blue-600 font-bold ml-1">
                            Login
                        </Text>
                    </Pressable>
                </View>

            </View>

            {/* Bottom Text */}
            <Text className="text-center text-slate-400 text-xs mt-5">
                By continuing, you agree to our Terms & Privacy Policy
            </Text>

        </View>
    );
};

export default Day2;