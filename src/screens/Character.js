import { View, Text } from 'react-native'
import React from 'react'
import CharacterHeader from '../components/CharacterHeader';
import { ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CharacterInfo from '../components/CharacterInfo';
import CharacterEpisodes from '../components/CharacterEpisodes';

export default function Character({ route }) {

    const { character } = route.params;

    return (
        <SafeAreaView>
            <ImageBackground source={require('../assets/back.jpg')} style={styles.container} resizeMode='stretch' >
                <CharacterHeader name={character.name} image={character.image} />
                <CharacterInfo character={character} />
                <CharacterEpisodes episode={character.episode} />
            </ImageBackground>
        </SafeAreaView>
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
        color: 'white'
    },
    portal: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 170,
        width: 170
    },
    image: {
        alignSelf: 'center',
        height: 120,
        width: 120,
        borderRadius: 100,

    },
})