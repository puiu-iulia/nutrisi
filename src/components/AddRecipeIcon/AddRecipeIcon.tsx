import React from "react"
import { TouchableOpacity, Text } from "react-native"
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'

import { colors } from '../../theme/generalColors'
import { useStyles } from './styles'

interface IAddRecipeIcon {
    onPress?: () => void,
    title?: string
}

export const AddRecipeIcon = ({onPress, title}: IAddRecipeIcon) => {

    const styles = useStyles()

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.mainView}
        >
            <Icon 
                name={'ios-add-outline'}
                size={32}
                color={colors.white}
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}