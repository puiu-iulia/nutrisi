import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
//@ts-ignore
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'

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
}

export const NavBar = ({leftButtonAction, rightButton, rightButtonAction, leftButtonTitle, rightButtonTitle, navBarTitle, navBarTitleColor, navBarTransparent, backArrowButton, whiteBackArrowButton, backgroundColor, closeButton} : INavBar) => {
    const theme = useTheme()
    const styles = useStyles(theme)
    
    return (
        <View style={styles.mainView}>
            <View style={styles.buttonContainer}>
                {backArrowButton ? (
                    <TouchableOpacity onPress={() => leftButtonAction && leftButtonAction()}>
                        <Icon 
                            name={'arrow-back'}
                            size={24}
                            color={theme.colors.white}
                        />
                    </TouchableOpacity>
                ) : null}
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