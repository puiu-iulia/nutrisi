import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { useGetMealPlansQuery } from '../../../store/apiSlice'
import moment from 'moment'

export const useMealPlannerScreen = () => {
    const { navigate } = useNavigation()

    const [selectedDate, setSelectedDate] = useState(moment.now())

    const {data = [], isLoading, error} = useGetMealPlansQuery()

    const onAddMeal = () => {
        navigate(routes.SelectMeals, {
            date: selectedDate
        })
    }

    return {
        meals: data,
        onAddMeal, 
        setSelectedDate
    }
}