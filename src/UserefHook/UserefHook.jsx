import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'

const UserefHook = () => {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
    inputRef.current.setNativeProps({ style: { backgroundColor: 'yellow' } })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        useRef Hook
      </Text>

      <TextInput
        ref={inputRef}
        placeholder="Type something..."
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, width: 250, borderRadius: 8, marginBottom: 20 }}
      />

      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 15, borderRadius: 8 }}
        onPress={focusInput}>
        <Text style={{ color: 'white', fontSize: 16 }}>Focus Input</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserefHook

