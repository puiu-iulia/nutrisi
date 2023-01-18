import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { useTheme, Card } from 'react-native-paper'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
import { useRecipeScreen } from './useRecipeScreen'
import { colors } from '../../../theme/generalColors'

const RecipeScreen = () => {
    const theme = useTheme()

    const {
        goBack,
        goToAddRecipe,
        recipes
    } = useRecipeScreen()

    return (
        <Screen
            navBarTitle='My Recipes'
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
                        <View style={{width: '48%', borderWidth: 1, borderColor: colors.primaryLightest, borderRadius: 4, overflow: 'hidden', marginTop: 8}}>
                            <View style={{height: 160}}>
                                <Image source={{uri: item.image}} style={{width: '100%', height: '100%'}}/>
                            </View>
                            <View style={{height: 40, justifyContent: 'center'}}>
                                <Text style={{textAlign: 'center'}} numberOfLines={2}>{item.title}</Text>
                            </View>
                        </View>
                    )}

                />
            </View>
        </Screen>
    )
}

export default RecipeScreen