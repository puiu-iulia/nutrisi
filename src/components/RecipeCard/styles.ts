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
            borderWidth: 1,
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
        recipeButton: {
            color: colors.primary,
            fontSize: 14,
            fontWeight: '600',
            marginHorizontal: 4,
            textAlign: 'center',
        },
        deleteContainer: {
            flex: 1,
            zIndex: 2,
            height: 28,
            width: 28,
            right: 4,
            top: 4,
            borderRadius: 20,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white
        },
        imageContainer: {
            height: '80%', 
            borderBottomColor: colors.primaryLightest,
            borderBottomWidth: 1,
            zIndex: 1,
        },
        image: {
            width: '100%',
            height: '100%'
        },
    })