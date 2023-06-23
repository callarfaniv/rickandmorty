import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { ImageBackground } from 'react-native'

export default function CharacterHeader(props) {

    const { name, image } = props

    return (
        <>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
            <Text style={styles.name} >{name}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: 15,
        height: '100%'
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