import React from "react"
import { View, TouchableOpacity, Text } from 'react-native'
//@ts-ignore
import Image from 'expo-fast-image'
//@ts-ignore
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'


interface IRecipeCard {
    uri?: String | undefined
    title?: String | undefined
    onPress: (id: number) => void
    onDelete?: (id: number) => void
    id: number
    selected: boolean
}

export const RecipeCard = ({uri, title, onPress, id, selected, onDelete}: IRecipeCard) => {

    const theme = useTheme()
    const styles = useStyles(theme)

    return (
        <View style={selected ? styles.selectedView : styles.mainView}>
            <TouchableOpacity 
                style={styles.cardContainer}
                onPress={() => onPress(id)}
                onLongPress={() => onDelete && onDelete(id)}
            >
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: uri}} 
                        defaultSource={id === 0 ? require('../../../assets/placeholder.png') :
                            require('../../../assets/icon.png')}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text 
                        style={styles.recipeTitle}
                        numberOfLines={1}
                    >{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
