import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Useeffecthookpart2 from './Useeffecthookpart2';

const Useeffecthookpart3 = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log('show state changed:', show);
  }, [show]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        useEffect Hook Part 3
      </Text>

      <TouchableOpacity
        style={{ backgroundColor: show ? 'red' : 'green', padding: 15, borderRadius: 8 }}
        onPress={() => setShow(!show)}>
        <Text style={{ color: 'white', fontSize: 16 }}>
          {show ? 'Hide Component' : 'Show Component'}
        </Text>
      </TouchableOpacity>
      {show ? <Useeffecthookpart2/> : null }
      
    </View>
  )
}

export default Useeffecthookpart3;