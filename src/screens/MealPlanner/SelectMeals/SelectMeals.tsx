import React from "react"
import { Screen } from "../../../components/Screen/Screen"
import { useSelectMeals } from "./useSelectMeals"
import { RecipeList } from "../../../components/RecipeList/RecipeList"
import { AddRecipeIcon } from "../../../components/AddRecipeIcon/AddRecipeIcon"

const SelectMealsScreen = () => {
    const {
        recipes,
        goToAddRecipe
    } = useSelectMeals()

    return (
        <Screen navBarTitle="Select Meals" 
            rightButton={<AddRecipeIcon 
                onPress={goToAddRecipe}
            />}
        >
            <RecipeList 
                data={recipes}
            />
        </Screen>
    )
}

export default SelectMealsScreen