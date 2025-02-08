import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationStacks from './NavigationStacks'

export default function RootNavigator() {
  return (
    <NavigationContainer>
        <NavigationStacks />
    </NavigationContainer>
  )
}