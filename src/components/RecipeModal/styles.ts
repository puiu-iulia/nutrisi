import { StyleSheet } from "react-native"
import { Theme } from "react-native-paper/lib/typescript/types"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1,
            width: '100%',
            backgroundColor: props?.colors.white
        },
    })