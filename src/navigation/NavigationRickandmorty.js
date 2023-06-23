import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Character from '../screens/Character'
import Rickandmorty from '../screens/Rickandmorty'

export default function NavigationRickandmorty() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName='Rickandmorty'>
            <Stack.Screen name='Rickandmorty' component={Rickandmorty} options={{ headerShown: false }} />
            <Stack.Screen name='Character' component={Character} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}