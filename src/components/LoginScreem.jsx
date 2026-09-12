import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = () => {
        if (!email || !pass) {
            setErrorMsg("Please enter email and password");
            return; 
        }
        setErrorMsg("");
        // Yahan aap API call ya authentication logic daal sakte hain
        console.log("Email:", email);
        console.log("Password:", pass);
        setEmail('')
        setPass('')
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >

                {/* Logo / App Name */}
                <View style={styles.logoContainer}>
                    <View style={styles.logoCircle}>
                        <Text style={styles.logoText}>A</Text>
                    </View>
                    <Text style={styles.appName}>MyApp</Text>
                </View>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.subtitle}>Login to your account to continue</Text>
                </View>

                {/* Error Message */}
                {errorMsg ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{errorMsg}</Text>
                    </View>
                ) : null}

                {/* Email Input */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email Address</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="you@example.com"
                            placeholderTextColor="#9ca3af"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input} 
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                </View>

                {/* Password Input */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="••••••••"
                            placeholderTextColor="#9ca3af"
                            secureTextEntry
                            style={styles.input}
                            value={pass}
                            onChangeText={setPass}
                        />
                    </View>
                </View>

                {/* Remember Me + Forgot Password */}
                <View style={styles.optionsRow}>
                    <TouchableOpacity style={styles.rememberMe}>
                        <View style={styles.checkbox} />
                        <Text style={styles.rememberMeText}>Remember me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.85}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>Or continue with</Text>
                    <View style={styles.dividerLine} />
                </View>

                {/* Social Buttons */}
                <View style={styles.socialRow}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Text style={styles.socialButtonText}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Text style={styles.socialButtonText}>Apple</Text>
                    </TouchableOpacity>
                </View>

                {/* Signup Link */}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 24,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    logoCircle: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#2563eb',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    logoText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    appName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#111827',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#6b7280',
        textAlign: 'center',
        marginTop: 8,
    },
    errorContainer: {
        backgroundColor: '#fee2e2',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginBottom: 16,
    },
    errorText: {
        color: '#dc2626',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '500',
    },
    inputGroup: {
        marginBottom: 18,
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 6,
    },
    inputWrapper: {
        backgroundColor: '#f9fafb',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 15,
        color: '#111827',
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 28,
    },
    rememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#d1d5db',
        marginRight: 8,
    },
    rememberMeText: {
        fontSize: 13,
        color: '#6b7280',
    },
    forgotPasswordText: {
        fontSize: 13,
        color: '#2563eb',
        fontWeight: '600',
    },
    loginButton: {
        backgroundColor: '#2563eb',
        borderRadius: 50,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 28,
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 4,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#e5e7eb',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#9ca3af',
        fontSize: 12,
    },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    socialButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 50,
        paddingVertical: 13,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    socialButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupText: {
        color: '#6b7280',
        fontSize: 14,
    },
    signupLink: {
        color: '#2563eb',
        fontSize: 14,
        fontWeight: '700',
    },
});

export default LoginScreen;