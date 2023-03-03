import React from "react";
import { View, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { MyImagePicker } from "../ImagePicker/ImagePicker"
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'

interface IRecipeForm {
    title: string
    setTitle: (title: string) => void
    description?: string
    setDescription?: (description: string) => void
    link?: string
    setLink?: (link: string) => void
    setImageUri: (imageUri: string) => void
    onSave: () => void
}

export const RecipeForm = ({
        title, 
        setTitle, 
        description,
        setDescription,
        link, 
        setLink, 
        setImageUri, 
        onSave
    }: IRecipeForm) => {

    const theme = useTheme()
    const styles = useStyles(theme)

    return (
        <View style={styles.mainView} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextInput 
                    label={"Title"}
                    mode="outlined"
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                />
                <TextInput 
                    label={"Link (optional)"}
                    mode="outlined"
                    value={link}
                    onChangeText={setLink}
                    style={styles.input}
                />
                <TextInput 
                    label={"Description (optional)"}
                    mode="outlined"
                    value={description}
                    multiline={true}
                    onChangeText={setDescription}
                    style={styles.inputDescirption}
            />
                <MyImagePicker 
                    onSubmit={(file: string) => {setImageUri(file)}}
            />
            </ScrollView>
            <View>
                <Button 
                    onPress={onSave}
                    mode='contained'
                    style={{marginBottom: 4}}
                >{'Save'}</Button>
            </View>
        </View>
    )
}