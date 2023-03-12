import { StyleSheet, Platform, Dimensions } from "react-native"
//@ts-ignore
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1
        },
        calendarContainer: {
            borderBottomColor: colors.greyLightest, 
            borderBottomWidth: 8
        }
    })