import { StyleSheet, Platform, Dimensions } from "react-native"
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            height: 220,
            marginTop: 8,
            // flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            backgroundColor: props?.colors.white,
            borderColor: colors.primaryLightest,
            borderWidth: 1,
            borderRadius: 8,
            overflow: 'hidden'
        },
        cardContainer: {
            width: '48%',
        },
        recipeTitle: {
            color: colors.greyLighter,
            fontSize: 16 ,
            fontWeight: '600',
            marginLeft: 4,
            textAlign: 'center'
        },
        imageContainer: {
            height: '75%', 
            borderBottomColor: colors.primaryLightest,
            borderBottomWidth: 1,
        },
        image: {
            width: '100%',
            height: '100%'
        },
    })