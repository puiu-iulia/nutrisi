import { authActions } from "./authSlice"
import { signup, login } from "../../services/DataServices/authentication"
import { AppDispatch } from "../store"

export const authenticate = async(email: string, password: string, isLogin: boolean) => {
    return async (dispatch: AppDispatch) => {
        let token = null
        if (isLogin) {
            token = await login(email, password)
        } else {
            token = await signup(email, password)
        }
        console.log('token', token)
        dispatch(authActions.setAuthData({token}))
    }
}