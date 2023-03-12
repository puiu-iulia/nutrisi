import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { useGetRecipesQuery, useDeleteRecipeMutation } from '../../../store/apiSlice'
import { Recipe } from '../../../types/types'

export const useRecipeScreen = () => {
    const {navigate, goBack} = useNavigation()

    const goToAddRecipe = () => {
        navigate(routes.AddRecipeScreen)
    }

    const goToRecipeDetails = (recipeId: number) => {
        navigate(routes.RecipeDetails, {recipeId})
    }

    const {data = [], isLoading, error } = useGetRecipesQuery()
    const [deleteRecipe] = useDeleteRecipeMutation()

    const onDelete = (recipeId: number) => {
        deleteRecipe(recipeId).unwrap()
    }

    return {
        goToAddRecipe,
        recipes : data,
        onDelete,
        goToRecipeDetails,
        isLoading
    }
}