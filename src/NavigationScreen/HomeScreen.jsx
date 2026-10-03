import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const TopTab = createMaterialTopTabNavigator()

// Tab 1: Posts / Feed
const FeedTab = ({ navigation }) => (
  <View style={styles.tabContainer}>
    <Text style={styles.emoji}>📰</Text>
    <Text style={styles.tabTitle}>Feed Screen</Text>
    <Text style={styles.tabSubtitle}>Check out the latest updates and posts here!</Text>
    <TouchableOpacity
      style={styles.btn}
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

// Tab 2: Trending / Popular
const TrendingTab = () => (
  <View style={styles.tabContainer}>
    <Text style={styles.emoji}>🔥</Text>
    <Text style={styles.tabTitle}>Trending Screen</Text>
    <Text style={styles.tabSubtitle}>See what is popular right now!</Text>
  </View>
)

// Tab 3: Notifications / Alerts
const NotificationsTab = () => (
  <View style={styles.tabContainer}>
    <Text style={styles.emoji}>🔔</Text>
    <Text style={styles.tabTitle}>Notifications Screen</Text>
    <Text style={styles.tabSubtitle}>All your recent alerts and activity.</Text>
  </View>
)

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search-outline" size={22} color="#0F172A" />
        </TouchableOpacity>
      </View>

      <TopTab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#64748B',
          tabBarIndicatorStyle: {
            backgroundColor: '#2563EB',
            height: 3,
            borderRadius: 2,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '700',
            textTransform: 'capitalize',
          },
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
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
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },

  searchIcon: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#F8FAFC',
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
    marginBottom: 20,
  },

  btn: {
    backgroundColor: '#c20e71',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },

  btnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
})
