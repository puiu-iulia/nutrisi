import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { getAllRecipes } from '../../../services/DataServices/recipes'
import { useAppSelector, useAppDispatch } from '../../../utils/hooks/useStore'

const MEAL_TIMES = [
    {
        id: 1,
        title : 'Breakfast',
        selectedRecipe: null
    },
    {
        id: 2,
        title : 'Lunch',
        selectedRecipe: null
    },
    {
        id: 3,
        title : 'Snack',
        selectedRecipe: null
    },
    {
        id: 4,
        title : 'Dinner',
        selectedRecipe: null
    }
]

export const useMealPlannerScreen = () => {
    const navigation = useNavigation()
    const token = useAppSelector(state => state.auth.token)

    const [recipes, setRecipes] = useState([])
    const [visible, setVisible] = useState(false)
    const [meals, setMeals] = useState([])

    //TODO: Implement onCreateMeal

    // let recipes = MEAL_TIMES.map(mealTime => {
    //     if (mealTime.id === id) {
    //         mealTime.selectedRecipe = recipe
    //     }
    //     return mealTime
    // })

    const onAddMeal = () => {
        navigation.navigate(routes.SelectMeals)
    }

    const goBack = () => {
        navigation.goBack()
    }

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    //TODO: Refactor using useCallback
    // useEffect(() => {
    //     const fetchMeals = async () => {
    //         if (token) {
    //             const recipesRes = await getAllRecipes(token)
    //             if (recipesRes) {
    //                 setRecipes(recipesRes.filter((recipe: any) => { 
    //                     if (recipe.image) {
    //                         return recipe
    //                     }
    //                 }))
    //             }
    //             //console.log('recipesRes', recipes)
    //         }
    //     }
    //     fetchRecipes()
    // }, [])

    return {
        goBack,
        recipes,
        visible,
        showModal,
        hideModal,
        onAddMeal
    }
}