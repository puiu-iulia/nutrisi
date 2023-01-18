import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { getAllRecipes } from '../../../services/DataServices/recipes'
import { useAppSelector } from '../../../utils/hooks/useStore'

export const useRecipeScreen = () => {
    const navigation = useNavigation()
    const token = useAppSelector(state => state.auth.token)

    const [recipes, setRecipes] = useState([])

    const goToAddRecipe = () => {
        navigation.navigate(routes.AddRecipeScreen)
    }

    const goBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        const fetchRecipes = async () => {
            if (token) {
                const recipesRes = await getAllRecipes(token)
                if (recipesRes) {
                    setRecipes(recipesRes.filter((recipe: any) => { 
                        if (recipe.image) {
                            return recipe
                        }
                    }))
                }
                //console.log('recipesRes', recipes)
            }
        }
        fetchRecipes()
    }, [])

    return {
        goToAddRecipe,
        goBack,
        recipes
    }
}