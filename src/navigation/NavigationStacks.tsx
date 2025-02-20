import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/PostsScreen';
import Header from '../components/shared/Header';
import ThemeProvider from '../theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { PublicScreenStacks } from './staks/PublicStacks';
import { RootStackParamList } from './navigation.type';
import { PrivateScreenStacks } from './staks/PrivateStacks';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function NavigationStacks() {
    
    const publicStacks = [
        ...PublicScreenStacks,
    ]
  return (
        <ThemeProvider>
            <SafeAreaView  style={[ST.safeArea]}>
                <Stack.Navigator initialRouteName='LandingScreen'>
                    {/* <Stack.Screen 
                        name='Home'
                        component={Home}
                        options={{
                            title:"Home",
                            headerShown: true,
                            header:()=><Header title='Home Page' />
                        }}
                    /> */}
                    {/* <Stack.Screen 
                        name='Setting'
                        component={TabNavigatorSetting}
                    /> */}
                    {
                        publicStacks.map(({component,name,options},idx)=><Stack.Screen 
                            name={name}
                            component={component}
                            options={options}    
                            key={idx}
                        />)
                    }

                    {
                        PrivateScreenStacks.map(({component,name,options},idx)=><Stack.Screen 
                            name={name}
                            component={component}
                            options={options}    
                            key={idx}
                        />)
                    }
                    
                </Stack.Navigator>
            </SafeAreaView>
        </ThemeProvider>
  )
}



const ST = StyleSheet.create({
    safeArea:{
        flex: 1, // makes sure SafeAreaView takes full screen
    },
})