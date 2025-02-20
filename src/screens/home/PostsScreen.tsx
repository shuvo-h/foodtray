import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createThemedStyles, ThemeSwitcher, useTheme } from '../../theme/ThemeProvider'
import Container from '../../components/shared/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/navigation.type';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../../navigation/tabs/HomeBtmTabs';

// type TProps = NativeStackScreenProps<RootStackParamList, "HomeScreen">;
export type TProps = BottomTabScreenProps<HomeTabParamList, "PostsScreen">;

export default function PostsScreen({navigation,route}:TProps) {
    const {isDark,toogleTheme} = useTheme();
    const { userId } = route.params;
  console.log(123,isDark,styles,);

  const ST = createThemedStyles(styles);

  return (
    <Container>
        <View style={{borderWidth:1, borderColor:"blue"}}>
        <Pressable onPress={toogleTheme}>
            <Text>Switch THeme</Text>
        </Pressable>
        <ThemeSwitcher />
        {/* <Text onPress={() => navigation.navigate('Setting',{
          screen:"Setting",
          params:{}
        })}>Profile Settings</Text> */}
        <Text style={[ST.container,ST.paragraph]}>Home Page 1</Text>
        <Text style={{fontSize:40, color: isDark? "red":"green"}}>Home Page</Text>
        <Text>Welcome, User_ID = {userId}!</Text>
        {/* <Button title="Go to Profile" onPress={() => navigation.navigate("ProfileScreen", { profileId: 456, email: "user@example.com" })} /> */}
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