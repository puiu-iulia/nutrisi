export interface User {
    email: string
    userId: string,
    userName: string | null
}

export interface AuthState {
    token: string | null
}

export interface Recipe {
    id: string,
    image: string | null,
    title: string
}

export interface RecipeId {
    id: string
}

export interface RecipeData {
    image: string | null,
    title: string
}

export interface MealPlan {
    id: string,
    date: string,
    recipes: Recipe[]
}

export interface RecipesState {
   recipes: Recipe[]
}

export interface MealPlanData {
    date: string,
    recipes: RecipeId[]
}
