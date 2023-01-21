import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { useTheme, Card } from 'react-native-paper'
//@ts-ignore
import ExpoFastImage from 'expo-fast-image'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
//@ts-ignore
import { useStyles } from "./styles"
import { useRecipeScreen } from './useRecipeScreen'
import { colors } from '../../../theme/generalColors'
import { RecipeCard } from '../../../components/RecipeCard/RecipeCard'

const RecipeScreen = () => {
    const theme = useTheme()

    const {
        goBack,
        goToAddRecipe,
        recipes
    } = useRecipeScreen()

    return (
        <Screen
            navBarTitle='Recipes'
            backgroundColor={colors.white}
            navBarBackgroundColor={theme.colors.primary}
            rightButtonTitle='Add Recipe'
            navBarTitleColor={theme.colors.white}
            rightButton={
                <TouchableOpacity onPress={goToAddRecipe}>
                    <Icon 
                        name={'ios-add-outline'}
                        size={24}
                        color={colors.white}
                    />
                </TouchableOpacity>}
        >
            <View style={{flex: 1}}>
                <FlatList 
                    style={{marginHorizontal: 8}}
                    data={recipes}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    renderItem={({item}: {item: any}) => (
                        <RecipeCard 
                            uri={item.image}
                            title={item.title}
                        />
                    )}

                />
            </View>
        </Screen>
    )
}

export default RecipeScreen