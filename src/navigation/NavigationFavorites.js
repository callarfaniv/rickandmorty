import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../screens/Favorites'
import Character from '../screens/Character'

export default function NavigationFavorites() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='Favorites' component={Favorites} options={{ title: 'Favorites' }} />
            <Stack.Screen name='Character' component={Character} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}