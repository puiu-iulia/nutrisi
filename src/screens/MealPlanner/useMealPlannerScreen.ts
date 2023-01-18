import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../navigation/useNavigation'
import routes from '../../navigation/routes'
import { getAllRecipes } from '../../services/DataServices/recipes'
import { useAppSelector } from '../../utils/hooks/useStore'

const MEAL_TIMES = [
    {
        id: 1,
        title : 'Breakfast'
    },
    {
        id: 2,
        title : 'Lunch'
    },
    {
        id: 3,
        title : 'Snack'
    },
    {
        id: 4,
        title : 'Dinner'
    }
]

export const useMealPlannerScreen = () => {
    const navigation = useNavigation()
    const token = useAppSelector(state => state.auth.token)

    const [recipes, setRecipes] = useState([])
    const [visible, setVisible] = useState(false)

    const goToSelectRecipe = () => {
        //navigation.navigate(routes.AddRecipeScreen)
    }

    const goBack = () => {
        navigation.goBack()
    }

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

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
        goBack,
        recipes,
        visible,
        showModal,
        hideModal,
    }
}