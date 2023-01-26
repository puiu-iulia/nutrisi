import { StyleSheet } from "react-native"
import { Theme } from "react-native-paper/lib/typescript/types"
import { Dimensions } from "react-native"
import { colors } from "../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1,
            justifyContent: 'flex-start',
            width: 80,
            paddingRight: 8
        },
        icon: {
            margin: 0
        }
    })