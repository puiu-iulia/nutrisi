import useHttp from "../../utils/hooks/useHttp"
import { baseUrl } from "../../store/apiSlice"
import { saveKey } from "../LocalStorage/secureStore"

export const signup = async (email: string, password: string) => {

    try {
        const response = await fetch(baseUrl + 'users/create/', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password})
        })
        console.log(response.status)
        if (response.ok) {
            const token = await login(email, password)
                return token
        }

    } catch (err) {
        return(err)
    } 
}

export const login = async (email: string, password: string) => {

    try {
        const response = await fetch(baseUrl + 'users/token/', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password})
        })
        const data = await response.json()
        if (data && typeof(data.token) == 'string') {
            await saveKey('auth_token', data.token)
            return data.token
        }

    } catch (err: any) {
        console.log(err.message)
    } 
}