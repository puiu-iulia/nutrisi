import { StyleSheet, Platform } from "react-native"
//ts-ignore
import { Theme } from "react-native-paper/lib/typescript/types"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            padding: 8,
            flex: 1,
            justifyContent: 'space-between'
        },
        screen: {
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center'
        },
        input: {
            marginBottom: 4,
            height: 40,
            justifyContent: 'center'
        },
        inputDescirption: {
            height: 80,
            marginBottom: 8
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
        buttonView: {
            flex: 1,
            alignSelf: 'flex-end',
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