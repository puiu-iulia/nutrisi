export interface User {
    email: string
    userId: string,
    userName: string | null
}

export interface AuthState {
    token: string | null
}

export interface Recipe {
    id: number,
    image: string | null,
    title: string,
    description: string | null,
    link: string | null
}

export interface RecipeId {
    id: number
}

export interface RecipeData {
    image: string | null,
    title: string,
    description: string | null,
    link: string | null
}

export interface MealPlan {
    id: number,
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

export interface MealPlanRecipes {
    recipes: RecipeId[]
}

export interface User {
    email: string,
    name: string | null,
}
