import React from "react"
import { View } from "react-native"
import { Button } from 'react-native-paper'
import { Screen } from "../../../components/Screen/Screen"
import { useSelectMeals } from "./useSelectMeals"
import { RecipeList } from "../../../components/RecipeList/RecipeList"
import { NavBarIcon } from "../../../components/NavBarIcon/NavBarIcon"

const SelectMealsScreen = () => {
    const {
        recipes,
        saveMeals,
        onSelect,
        goBack,
        goToAddRecipe
    } = useSelectMeals()


    return (
        <Screen navBarTitle="Select Meals" 
            rightButton={<NavBarIcon 
                onPress={goToAddRecipe}
                name='ios-add-outline'
            />}
            leftButton={<NavBarIcon 
                onPress={goBack}
                name='arrow-back'
            />}
        >
            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <RecipeList 
                    data={recipes}
                    onPress={onSelect}
                />
                   <View>
                <Button 
                    onPress={saveMeals}
                    mode='contained'
                    style={{margin: 8}}
                >{'Save'}</Button>
            </View>
            </View>
         
        </Screen>
    )
}

export default SelectMealsScreen