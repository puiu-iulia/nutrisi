import React from "react"
import { View, TouchableOpacity, Text } from 'react-native'
//@ts-ignore
import Image from 'expo-fast-image'
//@ts-ignore
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'


interface IRecipeCard {
    children?: JSX.Element | JSX.Element[]
    uri?: String | undefined
    title?: String | undefined
}

export const RecipeCard = ({children, uri, title}: IRecipeCard) => {

    const theme = useTheme()
    const styles = useStyles(theme)
    console.log('uri', uri)

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity 
                style={styles.mainView}
                onPress={() => {}}
            >
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: uri}} 
                    />
                </View>
                <View>
                    <Text 
                        style={styles.recipeTitle}
                        numberOfLines={2}
                    >{title}</Text>
                </View>
                </TouchableOpacity>
        </View>
    )
}
