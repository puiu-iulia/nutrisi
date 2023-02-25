import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth/authSlice"
import recipesSlice from "./recipes/recipeSlice"
import { apiSlice } from "../services/DataServices/api"

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        recipes: recipesSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch