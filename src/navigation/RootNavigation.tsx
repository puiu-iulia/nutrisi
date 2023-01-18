import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthNavigator from "./AuthNavigator"
import routes from "./routes"
import { NavigationContainer } from "@react-navigation/native"
import { useAppSelector } from "../utils/hooks/useStore"
import MainNavigator from "./MainNavigator"
import BottomTabs from "./MainNavigator"

const RootStack = createNativeStackNavigator()

const RootNavigator = () => {

    const token = useAppSelector(state => state.auth.token)

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                { token 
                    ? <RootStack.Screen name={routes.MainStack} component={MainNavigator}/>
                    : 
                    <RootStack.Screen name={routes.AuthStack} component={AuthNavigator}/>
                } 
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator