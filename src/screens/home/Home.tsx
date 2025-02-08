import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemeSwitcher, useTheme } from '../../theme/ThemeProvider'
import Container from '../../components/shared/Container';

export default function Home() {

    const {isDark,toogleTheme} = useTheme();

  return (
    <Container>
        <View style={{borderWidth:1, borderColor:"blue"}}>
        <Pressable onPress={toogleTheme}>
            <Text>Switch THeme</Text>
        </Pressable>
        <ThemeSwitcher />
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page End</Text>

        </View>

    </Container>
  )
}

const styles = StyleSheet.create({
    
})