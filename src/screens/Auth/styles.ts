import { StyleSheet, Platform } from "react-native"
import { Theme } from "react-native-paper/lib/typescript/types"
import helpers from "../../theme/helpers"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1
        },
        screen: {
            flex: 1,
            padding: 24,
            justifyContent: 'center',
            alignContent: 'center'
        },
        input: {
            marginTop: 8
        },
        inputViewContainer: {
            flex: 1,
            marginTop: 48
        },
        button: {
            backgroundColor: props?.colors.primary,
            color: '#fff',
            marginTop: 48
        },
        switchContainer: {
            marginTop: 48,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo: {
            marginTop: 48,
            fontSize: 48,
            color: props?.colors.primary,
            fontFamily: Platform.OS == 'android' ? 'notoserif' : 'Georgia-Bold',
            alignSelf: 'center',
            fontWeight: '700'
        },
        errorTextContainer: {
            height: 20,
            marginVertical: 4
        },
        errorText: {
            color: props?.colors.error,
        },
    })