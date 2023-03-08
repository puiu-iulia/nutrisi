import { StyleSheet, Platform, Dimensions } from "react-native"
//@ts-ignore
import { Theme } from "react-native-paper/lib/typescript/types"
import { colors } from "../../../theme/generalColors"

export const useStyles = (props?: Theme) => 
    StyleSheet.create({
        mainView: {
            flex: 1
        },
        cardContainer: {
            width: '48%',
            height: 160, 
            margin: 12,
            borderColor: colors.primaryLightest, 
            borderWidth: 1, 
            borderRadius: 8,
            overflow: 'hidden',
        },
        calendarContainer: {
            borderBottomColor: colors.greyLightest, 
            borderBottomWidth: 8
        },
        titleContainer: {
            height: '20%',
            width: '100%',
            justifyContent: 'center'
        },
        title: {
            color: colors.primary,
            fontSize: 14,
            fontWeight: '600',
            marginHorizontal: 4,
            textAlign: 'center',
        },
        mealTitle: {
            color: colors.greyLight,
            fontSize: 14,
            fontWeight: '600',
            marginLeft: 4,
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