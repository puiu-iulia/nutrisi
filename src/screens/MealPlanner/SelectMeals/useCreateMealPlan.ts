import { useEffect, useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/useStore"
import routes from "../../../navigation/routes"
import { useNavigation } from "../../../utils/hooks/useNavigation"
import moment from "moment"
import { useGetRecipesQuery, useCreateMealPlanMutation, useUpdateMealPlanMutation } from "../../../store/apiSlice"

export const useCreateMealPlan = () => {

    const {getParam, goBack, navigate} = useNavigation()

    const goToAddRecipe = () => {
        navigate(routes.AddRecipeScreen)
    }

    const { data = [], isLoading, error } = useGetRecipesQuery()
    const [createMealPlan] = useCreateMealPlanMutation()
    const [updateMealPlan] = useUpdateMealPlanMutation()
    const [recipes, setRecipes] = useState([])

    const date = getParam('date')
    const dailyMeals = getParam('dailyMeals')
    const mealPlanId = getParam('mealPlanId')

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
            setRecipes(data.map((recipe: any) => {
                if (dailyMeals && dailyMeals.length > 0) {
                    let selectedMeal = dailyMeals.find((meal: any) => {
                        if (meal.id === recipe.id) {
                            return meal
                        }
                    })
                    if (selectedMeal) {
                        return {...recipe, selected: true}
                    }
                }
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
        if (mealPlanId) {
            try {
                mealPlanRes = await updateMealPlan({
                    id: mealPlanId,
                    recipes: {
                        recipes: selectedRecipes 
                    }
                })
            } catch (error) {
                console.log('error', error)
            }
        } else {
            try {
                mealPlanRes = await createMealPlan({
                    date: moment(date).format('YYYY-MM-DD'),
                    recipes: selectedRecipes
                }).unwrap()
            } catch (error) {
                console.log('error', error)
            }
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
        goToAddRecipe,
        isLoading
    }
}