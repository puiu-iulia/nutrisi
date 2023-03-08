import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AllRecipesScreen from "../screens/Recipes/AllRecipes/AllRecipesScreen"
import routes from "./routes"
import { useTheme } from "react-native-paper"
import MealPlannerScreen from "../screens/MealPlanner/MealPlanner/MealPlannerScreen"
import ShoppingListScreen from "../screens/Shopping/ShoppingListScreen"
import AddRecipeScreen from '../screens/Recipes/AddRecipe/AddRecipeScreen'
import AccountScreen from "../screens/Account/AccountScreen"
import CreateMealPlanScreen from "../screens/MealPlanner/SelectMeals/CreateMealPlan"
import RecipeDetailsScreen from "../screens/Recipes/RecipeDetails/RecipeDetailScreen"

//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthNavigator from "./AuthNavigator"

const Tab = createBottomTabNavigator()

const Main = createNativeStackNavigator()

const TabsNavigator = () => {

    const { colors } = useTheme();
    return (
        <Tab.Navigator 
            screenOptions={{ 
                tabBarStyle: { 
                    backgroundColor: colors.primary, paddingBottom: 8, height: 60
                },
                tabBarActiveTintColor: '#fff'
            }}
        >
            <Tab.Screen
                name='Meal Planning'
                options={{
                    headerShown: false,
                    tabBarLabel: 'Meal Planning',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="calendar" color={color} size={26} />
                    ),
                }}
                component={MealPlannerScreen}
            />
            <Tab.Screen
                name='Recipes'
                options={{
                    headerShown: false,
                    tabBarLabel: 'Recipes',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="food-variant" color={color} size={26} />
                    ),
                }}
                component={AllRecipesScreen}
            />
            <Tab.Screen
                name='Account'
                options={{
                    headerShown: false,
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
                component={AccountScreen}
            />
            {/* Add Shopping List Screen */}
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
            <Main.Screen name={routes.AllRecipesScreen} component={AllRecipesScreen} />
            <Main.Screen name={routes.SelectMeals} component={CreateMealPlanScreen} />
            <Main.Screen name={routes.AuthStack} component={AuthNavigator} />
            <Main.Screen name={routes.RecipeDetails} component={RecipeDetailsScreen} />
        </Main.Navigator>
    )
  
}

export default MainNavigator