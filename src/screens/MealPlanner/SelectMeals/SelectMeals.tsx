import React from "react"
import { Screen } from "../../../components/Screen/Screen"
import { useSelectMeals } from "./useSelectMeals"
import { RecipeList } from "../../../components/RecipeList/RecipeList"
import { NavBarIcon } from "../../../components/NavBarIcon/NavBarIcon"

const SelectMealsScreen = () => {
    const {
        recipes,
        saveMeals,
        onSelect,
        goBack
    } = useSelectMeals()

    return (
        <Screen navBarTitle="Select Meals" 
            rightButton={<NavBarIcon 
                onPress={saveMeals}
                name='checkmark-sharp'
            />}
            leftButton={<NavBarIcon 
                onPress={goBack}
                name='arrow-back'
            />}
        >
            <RecipeList 
                data={recipes}
                onPress={onSelect}
            />
        </Screen>
    )
}

export default SelectMealsScreen