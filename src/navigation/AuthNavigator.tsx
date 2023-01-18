import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthScreen from "../screens/Auth/AuthScreen"
import routes from "./routes"

const AuthStack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name={routes.AuthScreen} component={AuthScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator