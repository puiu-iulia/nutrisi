import React from 'react'
import { View, FlatList } from 'react-native'

import { useStyles } from './styles'
import { RecipeCard } from '../RecipeCard/RecipeCard'

interface IRecipeList {
    onDelete?: (id: number) => void,
    onPress: (id: number) => void,
    data?: any[]
}

export const RecipeList = ({onPress, data, onDelete} : IRecipeList) => {

    const styles = useStyles()


    return (
        <View style={styles.mainView}>
            <FlatList 
                style={styles.list}
                data={data}
                numColumns={2}
                columnWrapperStyle={styles.columnStyle}
                renderItem={({item}: {item: any}) => (
                    <RecipeCard 
                        uri={item.image}
                        title={item.title}
                        onPress={onPress}
                        onDelete={onDelete}
                        id={item.id}
                        selected={item.selected}
                    />
                )}
            />
        </View>
    )
}