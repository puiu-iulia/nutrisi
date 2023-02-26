import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Recipe, MealPlan, RecipeData } from '../types/types'
import { RootState } from './store'

export const baseUrl = 'http://ec2-3-93-58-72.compute-1.amazonaws.com/api/'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
              headers.set('Authorization', `Token ${token}`)
            }
            return headers
          },
    }),
    tagTypes: ['Recipe', 'MealPlan'],
    endpoints: build => ({
        createRecipe: build.mutation<Recipe, RecipeData>({
            query: (recipe) => ({
                url: 'recipes/recipes/',
                method: 'POST',
                body: recipe
            })
        }),
        getRecipes: build.query<Recipe[], null>({
            query: () => ({
                url: 'recipes/recipes/',
                method: 'GET',
            })
        }),
        uploadImageToRecipe: build.mutation<Recipe, {id: string, image: FormData}>({
            query: ({id, image}) => ({
                url: `recipes/recipes/${id}/`,
                method: 'PATCH',
                body: image
            })
        }),
        createMealPlan: build.mutation<MealPlan, MealPlan>({
            query: (mealPlan) => ({
                url: 'mealplanning/mealplanning/',
                method: 'POST',
                body: mealPlan
            })
        }),
        getMealPlans: build.query<MealPlan[], null>({
            query: () => ({
                url: 'mealplanning/mealplanning/',
                method: 'GET',
            })
        }),
    })
})


export const {
    useCreateRecipeMutation,
    useGetRecipesQuery,
    useUploadImageToRecipeMutation,
    useCreateMealPlanMutation,
    useGetMealPlansQuery
} = apiSlice