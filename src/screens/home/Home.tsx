import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createThemedStyles, ThemeSwitcher, useTheme } from '../../theme/ThemeProvider'
import Container from '../../components/shared/Container';

export default function Home({navigation}) {
    const {isDark,toogleTheme} = useTheme();

  console.log(123,isDark,styles,);

  const ST = createThemedStyles(styles);

  return (
    <Container>
        <View style={{borderWidth:1, borderColor:"blue"}}>
        <Pressable onPress={toogleTheme}>
            <Text>Switch THeme</Text>
        </Pressable>
        <ThemeSwitcher />
        <Text onPress={() => navigation.navigate('Setting',{
          screen:"Setting",
          params:{}
        })}>Profile Settings</Text>
        <Text style={[ST.container,ST.paragraph]}>Home Page 1</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>

        </View>

    </Container>
  )
}

const styles = StyleSheet.create({
    container:{
      minHeight: 200,
      backgroundColor:"gray",
    },
    container_dark:{
      backgroundColor:"yellow",
    },
    hero:{
      padding: 20
    },
    paragraph:{
      fontSize: 20,
      padding: 5,
      fontWeight: 700,
      color:"black",
    },
    paragraph_dark:{
      color:"blue",
    },
   
})