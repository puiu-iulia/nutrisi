import React from "react"
import { View, TouchableOpacity, Text, Pressable } from 'react-native'
//@ts-ignore
import Image from 'expo-fast-image'
//@ts-ignore
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme/generalColors'

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
                    {id !== 0 && 
                        <Pressable 
                            style={styles.deleteContainer}
                            onPress={() => onDelete && onDelete(id)}
                        >
                            <Icon 
                                name='md-trash-bin'
                                size={20}
                                color={colors.primary}
                            />
                        </Pressable>
                    }
                    <Image 
                        style={styles.image}
                        source={{uri: uri}} 
                        defaultSource={id === 0 ? require('../../../assets/placeholder.png') :
                            require('../../../assets/icon.png')}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text 
                        style={id == 0 ? styles.recipeButton : styles.recipeTitle}
                        numberOfLines={1}
                    >{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
