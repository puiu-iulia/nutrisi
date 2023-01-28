import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
//@ts-ignore
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme/generalColors'

interface INavBar {
    leftButtonAction?: () => void
    rightButtonAction?: () => void
    leftButtonTitle?: string
    rightButtonTitle?: string
    navBarTitle?: string
    navBarTitleColor?: string
    navBarTransparent?: boolean
    backArrowButton?: boolean
    whiteBackArrowButton?: boolean
    backgroundColor?: string
    closeButton?: boolean
    rightButton?: JSX.Element | JSX.Element[]
    leftButton?: JSX.Element | JSX.Element[]
}

export const NavBar = ({leftButtonAction, rightButton, rightButtonAction, leftButtonTitle, rightButtonTitle, navBarTitle, navBarTitleColor, navBarTransparent, backArrowButton, whiteBackArrowButton, backgroundColor, leftButton} : INavBar) => {
    const theme = useTheme()
    const styles = useStyles(theme)
    
    return (
        <View style={styles.mainView}>
            <View style={styles.buttonContainer}>
                {
                    leftButton && leftButton
                }
            </View>
            <Text style={styles.navBarTitle} numberOfLines={1}>
                {navBarTitle && navBarTitle}
            </Text>
            <View style={styles.buttonContainer}>
                {
                    rightButton && rightButton
                }
            </View>
        </View>
    )
}