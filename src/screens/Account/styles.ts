import { StyleSheet, Platform, Dimensions } from "react-native"
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            height: 64,
            backgroundColor: props?.colors.white,
            borderBottomColor: colors.greyLighter,
            borderBottomWidth: .4,
            justifyContent: 'center'
        },
        itemText: {
            marginLeft: 8,
            fontSize: 18,
            color: colors.primary
        }
    })