import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from 'react'
import { API_URL } from '@env'
import axios from 'axios';
import RickandmortyList from '../components/RickandmortyList';

export default function Rickandmorty() {
    const [characters, setCharacters] = useState([])
    const [trigger, setTrigger] = useState(0)
    const [nextUrl, setNextUrl] = useState(API_URL)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(nextUrl)
                setNextUrl(response.data.info.next)
                setCharacters([...characters, ...response.data.results])
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [trigger])

    const nextData = () => {
        setTrigger(trigger + 1)
    }

    return (
        <SafeAreaView style={styles.container}>
            <RickandmortyList characters={characters} next={nextData} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
});