import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'
            contentContainerStyle={[ST.scrollViewContent]}
        >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
                {children}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const ST = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1
    }
})