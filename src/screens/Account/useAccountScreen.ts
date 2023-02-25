import { useState } from "react"
import { logout } from "../../store/auth/authSlice"
import { useAppDispatch } from "../../utils/hooks/useStore"
import { deleteKey } from "../../services/LocalStorage/secureStore"
import { useNavigation } from '../../navigation/useNavigation'
import routes from "../../navigation/routes"

export const useAccountScreen = () => {

    const { navigate } = useNavigation()

    const dispatch = useAppDispatch()

    const logoutUser = async () => {
        await deleteKey('auth_token')
        dispatch(logout)
        navigate(routes.AuthStack)
    }

    return {
        logoutUser
    }
}