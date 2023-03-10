import React, { useEffect } from "react"
import { Text, KeyboardAvoidingView, View, Platform } from 'react-native'
import { useTheme, TextInput, Button, ActivityIndicator } from "react-native-paper"
import { useAuthScreen } from "./useAuthScreen"
import { colors } from "../../theme/generalColors"
import helpers from "../../theme/helpers"
import { Loading } from "../../components/Loading/Loading"
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'

const AuthScreen = () => {

    const { 
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
        emailErrorMessage,
        passwordErrorMessage,
        handleAuthValidation,
        tryAuth,
        isLoading
    } = useAuthScreen()

    useEffect(() => {
        tryAuth()
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.mainView}
        >
            <View style={styles.screen}>
                <Text style={styles.logo}>Nutrisi</Text>
                <Text style={styles.headerText}>Nutrition made easy</Text>
                <View style={styles.inputViewContainer}>
                    <TextInput 
                        label={"Email"}
                        mode="outlined"
                        value={email}
                        onChangeText={handleEmailChange}
                        keyboardType="email-address"
                        style={styles.input}
                        error={emailError}
                    />
                    <View style={styles.errorTextContainer}>
                        {emailError ? (
                        <Text style={styles.errorText}>{emailErrorMessage}</Text>
                        ) : null}
                    </View>
                    <TextInput 
                        label={"Password"}
                        value={password}
                        mode="outlined"
                        onChangeText={handlePasswordChange}
                        secureTextEntry={isPasswordVisible}
                        error={passwordError}
                        style={styles.input}
                        right={<Icon
                            name={isPasswordVisible ? "eye" : "eye-off"}
                            color={'#505050'}
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        />}
                    />
                    <View style={styles.errorTextContainer}>
                        {passwordError ? (
                        <Text style={styles.errorText}>{passwordErrorMessage}</Text>
                        ) : null}
                    </View>
                    <View style={styles.switchContainer}>
                        <Text>
                            {!isLogin 
                            ? 'Already have an account?' 
                            : 'Don\'t have an account?'}
                        </Text>
                        <Button
                            mode="text" 
                            dark={false}
                            onPress={() => setIsLogin(!isLogin)}
                        >{!isLogin ? 'Login' : 'Sign up'}</Button>
                    </View>
                    <Button
                        mode="contained" 
                        style={styles.button}
                        dark={true}
                        color='#fff'
                        onPress={handleAuthValidation}
                    >{isLogin ? 'Login' : 'Sign up'}</Button>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen