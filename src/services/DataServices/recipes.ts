import { requestCameraPermissionsAsync } from "expo-image-picker"
import { baseUrl } from "./api"

export const createRecipe = async (token: string, recipe: any) => {
    try {
        const response = await fetch(baseUrl + 'recipes/recipes/', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + token
                },
                body: JSON.stringify(recipe)
        })
        if (response.ok) {
            const resData = await response.json()
            return resData
        }

    } catch (err) {
        console.log(err)
    } 
}

export const uploadImageToRecipe = async (token: string, image: any, recipeId: string) => {
    const formData = new FormData()
    formData.append('image', {
        //@ts-ignore
        uri: image,
        type: 'image/jpeg',
        name: image.replace(/^.*[\\\/]/, '')
    })

    try {
        const response = await fetch(baseUrl + `recipes/recipes/${recipeId}/`, 
            {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Token ' + token,
                },
                body: formData
        })
        if (response.ok) {
            const resData = await response.json()
            return resData
        }

    } catch (err) {
        console.log(err)
    } 
}

export const getAllRecipes = async (token: string) => {
    try {
        const response = await fetch(baseUrl + 'recipes/recipes/', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + token
                },
        })
        if (response.ok) {
            const resData = await response.json()
            return resData
        }

    } catch (err) {
        console.log(err)
    } 
}

