import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useCounterStore } from '../store/useCounterStore';

const ZustandCounter = () => {
  // 🌟 Zustand store se state aur functions access kar rahe hain
  const {
    count,
    userName,
    isDarkMode,
    increment,
    decrement,
    reset,
    setUserName,
    toggleTheme,
  } = useCounterStore();

  // Dynamic Theme Colors
  const theme = {
    bg: isDarkMode ? '#0f172a' : '#f8fafc',
    cardBg: isDarkMode ? '#1e293b' : '#ffffff',
    text: isDarkMode ? '#f8fafc' : '#0f172a',
    subText: isDarkMode ? '#94a3b8' : '#64748b',
    border: isDarkMode ? '#334155' : '#e2e8f0',
    inputBg: isDarkMode ? '#0f172a' : '#f1f5f9',
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Header & Theme Toggle Button */}
      <View style={styles.headerRow}>
        <Text style={[styles.heading, { color: theme.text }]}>Zustand Hook</Text>

        <TouchableOpacity
          style={[
            styles.themeButton,
            { backgroundColor: isDarkMode ? '#fbbf24' : '#1e293b' },
          ]}
          onPress={toggleTheme}
          activeOpacity={0.8}
        >
          <Text style={[styles.themeButtonText, { color: isDarkMode ? '#000' : '#fff' }]}>
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* User Card */}
      <View style={[styles.card, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
        <Text style={[styles.label, { color: theme.subText }]}>User Profile</Text>
        <Text style={styles.nameText}>{userName}</Text>

        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.inputBg,
              color: theme.text,
              borderColor: theme.border,
            },
          ]}
          placeholder="Edit name..."
          placeholderTextColor={theme.subText}
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      {/* Counter Card */}
      <View style={[styles.card, { backgroundColor: theme.cardBg, borderColor: theme.border }]}>
        <Text style={[styles.label, { color: theme.subText }]}>Global Counter</Text>
        <Text style={[styles.counterValue, { color: theme.text }]}>{count}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.btn, styles.decrementBtn]} onPress={decrement}>
            <Text style={styles.btnText}>- 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.resetBtn]} onPress={reset}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.incrementBtn]} onPress={increment}>
            <Text style={styles.btnText}>+ 1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  themeButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  themeButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginVertical: 8,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 8,
    fontSize: 15,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    minWidth: 70,
    alignItems: 'center',
  },
  incrementBtn: {
    backgroundColor: '#22c55e',
  },
  decrementBtn: {
    backgroundColor: '#ef4444',
  },
  resetBtn: {
    backgroundColor: '#64748b',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ZustandCounter;
