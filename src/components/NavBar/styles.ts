import { StyleSheet } from "react-native"
import { Theme } from "react-native-paper/lib/typescript/types"
import { Platform } from "react-native"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            height: Platform.OS === 'ios' ? 80 : 56,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: props?.colors.primary,
            paddingTop: Platform.OS === 'ios' ? 16 : 0
        },
        buttonContainer: {
            width: 48,
            height: 48,
            padding: 8,
            justifyContent: 'center',
            alignContent: 'center'
        },
        navBarTitle: {
            color: props?.colors.white,
            fontSize: 18,
            fontWeight: '700'
        }
    })