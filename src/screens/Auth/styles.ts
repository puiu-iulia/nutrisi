import { StyleSheet, Platform } from "react-native"
//@ts-ignore
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../theme/generalColors"

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
            marginTop: 24,
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
        headerText: {
            color: colors.greyLighter,
            alignSelf: 'center',
            fontSize: 24,
        },
        errorTextContainer: {
            height: 20,
            marginVertical: 4
        },
        errorText: {
            color: props?.colors.error,
        },
    })