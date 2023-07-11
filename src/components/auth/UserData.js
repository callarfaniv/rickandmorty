import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import { userDetail } from '../../utils/userDb'
import { Button } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import AppContext from '../../context/AppContext';
import { useFocusEffect } from '@react-navigation/native';
import { getFavoriteApi } from '../../api/favorite';


export default function UserData(props) {

    const { state, logout } = useContext(AppContext)
    const [numFav, setNumFav] = useState(0)

    const getNumFav = async () => {
        const response = await getFavoriteApi()
        setNumFav(response.length)

    }

    useFocusEffect(
        useCallback(() => {
            getNumFav()
        }, [])
    )

    return (
        <>
            <ImageBackground
                source={require('../../assets/portal.gif')}
                style={styles.image}
            >
                <Image
                    source={require('../../assets/perfil.jpg')}
                    style={styles.imageProfile}
                />
            </ImageBackground>
            <View style={styles.input} >
                <Text style={styles.text} >User: {state.username}</Text>
            </View>
            <View style={styles.input} >
                <Text style={styles.text} >First name: {state.firstName}</Text>
            </View>
            <View style={styles.input} >
                <Text style={styles.text} >Last name: {state.lastName}</Text>
            </View>
            <View style={styles.input} >
                <Text style={styles.text} >Email: {state.email}</Text>
            </View>
            <View style={styles.input} >
                <Text style={styles.text} >Favoritos: {numFav}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={logout} >
                <Text style={styles.buttonText} >Cerrar sesión</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#62a4ab',
        textAlign: 'center',
        fontSize: 16
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageProfile: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black'
    },
    userIcon: {
        borderRadius: 80,
        backgroundColor: "#f3930b",
        padding: 20,
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#931f05',
        width: 200,
        height: 40,
        alignSelf: 'center',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    input: {
        height: 40,
        marginHorizontal: 12,
        marginTop: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: 'green'
    },
})