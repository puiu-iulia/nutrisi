import { StyleSheet } from "react-native"
import { Theme } from "react-native-paper/lib/typescript/types"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1,
            backgroundColor: props?.colors.white
        },
        list: {
            marginHorizontal: 12,
            marginBottom: 12
        },
        columnStyle: {
            justifyContent: 'space-between'
        }
    })