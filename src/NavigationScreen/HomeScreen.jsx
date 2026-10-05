import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { useCounterStore } from '../store/useCounterStore'
import ThemeToggleButton from '../components/ThemeToggleButton'

const TopTab = createMaterialTopTabNavigator()

// Tab 1: Posts / Feed
const FeedTab = ({ navigation }) => {
  const { isDarkMode } = useCounterStore()
  return (
    <View style={[styles.tabContainer, { backgroundColor: isDarkMode ? '#0F172A' : '#F8FAFC' }]}>
      <Text style={styles.emoji}>📰</Text>
      <Text style={[styles.tabTitle, { color: isDarkMode ? '#F8FAFC' : '#0F172A' }]}>Feed Screen</Text>
      <Text style={[styles.tabSubtitle, { color: isDarkMode ? '#94A3B8' : '#64748B' }]}>Check out the latest updates and posts here!</Text>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: isDarkMode ? '#3B82F6' : '#2563EB' }]}
        onPress={() => navigation.navigate('About', {
          name: 'Muhammad Abid',
          version: '1.0.0',
          framework: 'React Native',
          message: 'Hello from Feed Tab!',
        })}
        activeOpacity={0.8}
      >
        <Text style={styles.btnText}>Go to About →</Text>
      </TouchableOpacity>
    </View>
  )
}

// Tab 2: Trending / Popular
const TrendingTab = () => {
  const { isDarkMode } = useCounterStore()
  return (
    <View style={[styles.tabContainer, { backgroundColor: isDarkMode ? '#0F172A' : '#F8FAFC' }]}>
      <Text style={styles.emoji}>🔥</Text>
      <Text style={[styles.tabTitle, { color: isDarkMode ? '#F8FAFC' : '#0F172A' }]}>Trending Screen</Text>
      <Text style={[styles.tabSubtitle, { color: isDarkMode ? '#94A3B8' : '#64748B' }]}>See what is popular right now!</Text>
    </View>
  )
}

// Tab 3: Notifications / Alerts
const NotificationsTab = () => {
  const { isDarkMode } = useCounterStore()
  return (
    <View style={[styles.tabContainer, { backgroundColor: isDarkMode ? '#0F172A' : '#F8FAFC' }]}>
      <Text style={styles.emoji}>🔔</Text>
      <Text style={[styles.tabTitle, { color: isDarkMode ? '#F8FAFC' : '#0F172A' }]}>Notifications Screen</Text>
      <Text style={[styles.tabSubtitle, { color: isDarkMode ? '#94A3B8' : '#64748B' }]}>All your recent alerts and activity.</Text>
    </View>
  )
}

const HomeScreen = () => {
  const { isDarkMode } = useCounterStore()

  return (
    <SafeAreaView edges={['top']} style={[styles.safeArea, { backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF' }]}>
      <View style={[styles.header, { backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF', borderBottomColor: isDarkMode ? '#334155' : '#F1F5F9' }]}>
        <Text style={[styles.headerTitle, { color: isDarkMode ? '#F8FAFC' : '#0F172A' }]}>Home</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <ThemeToggleButton />
          <TouchableOpacity style={[styles.searchIcon, { backgroundColor: isDarkMode ? '#334155' : '#F1F5F9', borderColor: isDarkMode ? '#475569' : '#E2E8F0' }]}>
            <Icon name="search-outline" size={20} color={isDarkMode ? '#F8FAFC' : '#0F172A'} />
          </TouchableOpacity>
        </View>
      </View>

      <TopTab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: isDarkMode ? '#60A5FA' : '#2563EB',
          tabBarInactiveTintColor: isDarkMode ? '#94A3B8' : '#64748B',
          tabBarIndicatorStyle: {
            backgroundColor: isDarkMode ? '#60A5FA' : '#2563EB',
            height: 3,
            borderRadius: 2,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '700',
            textTransform: 'capitalize',
          },
          tabBarStyle: {
            backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF',
            elevation: 2,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 3,
          },
        }}
      >
        <TopTab.Screen
          name="Feed"
          component={FeedTab}
          options={{ tabBarLabel: 'Feed' }}
        />
        <TopTab.Screen
          name="Trending"
          component={TrendingTab}
          options={{ tabBarLabel: 'Trending' }}
        />
        <TopTab.Screen
          name="Notifications"
          component={NotificationsTab}
          options={{ tabBarLabel: 'Alerts' }}
        />
      </TopTab.Navigator>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
  },

  searchIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 24,
  },

  emoji: {
    fontSize: 54,
    marginBottom: 16,
  },

  tabTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
  },

  tabSubtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    maxWidth: 280,
    marginBottom: 24,
    lineHeight: 22,
  },

  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 14,
    elevation: 3,
    shadowColor: '#2563EB',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  btnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
})
