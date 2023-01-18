import React, {useEffect, useCallback, useState} from 'react'
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'
import { useAppDispatch } from '../../utils/hooks/useStore'
import { setAuthData } from '../../store/auth/authSlice'
import { login, signup } from '../../services/DataServices/authentication'
import { getKey } from '../../services/LocalStorage/secureStore'
import * as SecureStore from 'expo-secure-store'

export const useAuthScreen = () => {

    const theme = useTheme()
    const styles = useStyles(theme)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useAppDispatch()

    const handleEmailChange = (text: string) => {
        setEmailError(false)
        setEmail(text)
    }
    
    const handlePasswordChange = (text: string) => {
        setPasswordError(false)
        setPassword(text)
    }

    const handleAuthValidation = () => {
        const passwordInput= password.trim()
        const emailInput = email.trim()
        //email validation
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
          setEmailError(true)
          return
        }
        //password validation
        if (passwordInput.length === 0 || passwordInput.length < 8) {
          setPasswordError(true)
          return
        }
        handleAuth(emailInput, passwordInput)
    }

    const handleAuth = async(email: string, password: string) => {
        let token = null
        if (isLogin) {
            token = await login(email, password)
            console.log('token', token)
        } else {
            token = await signup(email, password)
        }
        dispatch(setAuthData({token}))
    }

    const tryAuth = async () => {
        const localToken = await getKey('auth_token')
        if (localToken && typeof(localToken) == 'string') {
            console.log('loal token', localToken)
            dispatch(setAuthData({token: localToken}))
        } else {
            setIsLoading(false)
        }
    }

    return {
        styles,
        email,
        handleEmailChange,
        password,
        handlePasswordChange,
        isLogin,
        setIsLogin,
        isPasswordVisible,
        setIsPasswordVisible,
        emailError,
        passwordError,
        handleAuthValidation,
        tryAuth,
        isLoading
    }
}