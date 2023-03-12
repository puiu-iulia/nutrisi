import React from "react";
import { View, TouchableOpacity, Text, Linking } from 'react-native'
//@ts-ignore
import Image from 'expo-fast-image'
import { Screen } from "../../../components/Screen/Screen";
import { NavBarIcon } from "../../../components/NavBarIcon/NavBarIcon";
import { useRecipeDetails } from "./useRecipeDetails";
import { Loading } from "../../../components/Loading/Loading";

const RecipeDetailScreen = () => {

    const {
        recipe,
        goBack,
        styles,
        isLoading
    } = useRecipeDetails()

    if (isLoading) {
        return <Loading />
    }

    return (
        <Screen  
            navBarTitle={'Details'}
            leftButton={<NavBarIcon 
                onPress={goBack}
                name='arrow-back'
            />}
        >
            <View style={styles.mainView}>
                <View style={styles.titleContainer}>
                    <Text style={styles.recipeTitle}>{recipe?.title}</Text>
                </View>
                {recipe?.link &&  
                    <View style={styles.linkContainer}>
                        <Text style={styles.linkText}>Link: </Text>
                        <TouchableOpacity onPress={() => Linking.openURL(recipe?.link || '')}>
                            <Text style={styles.link}>{recipe?.link}</Text>
                        </TouchableOpacity>
                    </View> 
                }
                {recipe?.description && 
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.linkText}>{recipe?.description}</Text>
                    </View>}
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: recipe?.image}} 
                    />
                </View>
            </View>
        </Screen>
    )
}

export default RecipeDetailScreen