import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Modal,
  TextInput,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { useCounterStore } from '../store/useCounterStore'
import ThemeToggleButton from '../components/ThemeToggleButton'
import { getCurrentUser, signOutUser } from '../services/auth'
import { getUsers, updateUser } from '../database/firestorecrud'

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useCounterStore()
  const currentUser = getCurrentUser()

  // Real Dynamic State from Firestore
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  // Edit User Modal States
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [updatedName, setUpdatedName] = useState('')
  const [updating, setUpdating] = useState(false)

  // Screen load hone par automatically Firestore se data mangwana
  useEffect(() => {
    fetchUsersList()
  }, [])

  // Dynamic fetch function
  const fetchUsersList = async () => {
    setLoading(true)
    const res = await getUsers()
    setLoading(false)

    if (res.success) {
      setUsers(res.data || [])
    } else {
      Alert.alert('Error', res.error || 'Failed to load users from Firestore')
    }
  }

  // 1. Edit button dabane par modal kholna
  const handleOpenEdit = (item) => {
    setEditingUser(item)
    setUpdatedName(item.name || '')
    setEditModalVisible(true)
  }

  // 2. Naya data Firestore mein update karna
  const handleSaveUpdate = async () => {
    if (!updatedName.trim()) {
      Alert.alert('Error', 'Name cannot be empty!')
      return
    }

    setUpdating(true)
    const res = await updateUser(editingUser.id, { name: updatedName.trim() })
    setUpdating(false)

    if (res.success) {
      setEditModalVisible(false)
      setEditingUser(null)
      fetchUsersList() // List ko dobara refresh kiya taake screen par update ho jaye
      Alert.alert('Success', 'User updated successfully!')
    } else {
      Alert.alert('Error', res.error || 'Failed to update user')
    }
  }

  // Logout handler
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await signOutUser()
            navigation.replace('Login')
          },
        },
      ]
    )
  }

  // Theme colors
  const theme = {
    bg: isDarkMode ? '#0F172A' : '#F8FAFC',
    cardBg: isDarkMode ? '#1E293B' : '#FFFFFF',
    text: isDarkMode ? '#F8FAFC' : '#0F172A',
    subtitle: isDarkMode ? '#94A3B8' : '#64748B',
    cardBorder: isDarkMode ? '#334155' : '#E2E8F0',
    primary: isDarkMode ? '#3B82F6' : '#2563EB',
    headerBg: isDarkMode ? '#1E293B' : '#FFFFFF',
  }

  return (
    <SafeAreaView edges={['top']} style={[styles.safeArea, { backgroundColor: theme.bg }]}>
      {/* 1. Header */}
      <View style={[styles.header, { backgroundColor: theme.headerBg, borderBottomColor: theme.cardBorder }]}>
        <View style={styles.headerLeft}>
          <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
            <Text style={styles.avatarText}>
              {currentUser?.email ? currentUser.email.charAt(0).toUpperCase() : 'U'}
            </Text>
          </View>
          <View>
            <Text style={[styles.welcomeText, { color: theme.subtitle }]}>Welcome Back</Text>
            <Text style={[styles.userName, { color: theme.text }]} numberOfLines={1}>
              {currentUser?.email ? currentUser.email.split('@')[0] : 'User'} 👋
            </Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <ThemeToggleButton />
          <TouchableOpacity
            style={[styles.iconButton, { backgroundColor: isDarkMode ? '#334155' : '#F1F5F9' }]}
            onPress={handleLogout}
          >
            <Icon name="log-out-outline" size={20} color="#EF4444" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. Dynamic Banner Card */}
        <View style={[styles.bannerCard, { backgroundColor: theme.primary }]}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTag}>FIREBASE FIRESTORE ACTIVE</Text>
            <Text style={styles.bannerTitle}>Realtime Cloud Database</Text>
            <Text style={styles.bannerEmail} numberOfLines={1}>
              Active Session: {currentUser?.email || 'Guest User'}
            </Text>
          </View>
          <Icon name="cloud-done-outline" size={68} color="rgba(255, 255, 255, 0.2)" style={styles.bannerIcon} />
        </View>

        {/* 3. Real Dynamic Stats Row */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Database Overview</Text>
        <View style={styles.statsRow}>
          {/* Dynamic User Count */}
          <View style={[styles.statCard, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
            <View style={[styles.statIconWrap, { backgroundColor: 'rgba(37, 99, 235, 0.1)' }]}>
              <Icon name="people" size={22} color="#2563EB" />
            </View>
            <Text style={[styles.statValue, { color: theme.text }]}>{users.length}</Text>
            <Text style={[styles.statTitle, { color: theme.subtitle }]}>Total Users</Text>
          </View>

          {/* Dynamic Auth Status */}
          <View style={[styles.statCard, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
            <View style={[styles.statIconWrap, { backgroundColor: 'rgba(22, 163, 74, 0.1)' }]}>
              <Icon name="shield-checkmark" size={22} color="#16A34A" />
            </View>
            <Text style={[styles.statValue, { color: '#16A34A', fontSize: 16 }]}>
              {currentUser?.emailVerified ? 'Verified' : 'Active'}
            </Text>
            <Text style={[styles.statTitle, { color: theme.subtitle }]}>Auth Status</Text>
          </View>

          {/* Realtime Status */}
          <View style={[styles.statCard, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
            <View style={[styles.statIconWrap, { backgroundColor: 'rgba(245, 158, 11, 0.1)' }]}>
              <Icon name="sync" size={20} color="#F59E0B" />
            </View>
            <Text style={[styles.statValue, { color: theme.text, fontSize: 16 }]}>Online</Text>
            <Text style={[styles.statTitle, { color: theme.subtitle }]}>Firestore</Text>
          </View>
        </View>

        {/* 4. Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: theme.primary }]}
            onPress={fetchUsersList}
            activeOpacity={0.8}
          >
            <Icon name="refresh-outline" size={18} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.actionBtnText}>Refresh Data</Text>
          </TouchableOpacity>
        </View>

        {/* 5. Real Registered Users List */}
        <View style={styles.listHeaderRow}>
          <Text style={[styles.sectionTitle, { color: theme.text, marginBottom: 0 }]}>
            Registered Users ({users.length})
          </Text>
          <TouchableOpacity onPress={fetchUsersList}>
            <Text style={[styles.refreshText, { color: theme.primary }]}>Reload</Text>
          </TouchableOpacity>
        </View>

        {/* Loading Spinner */}
        {loading ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color={theme.primary} />
            <Text style={[styles.loadingText, { color: theme.subtitle }]}>
              Loading users from Firestore...
            </Text>
          </View>
        ) : users.length === 0 ? (
          <View style={[styles.emptyCard, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
            <Icon name="people-outline" size={48} color={theme.subtitle} />
            <Text style={[styles.emptyTitle, { color: theme.text }]}>No Registered Users Found</Text>
            <Text style={[styles.emptySubtitle, { color: theme.subtitle }]}>
              Naya account register karein ya refresh button press karein.
            </Text>
            <TouchableOpacity
              style={[styles.smallBtn, { backgroundColor: theme.primary }]}
              onPress={fetchUsersList}
            >
              <Text style={styles.smallBtnText}>Fetch Again</Text>
            </TouchableOpacity>
          </View>
        ) : (
          users.map((item, index) => {
            const avatarColors = ['#2563EB', '#16A34A', '#8B5CF6', '#D97706', '#EC4899']
            const bgColor = avatarColors[index % avatarColors.length]
            const initial = item.name
              ? item.name.charAt(0).toUpperCase()
              : item.email
              ? item.email.charAt(0).toUpperCase()
              : 'U'

            return (
              <View
                key={item.id || index.toString()}
                style={[styles.userCard, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}
              >
                {/* Avatar with initial letter */}
                <View style={[styles.userAvatar, { backgroundColor: bgColor }]}>
                  <Text style={styles.userAvatarText}>{initial}</Text>
                </View>

                {/* User Details */}
                <View style={styles.userDetails}>
                  <Text style={[styles.userNameText, { color: theme.text }]} numberOfLines={1}>
                    {item.name || 'Unnamed User'}
                  </Text>
                  <Text style={[styles.userEmailText, { color: theme.subtitle }]} numberOfLines={1}>
                    {item.email || 'No email provided'}
                  </Text>
                  <Text style={[styles.userIdText, { color: theme.subtitle }]} numberOfLines={1}>
                    ID: {item.id}
                  </Text>
                </View>
                {/* Edit / Update Button */}
                <TouchableOpacity
                  style={[styles.editBtn, { backgroundColor: isDarkMode ? '#334155' : '#EFF6FF' }]}
                  onPress={() => handleOpenEdit(item)}
                  activeOpacity={0.7}
                >
                  <Icon name="pencil" size={13} color={theme.primary} style={{ marginRight: 4 }} />
                  <Text style={[styles.editBtnText, { color: theme.primary }]}>Edit</Text>
                </TouchableOpacity>
              </View>
            )
          })
        )}
      </ScrollView>

      {/* 6. Edit User Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
            <Text style={[styles.modalTitle, { color: theme.text }]}>Update User</Text>
            <Text style={[styles.modalSubtitle, { color: theme.subtitle }]} numberOfLines={1}>
              {editingUser?.email || 'Firestore Record'}
            </Text>

            <Text style={[styles.inputLabel, { color: theme.text }]}>New Name</Text>
            <TextInput
              style={[
                styles.modalInput,
                {
                  backgroundColor: isDarkMode ? '#0F172A' : '#F8FAFC',
                  color: theme.text,
                  borderColor: theme.cardBorder,
                },
              ]}
              placeholder="Enter new name"
              placeholderTextColor={theme.subtitle}
              value={updatedName}
              onChangeText={setUpdatedName}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalCancelBtn, { borderColor: theme.cardBorder }]}
                onPress={() => setEditModalVisible(false)}
                disabled={updating}
              >
                <Text style={[styles.modalCancelText, { color: theme.subtitle }]}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalSaveBtn, { backgroundColor: theme.primary }]}
                onPress={handleSaveUpdate}
                disabled={updating}
              >
                {updating ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <Text style={styles.modalSaveText}>Save</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  welcomeText: {
    fontSize: 12,
    fontWeight: '500',
  },

  userName: {
    fontSize: 17,
    fontWeight: '700',
    maxWidth: 160,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  bannerCard: {
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    position: 'relative',
    overflow: 'hidden',
    elevation: 3,
  },

  bannerContent: {
    zIndex: 1,
  },

  bannerTag: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 4,
  },

  bannerEmail: {
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: 13,
    fontWeight: '500',
  },

  bannerIcon: {
    position: 'absolute',
    right: -10,
    bottom: -10,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 16,
  },

  statCard: {
    flex: 1,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    alignItems: 'center',
    elevation: 1,
  },

  statIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  statValue: {
    fontSize: 17,
    fontWeight: '700',
  },

  statTitle: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },

  actionRow: {
    marginBottom: 20,
  },

  actionBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    borderRadius: 12,
    elevation: 2,
  },

  actionBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  listHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  refreshText: {
    fontSize: 14,
    fontWeight: '700',
  },

  loadingBox: {
    paddingVertical: 40,
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 10,
    fontSize: 14,
  },

  emptyCard: {
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
  },

  emptySubtitle: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 14,
  },

  smallBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  smallBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },

  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 10,
    elevation: 1,
  },

  userAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  userAvatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  userDetails: {
    flex: 1,
  },

  userNameText: {
    fontSize: 15,
    fontWeight: '700',
  },

  userEmailText: {
    fontSize: 13,
    marginTop: 2,
  },

  userIdText: {
    fontSize: 10,
    marginTop: 3,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },

  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  editBtnText: {
    fontSize: 12,
    fontWeight: '700',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  modalCard: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 18,
    padding: 22,
    borderWidth: 1,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 19,
    fontWeight: 'bold',
  },

  modalSubtitle: {
    fontSize: 12,
    marginTop: 2,
    marginBottom: 16,
  },

  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
  },

  modalInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 20,
  },

  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },

  modalCancelBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },

  modalCancelText: {
    fontSize: 14,
    fontWeight: '600',
  },

  modalSaveBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalSaveText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
})
