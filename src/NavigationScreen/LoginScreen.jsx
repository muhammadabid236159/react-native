import React, { useState } from 'react'
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

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    const handleLogin = () => {
        const tempEmail = 'abid@admin.com'
        const tempPassword = 'abid123'

        if (email === tempEmail && password === tempPassword) {
            navigation.navigate('Home')
        } else {
            setModalMessage('Invalid email or password!')
            setModalVisible(true)
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
               

                <View style={styles.logo}>
                    <Text style={styles.logoText}>A</Text>
                </View>

                <Text style={styles.title}>Welcome Back</Text>

                <Text style={styles.subtitle}>
                    Login to continue to your account
                </Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email Address</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>

                    <View style={styles.passwordBox}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Enter your password"
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />

                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text style={styles.showText}>
                                {showPassword ? 'Hide' : 'Show'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.forgotButton}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.signupContainer}>
                    <Text style={styles.accountText}>Don't have an account?</Text>

                    <TouchableOpacity>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>Login Failed</Text>
                        <Text style={styles.modalText}>{modalMessage}</Text>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },

    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 40,
    },

    logo: {
        width: 75,
        height: 75,
        borderRadius: 20,
        backgroundColor: '#2563EB',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 25,
    },

    logoText: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#0F172A',
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 15,
        color: '#64748B',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 35,
    },

    inputContainer: {
        marginBottom: 18,
    },

    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 8,
    },

    input: {
        height: 55,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#0F172A',
    },

    passwordBox: {
        height: 55,
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
        fontSize: 16,
        color: '#0F172A',
    },

    showText: {
        color: '#2563EB',
        fontWeight: '600',
    },

    forgotButton: {
        alignSelf: 'flex-end',
        marginBottom: 25,
    },

    forgotText: {
        color: '#2563EB',
        fontSize: 14,
        fontWeight: '600',
    },

    loginButton: {
        height: 55,
        backgroundColor: '#2563EB',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },

    loginText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '700',
    },

    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
        gap: 5,
    },

    accountText: {
        color: '#64748B',
        fontSize: 14,
    },

    signupText: {
        color: '#2563EB',
        fontSize: 14,
        fontWeight: '700',
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
        paddingHorizontal: 24,
    },

    modalCard: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 22,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },

    modalTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 8,
    },

    modalText: {
        fontSize: 15,
        color: '#475569',
        lineHeight: 22,
        marginBottom: 20,
    },

    modalButton: {
        backgroundColor: '#2563EB',
        height: 46,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
})