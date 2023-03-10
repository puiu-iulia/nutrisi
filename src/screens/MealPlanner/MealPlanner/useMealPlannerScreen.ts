import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { useGetMealPlansQuery } from '../../../store/apiSlice'
import moment from 'moment'
import { useStyles } from './styles'
import { MealPlan, Recipe } from '../../../types/types'

export const useMealPlannerScreen = () => {
    const { navigate } = useNavigation()
    const styles = useStyles()

    const [selectedDate, setSelectedDate] = useState(moment.now())
    const [dailyMeals, setDailyMeals] = useState(<Recipe[] | undefined>undefined)
    const [mealPlanId, setMealPlanId] = useState(<number | undefined>undefined)

    const {data = [], isLoading, error} = useGetMealPlansQuery()

    const onAddMeal = () => {
        navigate(routes.SelectMeals, {
            date: selectedDate,
            dailyMeals,
            mealPlanId
        })
    }

    const onMealPress = (mealId: number) => {
        if (mealId !== 0) {
            navigate(routes.RecipeDetails, {
                recipeId: mealId
            })
        } else {
            onAddMeal()
        }
    }

    useEffect(() => {
        if (data && !isLoading) {
            filterMeals(selectedDate)
        }
    }, [isLoading, data])

    const filterMeals = (date: any) => {
        let dailyMealPlan: MealPlan | undefined
        dailyMealPlan = data.find((meal: any) => {
            if (meal.date == moment(date).format('YYYY-MM-DD')) {
                return meal
            }
        })
        if (dailyMealPlan) {
            setMealPlanId(dailyMealPlan.id)
            setDailyMeals(dailyMealPlan.recipes.concat([{
                id: 0, 
                title: 'Add Meals', 
                description: 'Add Meals',
                link: 'http://www.pisoft.tech/wp-content/uploads/2023/03/Untitled-design.png',
                image: 'http://www.pisoft.tech/wp-content/uploads/2023/03/Untitled-design.png'
            }]))
        } else {
            setMealPlanId(undefined)
            setDailyMeals(undefined)
        }
    }

    return {
        meals: data,
        dailyMeals,
        onAddMeal, 
        setSelectedDate,
        styles,
        filterMeals,
        onMealPress
    }
}