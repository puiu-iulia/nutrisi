import { useEffect, useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/useStore"
import routes from "../../../navigation/routes"
import { useNavigation } from "../../../utils/hooks/useNavigation"
import moment from "moment"
import { useGetRecipesQuery, useCreateMealPlanMutation } from "../../../store/apiSlice"

export const useSelectMeals = () => {

    const {getParam, goBack, navigate} = useNavigation()

    const goToAddRecipe = () => {
        navigate(routes.AddRecipeScreen)
    }

    const { data = [], isLoading, error } = useGetRecipesQuery()
    const [createMealPlan] = useCreateMealPlanMutation()
    const [recipes, setRecipes] = useState([])

    const date = getParam('date')


    const onSelect = (recipeId: number) => {
        let allRecipes = []
        allRecipes = recipes.map((recipe: any) => {
            if (recipe.id === recipeId) {
                recipe.selected = !recipe.selected
            }
            return recipe
        })
        //@ts-ignore
        setRecipes(allRecipes)
    }

    useEffect(() => {
        if (data && !isLoading) {
            //@ts-ignore
            setRecipes(data.map((recipe: any) =>{
                return {...recipe, selected: false}
            }))
        }
    }, [data])

    const saveMeals = async () => {
        const selectedRecipes = recipes.filter((recipe: any) => {
            if (recipe.selected) {
                return recipe
            }
        }).map((recipe: any) => {
            return recipe.id
        })
        let mealPlanRes
        try {
            mealPlanRes = await createMealPlan({
                date: moment(date).format('YYYY-MM-DD'),
                recipes: selectedRecipes
            }).unwrap()
        } catch (error) {
            console.log('error', error)
        }
        if (mealPlanRes && !error) {
            goBack()
        }
    }

    return {
        recipes,
        saveMeals,
        onSelect,
        goBack,
        goToAddRecipe
    }
}