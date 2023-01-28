import React from "react"
import { TouchableOpacity, Text } from "react-native"
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'

import { colors } from '../../theme/generalColors'
import { useStyles } from './styles'

interface IIcon {
    onPress?: () => void,
    name: string
}

export const NavBarIcon = ({onPress, name}: IIcon) => {

    const styles = useStyles()

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.mainView}
        >
            <Icon 
                name={name}
                size={28}
                color={colors.white}
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}