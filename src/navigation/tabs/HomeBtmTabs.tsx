import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotificationScreen from '../../screens/home/Notification/NotificationScreen';
import ChatRoomScreen from '../../screens/home/ChatRoom/ChatRoomScreen';
import PostsScreen from '../../screens/home/PostsScreen';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation.type';

export type HomeTabParamList = {
  PostsScreen: {userId: number};
  NotificationScreen: undefined;
  ChatRoomScreen: undefined;
};


const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeBtmTabs() {
   // ✅ Get Params Passed from Root Navigation
   const route = useRoute<RouteProp<RootStackParamList, "HomeScreen">>();
   const userId = route.params?.userId; // ✅ Get userId if passed

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="PostsScreen" 
        component={PostsScreen} 
        initialParams={{userId}} 
      />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
    </Tab.Navigator>
  )
}

