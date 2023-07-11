import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { addFavoriteApi, isFavoriteApi, removeFavoriteApi } from '../../api/favorite'

export default function Favorite(props) {

    const { id } = props
    const [isFavorite, setIsFavorite] = useState(undefined)

    const addFavorite = async () => {
        await addFavoriteApi(id)
        checkFavorite()
    }

    const removeFavorite = async () => {
        await removeFavoriteApi(id)
        checkFavorite()
    }

    console.log(isFavorite)

    const checkFavorite = async () => {
        const response = await isFavoriteApi(id)
        if (response == true) setIsFavorite(true)
        else setIsFavorite(false)
    }

    useEffect(() => {
        checkFavorite()
    }, [])

    return (
        <TouchableOpacity onPress={isFavorite ? removeFavorite : addFavorite}>
            <FontAwesome5
                name={"star"} size={24} color={isFavorite ? "yellow" : "white"}
            />
        </TouchableOpacity>
    )
}