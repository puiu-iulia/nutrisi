import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { useGetRecipesQuery, useDeleteRecipeMutation } from '../../../store/apiSlice'
import { useAppSelector } from '../../../utils/hooks/useStore'
import { Recipe } from '../../../types/types'

export const useRecipeScreen = () => {
    const navigation = useNavigation()
    const token = useAppSelector(state => state.auth.token)
    //console.log('token', token)

    const goToAddRecipe = () => {
        navigation.navigate(routes.AddRecipeScreen)
    }

    const goBack = () => {
        navigation.goBack()
    }

    const {data = [], isLoading, error } = useGetRecipesQuery()
    const [deleteRecipe] = useDeleteRecipeMutation()

    const onDelete = (recipeId: number) => {
        deleteRecipe(recipeId).unwrap()
    }

    return {
        goToAddRecipe,
        goBack,
        recipes : data,
        onDelete
    }
}