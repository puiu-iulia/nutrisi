import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { useTheme, Card } from 'react-native-paper'
//@ts-ignore
import ExpoFastImage from 'expo-fast-image'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
//@ts-ignore
import { useStyles } from "./styles"
import { useRecipeScreen } from './useRecipeScreen'
import { colors } from '../../../theme/generalColors'
import { RecipeList } from '../../../components/RecipeList/RecipeList'

const RecipeScreen = () => {
    const theme = useTheme()

    const {
        goBack,
        goToAddRecipe,
        recipes
    } = useRecipeScreen()

    return (
        <Screen
            navBarTitle='Recipes'
            backgroundColor={colors.white}
            navBarBackgroundColor={theme.colors.primary}
            rightButtonTitle='Add Recipe'
            navBarTitleColor={colors.white}
            rightButton={
                <TouchableOpacity onPress={goToAddRecipe}>
                    <Icon 
                        name={'ios-add-outline'}
                        size={32}
                        color={colors.white}
                    />
                </TouchableOpacity>}
        >
            <RecipeList 
                data={recipes}
            />
        </Screen>
    )
}

export default RecipeScreen