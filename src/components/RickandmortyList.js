import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import RickandmortyCard from './RickandmortyCard'

export default function RickandmortyList(props) {

    const { characters, next } = props

    return (
        <FlatList
            data={characters}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(characters) => String(characters.id)}
            renderItem={({ item }) => <RickandmortyCard character={item} />}
            onEndReached={next}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<ActivityIndicator size="large" />}
        />
    )
}