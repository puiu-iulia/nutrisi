import { StyleSheet, Platform, Dimensions } from "react-native"
//@ts-ignore
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1,
            margin: 16,
        },
        linkContainer: {
            flexDirection: 'row',
            marginBottom: 8
        },
        titleContainer: {
            justifyContent: 'center',
            marginBottom: 8,
        },
        recipeTitle: {
            color: colors.greyLighter,
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
        },
        descriptionContainer: {
            marginBottom: 8,
        },
        link: {
            color: colors.greyLighter,
            textDecorationLine: 'underline',
        },
        linkText:{
            color: colors.greyLighter
        },
        imageContainer: {
            height: 200, 
            borderBottomColor: colors.primaryLightest,
            borderBottomWidth: 1,
        },
        image: {
            width: '100%',
            height: '100%'
        },
    })