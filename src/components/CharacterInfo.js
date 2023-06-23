import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export default function CharacterInfo(props) {

    const { character } = props

    const statusIcon = (status) => {
        switch (status) {
            case 'Alive':
                return 'heart'
                break;
            case 'Dead':
                return 'skull'
                break;
            default:
                return 'question-circle'
                break;
        }
    }

    const genderIcon = (gender) => {
        switch (gender) {
            case 'Male':
                return 'male'
                break;
            case 'Female':
                return 'female'
                break;
            default:
                return 'genderless'
                break;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.horizontalContainer} >
                <FontAwesome5 style={styles.icon} name={statusIcon(character.status)} size={24} color="white" />
                <Text style={styles.text} >{character.status}</Text>
            </View>
            <View style={styles.horizontalContainer} >
                <FontAwesome5 style={styles.icon} name={"users"} size={24} color="white" />
                <Text style={styles.text} >{character.species}</Text>
            </View>
            <View style={styles.horizontalContainer} >
                <FontAwesome5 style={styles.icon} name={genderIcon(character.gender)} size={24} color="white" />
                <Text style={styles.text} >{character.gender}</Text>
            </View>
            <View style={styles.horizontalContainer} >
                <FontAwesome5 style={styles.icon} name="globe" size={24} color="white" />
                <Text style={styles.text} >{character.origin.name}</Text>
            </View>
            <View style={styles.horizontalContainer} >
                <FontAwesome5 style={styles.icon} name="map-marked" size={24} color="white" />
                <Text style={styles.text} >{character.location.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        marginLeft: 5,
        color: 'white',
        fontWeight: 'bold'
    },
})