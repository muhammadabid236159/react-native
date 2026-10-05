import React, { useState, useRef } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Pressable,
    Modal,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCounterStore } from '../store/useCounterStore'
import ThemeToggleButton from '../components/ThemeToggleButton'

const RegisterScreen = ({ navigation }) => {
    const { isDarkMode } = useCounterStore()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [modalVisible, setModalVisible] = useState(false)
    const [modalMessage, setModalMessage] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)

    const handleRegister = () => {
        if (!name.trim() || !email.trim() || !password || !confirmPassword) {
            setModalMessage('Please fill all the fields!')
            setIsSuccess(false)
            setModalVisible(true)
            return
        }

        if (password !== confirmPassword) {
            setModalMessage('Passwords do not match!')
            setIsSuccess(false)
            setModalVisible(true)
            return
        }

        // Registration success
        setIsSuccess(true)
        setModalMessage('Account created successfully! Please login.')
        setModalVisible(true)
    }

    const handleModalClose = () => {
        setModalVisible(false)
        if (isSuccess) {
            navigation.navigate('Login')
        }
    }

    const theme = {
        bg: isDarkMode ? '#0F172A' : '#F8FAFC',
        cardBg: isDarkMode ? '#1E293B' : '#FFFFFF',
        text: isDarkMode ? '#F8FAFC' : '#0F172A',
        subtitle: isDarkMode ? '#94A3B8' : '#64748B',
        label: isDarkMode ? '#CBD5E1' : '#334155',
        inputBg: isDarkMode ? '#1E293B' : '#FFFFFF',
        inputBorder: isDarkMode ? '#334155' : '#CBD5E1',
    }

    return (
        <SafeAreaView edges={['top']} style={[styles.safeContainer, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.topBar}>
                        <Pressable
                            style={styles.backButton}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.backText}>← Back</Text>
                        </Pressable>

                        <ThemeToggleButton />
                    </View>

                    {/* Logo */}
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>A</Text>
                    </View>

                {/* Heading */}
                <Text style={[styles.title, { color: theme.text }]}>Create Account 🚀</Text>

                <Text style={[styles.subtitle, { color: theme.subtitle }]}>
                    Sign up to get started
                </Text>

                {/* Full Name */}
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, { color: theme.label }]}>Full Name</Text>

                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBg, borderColor: theme.inputBorder, color: theme.text }]}
                        placeholder="Enter your name"
                        placeholderTextColor="#999"
                        value={name}
                        onChangeText={setName}
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current?.focus()}
                        blurOnSubmit={false}
                    />
                </View>

                {/* Email Address */}
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, { color: theme.label }]}>Email Address</Text>

                    <TextInput
                        ref={emailRef}
                        style={[styles.input, { backgroundColor: theme.inputBg, borderColor: theme.inputBorder, color: theme.text }]}
                        placeholder="Enter your email"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current?.focus()}
                        blurOnSubmit={false}
                    />
                </View>

                {/* Password */}
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, { color: theme.label }]}>Password</Text>

                    <View style={[styles.passwordBox, { backgroundColor: theme.inputBg, borderColor: theme.inputBorder }]}>
                        <TextInput
                            ref={passwordRef}
                            style={[styles.passwordInput, { color: theme.text }]}
                            placeholder="Enter your password"
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            returnKeyType="next"
                            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                            blurOnSubmit={false}
                        />

                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text style={styles.showText}>
                                {showPassword ? 'Hide' : 'Show'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Confirm Password */}
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, { color: theme.label }]}>Confirm Password</Text>

                    <View style={[styles.passwordBox, { backgroundColor: theme.inputBg, borderColor: theme.inputBorder }]}>
                        <TextInput
                            ref={confirmPasswordRef}
                            style={[styles.passwordInput, { color: theme.text }]}
                            placeholder="Confirm your password"
                            placeholderTextColor="#999"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={!showConfirmPassword}
                            returnKeyType="done"
                            onSubmitEditing={handleRegister}
                        />

                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <Text style={styles.showText}>
                                {showConfirmPassword ? 'Hide' : 'Show'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Register Button */}
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={handleRegister}
                >
                    <Text style={styles.registerText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Back to Login */}
                <View style={styles.loginContainer}>
                    <Text style={styles.accountText}>Already have an account?</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginLinkText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleModalClose}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <Text style={[styles.modalTitle, { color: isSuccess ? '#16A34A' : '#DC2626' }]}>
                            {isSuccess ? 'Success' : 'Error'}
                        </Text>
                        <Text style={styles.modalText}>{modalMessage}</Text>

                        <TouchableOpacity
                            style={[styles.modalButton, { backgroundColor: isSuccess ? '#16A34A' : '#2563EB' }]}
                            onPress={handleModalClose}
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },

    container: {
        flex: 1,
    },

    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 32,
    },

    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },

    backButton: {
        paddingVertical: 6,
        paddingHorizontal: 4,
    },

    backText: {
        color: '#2563EB',
        fontSize: 16,
        fontWeight: '700',
    },

    logo: {
        width: 70,
        height: 70,
        borderRadius: 20,
        backgroundColor: '#2563EB',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },

    logoText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#0F172A',
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 15,
        color: '#64748B',
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 25,
    },

    inputContainer: {
        marginBottom: 16,
    },

    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 6,
    },

    input: {
        height: 52,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 15,
        color: '#0F172A',
    },

    passwordBox: {
        height: 52,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 14,
    },

    passwordInput: {
        flex: 1,
        fontSize: 15,
        color: '#0F172A',
    },

    showText: {
        color: '#2563EB',
        fontWeight: '600',
    },

    registerButton: {
        height: 54,
        backgroundColor: '#2563EB',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#2563EB',
        shadowOpacity: 0.35,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        marginTop: 12,
    },

    registerText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '700',
        letterSpacing: 0.3,
    },

    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 22,
        gap: 5,
    },

    accountText: {
        color: '#64748B',
        fontSize: 14,
    },

    loginLinkText: {
        color: '#2563EB',
        fontSize: 14,
        fontWeight: '700',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    modalCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 24,
        width: '100%',
        maxWidth: 320,
        alignItems: 'center',
        elevation: 5,
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
    },

    modalText: {
        fontSize: 15,
        color: '#475569',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 22,
    },

    modalButton: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        elevation: 2,
    },

    modalButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
    },
})
