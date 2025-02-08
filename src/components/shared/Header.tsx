import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({title}:{title:string}) {
  return (
    <View style={ST.container}>
      <Text style={ST.title}>{title}</Text>
    </View>
  )
}

const ST = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    title:{
        textAlign:"center",
        fontSize: 20,
        fontWeight: 500,
        paddingVertical: 5,
    }
})