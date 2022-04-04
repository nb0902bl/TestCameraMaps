import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccessCamera from '../AccessCamera/AccessCamera'
import HomeScreen from '../HomeScreen/HomeScreen'
import AccessMap from '../Maps/AccessMap'


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Camera' component={AccessCamera}/>   
        <Stack.Screen name='MapsTest' component={AccessMap}/>   
             
    </Stack.Navigator>
  )
}

export default Navigation