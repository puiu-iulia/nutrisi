import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Recipe, MealPlan, RecipeData, MealPlanData } from '../types/types'
import { RootState } from './store'
import { API_URL } from '../../config'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
              headers.set('Authorization', `Token ${token}`)
            }
            return headers
          },
    }),
    tagTypes: ['Recipes', 'MealPlans'],
    endpoints: build => ({
        createRecipe: build.mutation<Recipe, RecipeData>({
            query: (recipe) => ({
                url: 'recipes/recipes/',
                method: 'POST',
                body: recipe
            }),
        }),
        getRecipes: build.query<Recipe[], void>({
            query: () => ({
                url: 'recipes/recipes/',
                method: 'GET',
            }),
            providesTags: (result) => result
              ? [
                  ...result.map(({ id }) => ({ type: 'Recipes' as const, id })),
                  { type: 'Recipes', id: 'LIST' },
                ]
              : [{ type: 'Recipes', id: 'LIST' }],
        }),
        deleteRecipe: build.mutation<void, number>({
            query: (id) => ({
                url: `recipes/recipes/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Recipes'],
        }),
        getRecipeById: build.query<Recipe, number>({
            query: (id) => ({
                url: `recipes/recipes/${id}/`,
                method: 'GET',
            }),
        }),
        uploadImageToRecipe: build.mutation<Recipe, {id: string, image: FormData}>({
            query: ({id, image}) => ({
                url: `recipes/recipes/${id}/`,
                method: 'PATCH',
                body: image
            }),
            invalidatesTags: ['Recipes'],
        }),
        createMealPlan: build.mutation<MealPlan, MealPlanData>({
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
    useGetMealPlansQuery,
    useDeleteRecipeMutation,
    useGetRecipeByIdQuery
} = apiSlice