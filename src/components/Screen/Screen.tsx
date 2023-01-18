import React from 'react'
import { View, StatusBar } from 'react-native'
//@ts-ignore
import styled, {css} from 'styled-components'
import { NavBar } from '../NavBar/NavBar'

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
    lightStatusBar?: boolean
    closeButton?: boolean
}

export const Screen = ({children, navBarHidden = false, leftButtonAction, rightButtonAction, leftButtonTitle, rightButtonTitle, rightButton, navBarTitle, navBarTitleColor, navBarTransparent, backArrowButton, backgroundColor, navBarBackgroundColor, whiteBackArrowButton, lightStatusBar, closeButton} : IScreen) => {
    return (
        <StyledScreen backgroundColor={backgroundColor}>
            {lightStatusBar ? <StatusBar barStyle={'light-content'}/>
             : <StatusBar barStyle={'dark-content'}/>}
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
        </StyledScreen>
    )
}

const StyledScreen = styled(View)`
    flex: 1;
    background-color: ${({backgroundColor} : {backgroundColor?: string}) => {
        if(backgroundColor) {
            return backgroundColor
        }
        return '#ffffff'
    }};
`