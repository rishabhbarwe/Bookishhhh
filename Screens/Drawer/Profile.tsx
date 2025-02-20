import { View, Text } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }}>
      <Text style={{
        fontSize : 22,
        fontWeight : '900'
      }}>Profile</Text>
    </View>
  )
}

export default Profile