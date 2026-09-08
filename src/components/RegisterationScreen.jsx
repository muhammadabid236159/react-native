import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newError = {};

    if (!name.trim()) {
      newError.name = 'Name is required';
    }

    if (!email.trim()) {
      newError.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = 'Invalid email format';
    }

    if (!phone.trim()) {
      newError.phone = 'Phone Number is required';
    }

    if (!password) {
      newError.password = 'Password is required';
    } else if (password.length < 6) {
      newError.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newError.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      newError.confirmPassword = 'Passwords do not match';
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleRegister = () => {
    if (validate()) {
      Alert.alert('Success', `Registration successful!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
      // Clear form
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    }
  };

  const handleGoogleSignup = () => {
    Alert.alert('Google', 'Continue with Google pressed');
  };

  const handleAppleSignup = () => {
    Alert.alert('Apple', 'Continue with Apple pressed');
  };

  const handleLoginPress = () => {
    Alert.alert('Login', 'Navigate to Login Screen');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        className="px-6"
        keyboardShouldPersistTaps="handled">
        {/* Header */}
        <View className="items-center mt-10 mb-8">
          <View className="w-20 h-20 rounded-full bg-indigo-100 items-center justify-center mb-4">
            <MaterialIcon name="account-plus" size={40} color="#4F46E5" />
          </View>
          <Text className="text-2xl font-bold text-gray-800">
            Create Account
          </Text>
          <Text className="text-sm text-gray-500 mt-1">
            Sign up to get started
          </Text>
        </View>

        {/* Full Name */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-1 font-medium">Full Name</Text>
          <TextInput
            placeholder="Enter your full name"
            placeholderTextColor="#9CA3AF"
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-gray-50"
            value={name}
            onChangeText={setName}
          />
          {errors.name && (
            <Text className="text-red-500 text-xs mt-1">{errors.name}</Text>
          )}
        </View>

        {/* Email */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-1 font-medium">Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-gray-50"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && (
            <Text className="text-red-500 text-xs mt-1">{errors.email}</Text>
          )}
        </View>

        {/* Phone Number */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-1 font-medium">Phone Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-gray-50"
            value={phone}
            onChangeText={setPhone}
          />
          {errors.phone && (
            <Text className="text-red-500 text-xs mt-1">{errors.phone}</Text>
          )}
        </View>

        {/* Password */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-1 font-medium">Password</Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-gray-50"
            value={password}
            onChangeText={setPassword}
          />
          {errors.password && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.password}
            </Text>
          )}
        </View>

        {/* Confirm Password */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-1 font-medium">
            Confirm Password
          </Text>
          <TextInput
            placeholder="Re-enter your password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-gray-50"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {errors.confirmPassword && (
            <Text className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </Text>
          )}
        </View>

        {/* Register Button */}
        <TouchableOpacity
          className="bg-indigo-600 rounded-xl py-4 items-center mb-4"
          onPress={handleRegister}>
          <Text className="text-white font-semibold text-base">Register</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-4">
          <View className="flex-1 h-[1px] bg-gray-200" />
          <Text className="mx-3 text-gray-400 text-sm">OR</Text>
          <View className="flex-1 h-[1px] bg-gray-200" />
        </View>

        {/* Social Buttons */}
        <TouchableOpacity
          className="flex-row border border-gray-300 rounded-xl py-3 items-center justify-center mb-3"
          onPress={handleGoogleSignup}>
          <Icon name="google" size={20} color="#DB4437" style={{marginRight: 10}} />
          <Text className="text-gray-700 font-medium">
            Continue with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row border border-gray-300 rounded-xl py-3 items-center justify-center mb-6"
          onPress={handleAppleSignup}>
          <Icon name="apple" size={22} color="#000000" style={{marginRight: 10}} />
          <Text className="text-gray-700 font-medium">
            Continue with Apple
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <View className="flex-row justify-center mb-12">
          <Text className="text-gray-500">Already have an account? </Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text className="text-indigo-600 font-extrabold mb-12">Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}