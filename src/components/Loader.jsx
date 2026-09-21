import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
  const [loading, setLoading] = useState(false)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TouchableOpacity
        style={{ backgroundColor: loading ? 'red' : 'green', padding: 15, borderRadius: 8, marginBottom: 20 }}
        onPress={() => setLoading(!loading)}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {loading ? 'Hide Loader' : 'Show Loader'}
        </Text>
      </TouchableOpacity>

     {loading && (
  <View style={{ alignItems: "center" }}>
    <ActivityIndicator size="large" />
    <Text>Loading...</Text>
  </View>
)}
      
    </View>
  )
}

export default Loader;
