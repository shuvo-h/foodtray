import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';



const ThemeContext = createContext({isDark:false,toogleTheme:()=>{}});


export default function ThemeProvider({children}:{children:React.ReactNode}) {
    const systemTheme = useColorScheme();
    const [isDark,setIsDark] = useState(systemTheme === 'dark')
    const toogleTheme = async() => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        await AsyncStorage.setItem('theme',newTheme ? 'dark':'light')
    };


    // persist theme from AsyncStorage
    useEffect(()=>{
        const loadTheme = async() =>{
            const storedTheme = await AsyncStorage.getItem('theme');
            if (storedTheme !== null) {
                setIsDark(storedTheme === 'dark')
            }
        }
        loadTheme();
    },[])


  return (
    <ThemeContext.Provider value={{isDark,toogleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);

export const ThemeSwitcher = () =>{
    const {isDark,toogleTheme} = useTheme();

    return <Pressable onPress={toogleTheme}>
        <Text>Switch THeme Icon</Text>
    </Pressable>
}








// Add the constraint to ensure T is an object type
type ThemedStyle<T extends Record<string, any>> = {
  [K in keyof T]: T[K] | (T[K] & { [key: string]: any }) & T[K];
};

export function createThemedStyles<T extends Record<string, any>>(styles: T): ThemedStyle<T> {
  const { isDark } = useTheme();

  return Object.keys(styles).reduce((acc, key) => {
    const styleKey = key as keyof T;
    acc[styleKey] = {
      ...styles[styleKey], 
      ...(isDark ? styles[`${String(key)}_dark`] : null), 
    };
    return acc;
  }, {} as ThemedStyle<T>);
}
