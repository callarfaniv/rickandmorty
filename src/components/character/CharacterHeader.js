import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { ImageBackground } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import AppContext from '../../context/AppContext'
import Favorite from './Favorite'

export default function CharacterHeader(props) {

    const { character } = props

    const { state } = useContext(AppContext)

    return (
        <>
            <Image
                source={{ uri: character.image }}
                style={styles.image}
            />
            <View style={styles.horizontal} >
                <Text style={styles.name} >{character.name} </Text>
                {state && <Favorite id={character.id} />}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: 15,
        height: '100%'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    portal: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 170,
        width: 170
    },
    image: {
        alignSelf: 'center',
        height: 150,
        width: 150,
        borderRadius: 100,

    },
})