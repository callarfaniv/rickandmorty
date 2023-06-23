import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function RickandmortyCard(props) {

    const { character } = props
    const navigation = useNavigation()

    const goToCharacter = () => {
        navigation.navigate('Character', {
            character: character,
        });
    }

    return (
        <TouchableWithoutFeedback onPress={goToCharacter}>
            <View style={styles.card} >
                <View style={styles.marginCard}>
                    <View style={styles.colorCard}>
                        <Text style={styles.number}>#{`${character.id}`.padStart(3, 0)}</Text>
                        <View style={styles.containerText}>
                            <Text style={styles.name} numberOfLines={3}>{character.name}</Text>
                        </View>
                        <Image style={styles.image} source={{ uri: character.image }} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flexGrow: 1,
        padding: 16,
        height: 130,
        padding: 5
    },
    marginCard: {
        flex: 1,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#97ce4c',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
    },
    colorCard: {
        flex: 1,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#62a4ab',
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    },
    containerText: {
        width: 90,
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 75,
        height: 75,
        bottom: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black'
    },
    number: {
        position: 'absolute',
        right: 10,
        color: '#fff',
        fontSize: 11
    }
})