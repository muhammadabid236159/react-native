import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const DialogBox = () => {
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.openBtn} onPress={() => setVisible(true)}>
        <Text style={styles.btnText}>Open Dialog</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.dialog}>

            <Text style={styles.title}>Dialog Box</Text>
            <Text style={styles.message}>Yeh ek simple dialog box hai.</Text>

            <TouchableOpacity style={styles.closeBtn} onPress={() => setVisible(false)}>
              <Text style={styles.btnText}>Close</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openBtn: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dialog: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    width: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  closeBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
})

export default DialogBox
