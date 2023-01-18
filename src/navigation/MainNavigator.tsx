import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RecipeScreen from "../screens/Recipes/AllRecipes/RecipeScreen"
import routes from "./routes"
import { useTheme } from "react-native-paper"
import MealPlannerScreen from "../screens/MealPlanner/MealPlannerScreen"
import ShoppingListScreen from "../screens/Shopping/ShoppingListScreen"
import AddRecipeScreen from '../screens/Recipes/AddRecipe/AddRecipeScreen';

const Tab = createMaterialBottomTabNavigator()

const Main = createNativeStackNavigator()

const TabsNavigator = () => {

    const { colors } = useTheme();
    return (
        <Tab.Navigator 
            barStyle={{ backgroundColor: colors.primary, height: 64 }}
            activeColor={'#fff'}
        >
            <Tab.Screen
                name='Meal Planning'
                options={{ tabBarIcon: 'calendar' }}
                component={MealPlannerScreen}
            />
            <Tab.Screen
                name='Recipes'
                options={{ tabBarIcon: 'food-variant'}}
                component={RecipeScreen}
            />
            {/* <Tab.Screen
                name='Shopping List'
                options={{ tabBarIcon: 'format-list-checkbox' }}
                component={ShoppingListScreen}
            /> */}
        </Tab.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <Main.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Main.Screen name='Dashboard' component={TabsNavigator} />
            <Main.Screen name={routes.AddRecipeScreen} component={AddRecipeScreen} />
        </Main.Navigator>
    )
  
}

export default MainNavigator