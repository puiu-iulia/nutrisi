import React from "react"
import { View } from "react-native"
import { Button } from 'react-native-paper'
import { Screen } from "../../../components/Screen/Screen"
import { useCreateMealPlan } from "./useCreateMealPlan"
import { RecipeList } from "../../../components/RecipeList/RecipeList"
import { NavBarIcon } from "../../../components/NavBarIcon/NavBarIcon"
import { Loading } from "../../../components/Loading/Loading"

const CreateMealPlanScreen = () => {
    const {
        recipes,
        saveMeals,
        onSelect,
        goBack,
        goToAddRecipe,
        isLoading
    } = useCreateMealPlan()

    if (isLoading) {
        return <Loading />
    }

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

export default CreateMealPlanScreen