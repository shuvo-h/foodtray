import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation.type';

type TProps = NativeStackScreenProps<RootStackParamList, "ProfileScreen">;
export default function ProfileScreen({route}:TProps) {
    const { profileId, email } = route.params;

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Text>Profile ID: {profileId}</Text>
      <Text>Email: {email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})