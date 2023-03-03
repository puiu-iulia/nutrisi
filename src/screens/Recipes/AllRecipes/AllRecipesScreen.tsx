import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { useTheme, Card } from 'react-native-paper'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
//@ts-ignore
import { useStyles } from "./styles"
import { useRecipeScreen } from './useAllRecipesScreen'
import { colors } from '../../../theme/generalColors'
import { RecipeList } from '../../../components/RecipeList/RecipeList'
import { NavBarIcon } from '../../../components/NavBarIcon/NavBarIcon'

const AllRecipesScreen = () => {
    const theme = useTheme()

    const {
        goBack,
        goToAddRecipe,
        recipes,
        onDelete,
        goToRecipeDetails
    } = useRecipeScreen()

    return (
        <Screen
            navBarTitle='Recipes'
            backgroundColor={colors.white}
            navBarBackgroundColor={theme.colors.primary}
            rightButtonTitle='Add Recipe'
            navBarTitleColor={colors.white}
            rightButton={<NavBarIcon 
                onPress={goToAddRecipe}
                name='ios-add-outline'
            />}
        >
            <RecipeList 
                data={recipes}
                onPress={goToRecipeDetails}
                onDelete={onDelete}
            />
        </Screen>
    )
}

export default AllRecipesScreen