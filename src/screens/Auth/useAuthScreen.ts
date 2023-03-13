import { useState } from 'react'
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'
import { useAppDispatch } from '../../utils/hooks/useStore'
import { setAuthData } from '../../store/auth/authSlice'
import { login, signup } from '../../services/DataServices/authentication'
import { getKey } from '../../services/LocalStorage/secureStore'

export const useAuthScreen = () => {

    const theme = useTheme()
    const styles = useStyles(theme)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('')
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useAppDispatch()

    const handleEmailChange = (text: string) => {
        setEmailError(false)
        setEmailErrorMessage('')
        setEmail(text)
    }
    
    const handlePasswordChange = (text: string) => {
        setPasswordError(false)
        setPasswordErrorMessage('')
        setPassword(text)
    }

    const handleAuthValidation = () => {
        const passwordInput= password.trim()
        const emailInput = email.trim()
        //email validation
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
          setEmailError(true)
          setEmailErrorMessage('Please enter a valid email address')
          return
        }
        //password validation
        if (passwordInput.length === 0 || passwordInput.length < 8) {
          setPasswordError(true)
          setEmailErrorMessage('Password must be at least 8 characters long.')
          return
        }
        handleAuth(emailInput, passwordInput)
    }

    const handleAuth = async(email: string, password: string) => {
        setIsLoading(true)
        let tokenResponse = null
        if (isLogin) {
            tokenResponse = await login(email, password)
        } else {
            tokenResponse = await signup(email, password)
        }
        setIsLoading(false)
        if (token && typeof(token) == 'string') {
            dispatch(setAuthData({token}))
        } else {
            setEmailError(true)
            setPasswordError(true)
            setEmailErrorMessage('Unable to authenticate. Please try again.')
            setPasswordErrorMessage('')
        }
    }

    const tryAuth = async () => {
        const localToken = await getKey('auth_token')
        if (localToken && typeof(localToken) == 'string') {
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
        emailErrorMessage,
        passwordErrorMessage,
        emailError,
        passwordError,
        handleAuthValidation,
        tryAuth,
        isLoading
    }
}