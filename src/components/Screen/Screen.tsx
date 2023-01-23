import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavBar } from '../NavBar/NavBar'
import { useStyles } from './styles'
interface IScreen {
    children?: JSX.Element | JSX.Element[]
    rightButton?: JSX.Element | JSX.Element[]
    navBarHidden?: boolean
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
    navBarBackgroundColor?: string
    closeButton?: boolean
}

export const Screen = ({
        children, 
        navBarHidden = false, 
        leftButtonAction, 
        rightButtonAction, 
        leftButtonTitle, 
        rightButtonTitle, 
        rightButton, 
        navBarTitle, 
        navBarTitleColor, 
        navBarTransparent, 
        backArrowButton, 
        backgroundColor, 
        navBarBackgroundColor, 
        whiteBackArrowButton, 
        closeButton
    } : IScreen) => {

    
        const styles = useStyles()
        return (
            <View style={styles.mainView}>
                <StatusBar barStyle={'default'}/>
                {!navBarHidden && 
                    <NavBar 
                        navBarTitleColor={navBarTitleColor}
                        whiteBackArrowButton={whiteBackArrowButton}
                        backgroundColor={navBarBackgroundColor}
                        leftButtonAction={leftButtonAction}
                        rightButtonAction={rightButtonAction}
                        leftButtonTitle={leftButtonTitle}
                        rightButtonTitle={rightButtonTitle}
                        navBarTitle={navBarTitle}
                        navBarTransparent={navBarTransparent}
                        backArrowButton={backArrowButton} 
                        closeButton={closeButton}
                        rightButton={rightButton}
                    />
                }
                {children}
            </View>
        )
}