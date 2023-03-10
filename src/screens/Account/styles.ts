import { StyleSheet, Platform, Dimensions } from "react-native"
//@ts-ignore
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            height: 64,
            backgroundColor: props?.colors.white,
            borderBottomColor: colors.primaryLightest,
            borderBottomWidth: 1,
            justifyContent: 'center'
        },
        itemText: {
            marginLeft: 8,
            fontSize: 18,
            color: colors.greyLighter
        }
    })