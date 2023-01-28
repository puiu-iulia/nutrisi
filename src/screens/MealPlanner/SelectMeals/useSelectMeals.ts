import { useEffect, useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/useStore"
import { getAllRecipes } from "../../../services/DataServices/recipes"
import { useNavigation } from '../../../navigation/useNavigation'
import routes from "../../../navigation/routes"

export const useSelectMeals = () => {

    const {navigator, goBack} = useNavigation()

    const [recipes, setRecipes] = useState([])

    const token = useAppSelector(state => state.auth.token)

    const fetchRecipes = useCallback(async () => {
        if (token) {
            const recipesRes = await getAllRecipes(token)
            if (recipesRes) {
                let allRecipes = []
                allRecipes = recipesRes.map((recipe: any) => { 
                    recipe.selected = false
                    return recipe
                })
                setRecipes(allRecipes)
            }
        }
    }, [])


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
    //console.log(recipes)

    const saveMeals = () => {
        goBack()
    }

    useEffect(() => {
        fetchRecipes()
    }, [])

    return {
        recipes,
        saveMeals,
        onSelect,
        goBack
    }
}