import React from "react";
import { View, Text, Pressable } from 'react-native'
//@ts-ignore
import Image from 'expo-fast-image'
import { useStyles } from "./styles";

interface IAddButtonCard {
    buttonTitle: string
    onPress: () => void
}

export const AddButtonCard = ({buttonTitle, onPress}: IAddButtonCard) => {

    const styles = useStyles()

    return (
        <View style={styles.cardContainer}>
            <Pressable 
                style={styles.mainView}
                onPress={onPress}
            >
                  <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'http://www.pisoft.tech/wp-content/uploads/2023/03/Untitled-design.png'}} 
                        defaultSource={require('../../../assets/placeholder.png')}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{buttonTitle}</Text>
                </View>
            </Pressable>
        </View>
    )
}