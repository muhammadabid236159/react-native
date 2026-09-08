import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login pressed:', {email, password});
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-white px-6 justify-center">
          {/* Logo / Header */}
          <View className="items-center mb-10">
            <View className="w-20 h-20 bg-blue-500 rounded-2xl items-center justify-center mb-4">
              <Text className="text-white text-3xl font-bold">A</Text>
            </View>
            <Text className="text-3xl font-bold text-gray-800">
              Welcome Back
            </Text>
            <Text className="text-base text-gray-500 mt-2">
              Sign in to your account
            </Text>
          </View>

          {/* Email Input */}
          <View className="mb-4">
            <Text className="text-sm font-semibold text-gray-700 mb-2">
              Email
            </Text>
            <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-1">
              <MaterialIcon name="email-outline" size={20} color="#9CA3AF" style={{marginRight: 12}} />
              <TextInput
                className="flex-1 text-base text-gray-800 py-3"
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="mb-2">
            <Text className="text-sm font-semibold text-gray-700 mb-2">
              Password
            </Text>
            <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-1">
              <MaterialIcon name="lock-outline" size={20} color="#9CA3AF" style={{marginRight: 12}} />
              <TextInput
                className="flex-1 text-base text-gray-800 py-3"
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialIcon
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={22}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity className="self-end mb-6">
            <Text className="text-blue-500 text-sm font-semibold">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            className="bg-blue-500 py-4 rounded-xl items-center mb-4 shadow-lg"
            onPress={handleLogin}
            activeOpacity={0.8}>
            <Text className="text-white text-lg font-bold">Sign In</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-400 text-sm">OR</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Social Login Buttons */}
          <View className="flex-row justify-center gap-4 mb-8">
            <TouchableOpacity className="w-14 h-14 bg-gray-100 rounded-xl items-center justify-center">
              <Icon name="google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity className="w-14 h-14 bg-gray-100 rounded-xl items-center justify-center">
              <Icon name="apple" size={26} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity className="w-14 h-14 bg-gray-100 rounded-xl items-center justify-center">
              <Icon name="facebook" size={24} color="#1877F2" />
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View className="flex-row justify-center">
            <Text className="text-gray-500 text-base">
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 text-base font-bold">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

