import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'

export default function Favorites() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Favorites</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});