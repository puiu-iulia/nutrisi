import { StyleSheet, Platform, Dimensions } from "react-native"
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1,
            backgroundColor: colors.white
        }
    })