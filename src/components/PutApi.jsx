import React, { useState } from 'react'
import {
	Alert,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import axios from 'axios'

const API_URL = 'http://192.168.1.11:3000/users'
const EMPTY_FORM = {
	id: '',
	name: '',
	email: '',
	age: '',
	city: '',
	role: '',
}

const PutApi = () => {
	const [form, setForm] = useState(EMPTY_FORM)
	const [isSaving, setIsSaving] = useState(false)

	const handleChange = (field, value) => {
		setForm(currentForm => ({ ...currentForm, [field]: value }))
	}

	const handleSubmit = async () => {
		const id = form.id.trim()

		if (!id || !form.name.trim() || !form.email.trim()) {
			Alert.alert('Required fields', 'ID, Name aur Email bharna zaroori hai.')
			return
		}

		const user = {
			id,
			name: form.name.trim(),
			email: form.email.trim(),
			age: form.age.trim() ? Number(form.age) : '',
			city: form.city.trim(),
			role: form.role.trim(),
		}

		setIsSaving(true)
		try {
			await axios.put(`${API_URL}/${encodeURIComponent(id)}`, user)
			Alert.alert('Success', 'User update ho gaya!')
			setForm({ ...EMPTY_FORM })
		} catch (error) {
			const message = error.response
				? `Server error ${error.response.status}: ${JSON.stringify(error.response.data)}`
				: error.message
			Alert.alert('Update failed', message)
		} finally {
			setIsSaving(false)
		}
	}

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Update User</Text>
				<Text style={styles.headerSubtitle}>Enter the user ID and updated details</Text>
			</View>

			<ScrollView
				contentContainerStyle={styles.scrollContent}
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}>
				<View style={styles.form}>
					<Text style={styles.label}>User ID *</Text>
					<TextInput
						style={styles.input}
						placeholder="e.g. 9 or k31IPPKi7lA"
						value={form.id}
						onChangeText={value => handleChange('id', value)}
						autoCapitalize="none"
					/>

					<Text style={styles.label}>Name *</Text>
					<TextInput
						style={styles.input}
						placeholder="Full name"
						value={form.name}
            
						onChangeText={value => handleChange('name', value)}
					/>

					<Text style={styles.label}>Email *</Text>
					<TextInput
						style={styles.input}
						placeholder="example@email.com"
						value={form.email}
						onChangeText={value => handleChange('email', value)}
						keyboardType="email-address"
						autoCapitalize="none"
					/>

					<View style={styles.row}>
						<View style={styles.halfField}>
							<Text style={styles.label}>Age</Text>
							<TextInput
								style={styles.input}
								placeholder="Age"
								value={form.age}
								onChangeText={value => handleChange('age', value)}
								keyboardType="numeric"
							/>
						</View>
						<View style={styles.halfField}>
							<Text style={styles.label}>City</Text>
							<TextInput
								style={styles.input}
								placeholder="City"
								value={form.city}
								onChangeText={value => handleChange('city', value)}
							/>
						</View>
					</View>

					<Text style={styles.label}>Role</Text>
					<TextInput
						style={styles.input}
						placeholder="e.g. Admin, User"
						value={form.role}
						onChangeText={value => handleChange('role', value)}
					/>

					<TouchableOpacity
						style={[styles.button, isSaving && styles.buttonDisabled]}
						onPress={handleSubmit}
						disabled={isSaving}
						activeOpacity={0.8}>
						<Text style={styles.buttonText}>{isSaving ? 'Updating...' : 'Update User'}</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#6200ee',
	},
	header: {
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: 28,
	},
	headerTitle: {
		color: '#ffffff',
		fontSize: 26,
		fontWeight: '700',
	},
	headerSubtitle: {
		color: '#eee4ff',
		fontSize: 14,
		marginTop: 5,
	},
	scrollContent: {
		flexGrow: 1,
		backgroundColor: '#f2f2f7',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
	},
	form: {
		backgroundColor: '#ffffff',
		borderRadius: 12,
		padding: 18,
		elevation: 3,
	},
	row: {
		flexDirection: 'row',
		gap: 12,
	},
	halfField: {
		flex: 1,
	},
	label: {
		color: '#444444',
		fontSize: 13,
		fontWeight: '600',
		marginBottom: 6,
	},
	input: {
		backgroundColor: '#fafafa',
		borderColor: '#dddddd',
		borderRadius: 8,
		borderWidth: 1,
		color: '#222222',
		fontSize: 15,
		marginBottom: 14,
		paddingHorizontal: 12,
		paddingVertical: 11,
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#6200ee',
		borderRadius: 8,
		marginTop: 4,
		padding: 14,
	},
	buttonDisabled: {
		opacity: 0.65,
	},
	buttonText: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '700',
	},
})

export default PutApi
