import { useEffect, useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/useStore"
import { getAllRecipes } from "../../../services/DataServices/recipes"
import { useNavigation } from '../../../navigation/useNavigation'
import routes from "../../../navigation/routes"

export const useSelectMeals = () => {

    const navigation = useNavigation()

    const [recipes, setRecipes] = useState([])

    const token = useAppSelector(state => state.auth.token)

    const fetchRecipes = useCallback(async () => {
        if (token) {
            const recipesRes = await getAllRecipes(token)
            if (recipesRes) {
                setRecipes(recipesRes.filter((recipe: any) => { 
                    if (recipe.image) {
                        return recipe
                    }
                }))
            }
        }
    }, [])

    useEffect(() => {
        fetchRecipes()
    }, [navigation])

    const goToAddRecipe = () => {
        navigation.navigate(routes.AddRecipeScreen)
    }

    return {
        recipes,
        goToAddRecipe
    }
}