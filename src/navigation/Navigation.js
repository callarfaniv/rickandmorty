import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Rickandmorty from '../screens/Rickandmorty'
import NavigationAccount from './NavigationAccount'
import NavigationFavorites from './NavigationFavorites'
import NavigationRickandmorty from './NavigationRickandmorty';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Navigation() {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Account'
                component={NavigationAccount}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: () => (
                        <FontAwesome5 name='user' color="#000" size={20} />
                    )
                }}
            />
            <Tab.Screen
                name='Rickandmorty'
                component={NavigationRickandmorty}
                options={{
                    tabBarLabel: 'Rick and Morty',
                    tabBarIcon: renderIconRM
                }}
            />
            <Tab.Screen
                name='Favorites'
                component={NavigationFavorites}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: () => (
                        <FontAwesome5 name='star' color="#000" size={20} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const renderIconRM = () => {
    return (
        <Image
            source={require('../assets/icon.png')}
            style={{ width: 30, height: 30, }}
        />
    )
}