import { StyleSheet, Platform, Dimensions } from "react-native"
//@ts-ignore
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            height: 160,
            marginTop: 8,
            backgroundColor: props?.colors.white,
            borderColor: colors.primaryLightest,
            borderWidth: 0.5,
            borderRadius: 8,
            overflow: 'hidden',
            width: '48%'
        },
        cardContainer: {
            flex: 1,
        },
        selectedView: {
            height: 160,
            marginTop: 8,
            backgroundColor: props?.colors.white,
            borderColor: colors.primary,
            borderWidth: 3,
            borderRadius: 8,
            overflow: 'hidden',
            width: '48%'
        },
        titleContainer: {
            height: '20%',
            justifyContent: 'center',
        },
        recipeTitle: {
            color: colors.greyLighter,
            fontSize: 14,
            fontWeight: '600',
            marginHorizontal: 4,
            textAlign: 'center',
        },
        imageContainer: {
            height: '80%', 
            borderBottomColor: colors.primaryLightest,
            borderBottomWidth: 1,
        },
        image: {
            width: '100%',
            height: '100%'
        },
    })