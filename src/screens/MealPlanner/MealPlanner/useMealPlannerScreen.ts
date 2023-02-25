import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { getMealPLanning, createMealPLanning } from '../../../services/DataServices/mealplanning'
import { useAppSelector, useAppDispatch } from '../../../utils/hooks/useStore'
import moment from 'moment'

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
    const [meals, setMeals] = useState([])
    const [selectedDate, setSelectedDate] = useState(moment.now())

    //TODO: Implement onCreateMeal

    // let recipes = MEAL_TIMES.map(mealTime => {
    //     if (mealTime.id === id) {
    //         mealTime.selectedRecipe = recipe
    //     }
    //     return mealTime
    // })

    const onAddMeal = () => {
        navigation.navigate(routes.SelectMeals, {
            date: selectedDate
        })
    }

    const goBack = () => {
        navigation.goBack()
    }

    const fetchMeals = useCallback(async () => {
        if (token) {
            const mealRes = await getMealPLanning(token)
            if (mealRes) {
                setMeals(mealRes)
            }
            console.log('mealRes', mealRes)
        }
    }, [])
    useEffect(() => {
        fetchMeals()
    }, [])

    return {
        goBack,
        recipes,
        onAddMeal, 
        meals,
        setSelectedDate
    }
}