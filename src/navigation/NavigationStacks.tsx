import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Header from '../components/shared/Header';
import ThemeProvider from '../theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export default function NavigationStacks() {
  return (
        <ThemeProvider>
            <SafeAreaView  style={[ST.safeArea]}>
                {/* <NavigationContainer> */}
                    <Stack.Navigator>
                        <Stack.Screen 
                            name='Home'
                            component={Home}
                            options={{
                                title:"Home",
                                headerShown: true,
                                header:()=><Header title='Home Page' />
                            }}
                        />
                    </Stack.Navigator>
                {/* </NavigationContainer> */}
            </SafeAreaView>
        </ThemeProvider>
  )
}



const ST = StyleSheet.create({
    safeArea:{
        flex: 1, // makes sure SafeAreaView takes full screen
    },
})