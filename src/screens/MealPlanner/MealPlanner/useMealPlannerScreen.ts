import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { useGetMealPlansQuery } from '../../../store/apiSlice'
import moment from 'moment'
import { useStyles } from './styles'

export const useMealPlannerScreen = () => {
    const { navigate } = useNavigation()
    const styles = useStyles()

    const [selectedDate, setSelectedDate] = useState(moment.now())
    const [dailyMeals, setDailyMeals] = useState([])

    const {data = [], isLoading, error} = useGetMealPlansQuery()

    const onAddMeal = () => {
        navigate(routes.SelectMeals, {
            date: selectedDate
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
        if (data) {
            filterMeals(selectedDate)
        }
    }, [data])

    const filterMeals = (date: any) => {
        data.filter((meal: any) => {
            if (meal.date == moment(date).format('YYYY-MM-DD')) {
                console.log('meal', meal.date)
                setDailyMeals(meal.recipes.concat([{id: 0, title: 'Add Meal'}])) 
            } else {
                setDailyMeals([])
            }
        })
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