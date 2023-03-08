import { StyleSheet, Platform, Dimensions } from "react-native"
//@ts-ignore
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1,
            margin: 12
        },
        emailContainer: {
            flex: 1
        },
        labelText: {
            color: colors.greyLighter,
            fontSize: 14,
            marginBottom: 4
        },
        emailText: {
            color: colors.greyLighter,
            fontSize: 18
        }
    })