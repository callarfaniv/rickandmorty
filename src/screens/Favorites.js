import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { getFavoriteApi } from '../api/favorite';
import axios from 'axios'
import RickandmortyList from '../components/RickandmortyList';
import AppContext from '../context/AppContext';


export default function Favorites() {

    const { state } = useContext(AppContext)
    const navigation = useNavigation()
    const [favorites, setFavorites] = useState([])

    const checkFavoritos = async () => {
        const resp = await getFavoriteApi()
        console.log(resp)
    }

    const goToLogin = () => {
        navigation.navigate('Account')
    }

    const getFavorites = async () => {
        const response = await getFavoriteApi()
        if (response.length == 1) {
            const list = response.toString()
            try {
                const resp = await axios.get(`https://rickandmortyapi.com/api/character/${list}`)
                let arr = [resp.data]
                console.log(resp.data)
                setFavorites(arr)
            } catch (error) {
                console.log(error)
            }
        }
        else if (response.length > 0) {
            const list = response.toString()
            try {
                const resp = await axios.get(`https://rickandmortyapi.com/api/character/${list}`)
                console.log(resp.data)
                setFavorites(resp.data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useFocusEffect(
        useCallback(() => {
            setFavorites([])
            getFavorites()
        }, [])
    )

    /*
useEffect(() => {
    getFavorites()
}, [])
*/

    return (
        <SafeAreaView style={styles.container}>
            {state ?
                <>
                    <Text style={styles.title} >Tus personajes favoritos!</Text>
                    <RickandmortyList characters={favorites} />
                </>
                :
                <>
                    <Text style={styles.title} >Inicia sesión para ver favoritos!</Text>
                    <Image style={styles.image} source={require('../assets/morty.gif')} />
                    <TouchableOpacity style={styles.button} onPress={goToLogin}  >
                        <Text style={styles.buttonText} >Ir a login</Text>
                    </TouchableOpacity>
                </>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    button: {
        backgroundColor: '#851791',
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
    }
});