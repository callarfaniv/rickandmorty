import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from 'react'
import UserData from '../components/auth/UserData';
import LoginForm from '../components/auth/LoginForm';
import AppContext from '../context/AppContext';

export default function Account() {

    const { state } = useContext(AppContext)

    return (
        <SafeAreaView style={styles.container} >
            {state ? <UserData /> : <LoginForm />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: 'black'
    }
});