import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const Hideshow = () => {
    const [show,setShow]=useState(false);
    const [conformshow,setConformShow]=useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Create your account to get started
        </Text>

        {/* Password */}
        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry={!show}
          />

          <Pressable style={styles.eyeButton} onPress={()=>setShow(!show)}>
            <Text style={styles.eye}>
                {show ? "👁":  "🙈"}
            </Text>
          </Pressable>
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>Confirm Password</Text>

        <View style={styles.passwordBox}>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#999"
            secureTextEntry={!conformshow}
          />

          <Pressable style={styles.eyeButton} onPress={()=>setConformShow(!conformshow)}>
            <Text style={styles.eye}>
                {conformshow ? "👁" : "🙈"}
            </Text>
          </Pressable>
        </View>

        {/* Button */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
        <TouchableOpacity style={styles.button} >
            <Text>TO</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Hideshow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
    marginTop: 15,
  },

  passwordBox: {
    height: 55,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: '#F8FAFC',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
  },

  eyeButton: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  eye: {
    fontSize: 20,
  },

  button: {
    height: 55,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});