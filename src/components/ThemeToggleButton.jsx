import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useCounterStore } from '../store/useCounterStore';

const ThemeToggleButton = ({ style }) => {
  const { isDarkMode, toggleTheme } = useCounterStore();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF',
          borderColor: isDarkMode ? '#334155' : '#E2E8F0',
        },
        style,
      ]}
      onPress={toggleTheme}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.iconCircle,
          { backgroundColor: isDarkMode ? '#334155' : '#F1F5F9' },
        ]}
      >
        <Text style={styles.icon}>{isDarkMode ? '☀️' : '🌙'}</Text>
      </View>
      <Text
        style={[
          styles.text,
          { color: isDarkMode ? '#F8FAFC' : '#1E293B' },
        ]}
      >
        {isDarkMode ? 'Light' : 'Dark'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingLeft: 6,
    paddingRight: 14,
    borderRadius: 30,
    borderWidth: 1.5,
    gap: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 14,
  },
  text: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default ThemeToggleButton;
