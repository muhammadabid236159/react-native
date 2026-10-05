import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useCounterStore } from '../store/useCounterStore'
import ThemeToggleButton from '../components/ThemeToggleButton'

const AboutScreen = ({ navigation, route }) => {
  const { isDarkMode } = useCounterStore()

  const { 
    name = 'Muhammad Abid', 
    version = '1.0.0', 
    framework = 'React Native', 
    message = 'Welcome to About Screen' 
  } = route?.params || {}

  const theme = {
    bg: isDarkMode ? '#0F172A' : '#F8FAFC',
    cardBg: isDarkMode ? '#1E293B' : '#FFFFFF',
    cardBorder: isDarkMode ? '#334155' : '#E2E8F0',
    text: isDarkMode ? '#F8FAFC' : '#0F172A',
    label: isDarkMode ? '#94A3B8' : '#64748B',
    value: isDarkMode ? '#60A5FA' : '#2563EB',
    btnBg: isDarkMode ? '#2563EB' : '#0F172A',
  }

  return (
    <SafeAreaView edges={['top']} style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Top Bar with Theme Toggle */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.backIconBtn, { backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF', borderColor: theme.cardBorder }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.backIconText, { color: theme.text }]}>← Back</Text>
        </TouchableOpacity>
        <ThemeToggleButton />
      </View>

      <View style={styles.hero}>
        <Text style={styles.emoji}>ℹ️</Text>
        <Text style={[styles.title, { color: theme.text }]}>About Screen</Text>
        <Text style={[styles.message, { color: theme.value }]}>{message}</Text>
      </View>

      <View style={[styles.infoCard, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
        <Text style={[styles.infoLabel, { color: theme.label }]}>Developer</Text>
        <Text style={[styles.infoValue, { color: theme.value }]}>{name}</Text>
      </View>

      <View style={[styles.infoCard, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
        <Text style={[styles.infoLabel, { color: theme.label }]}>Version</Text>
        <Text style={[styles.infoValue, { color: theme.value }]}>{version}</Text>
      </View>

      <View style={[styles.infoCard, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
        <Text style={[styles.infoLabel, { color: theme.label }]}>Framework</Text>
        <Text style={[styles.infoValue, { color: theme.value }]}>{framework}</Text>
      </View>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: theme.btnBg }]}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={styles.btnText}>← Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  backIconBtn: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
  },
  backIconText: {
    fontSize: 14,
    fontWeight: '700',
  },
  hero: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25,
  },
  emoji: {
    fontSize: 54,
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 6,
  },
  message: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  infoCard: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  infoLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '700',
  },
  btn: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 14,
    elevation: 3,
    shadowColor: '#2563EB',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
})

export default AboutScreen
