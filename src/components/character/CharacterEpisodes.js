import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import axios from 'axios'

export default function CharacterEpisodes(props) {

    const { episode, name } = props
    const [episodeData, setEpisodeData] = useState({})
    const [episodeList, setEpisodeList] = useState([])

    const getEpisodeData = async () => {
        try {
            const response = await axios.get(episode[0])
            setEpisodeData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEpisodeData()
        const episodePromises = episode.map(async (e, i) => {
            try {
                const response = await axios.get(e)
                return `${response.data.episode} - ${response.data.name}`
            } catch (error) {
                console.log(error)
            }
        })
        Promise.all(episodePromises).then(data => setEpisodeList(data))
    }, [])

    return (
        <View>
            <Text style={styles.text} >Debuted in {episodeData.episode} - {episodeData.name} </Text>
            <Text style={styles.text} >Has appeared in {episode.length} episodes: </Text>
            <FlatList
                style={styles.flatlist}
                data={episodeList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Text style={styles.text} >+ {item}</Text>}
            />
        </View >
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
        color: 'white'
    },
    flatlist: {
        height: 90,
        flexGrow: 0
    }
})