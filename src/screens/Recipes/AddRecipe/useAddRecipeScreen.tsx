import React, {useEffect, useCallback, useState} from 'react'
import { useNavigation } from '../../../navigation/useNavigation'
import routes from '../../../navigation/routes'
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'
import { useAppSelector } from '../../../utils/hooks/useStore'
import { useCreateRecipeMutation, useUploadImageToRecipeMutation } from '../../../store/apiSlice'

export const useAddRecipeScreen = () => {

    const theme = useTheme()
    const styles = useStyles(theme)
    const navigation = useNavigation()

    const goToAddRecipe = () => {
        navigation.navigate(routes.AddRecipeScreen)
    }

    const goBack = () => {
        navigation.goBack()
    }

    const token = useAppSelector(state => state.auth.token)

    const [ createRecipe, {isLoading, error} ] = useCreateRecipeMutation()
    const [ uploadImageToRecipe] = useUploadImageToRecipeMutation()


    //Handle local state
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [link, setLink] = useState('')
    const [step, setStep] = useState('')
    const [steps, setSteps] = useState([])
    const [ingredient, setIngredient] = useState('')
    const [tag, setTag] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [tags, setTags] = useState([])
    const [imageUri, setImageUri] = useState('')
    const [index, setIndex] = useState(0)

    const onSave = async () => {
        const resCreateRecipe = await createRecipe({
            title,
            // description,
            // time_minutes: 0,
            // link,
            // steps,
            // ingredients,
            // tags
            image: null
        }).unwrap()
        if (!error && imageUri && resCreateRecipe?.id) {
            const id = resCreateRecipe.id
            const formData = new FormData()
            formData.append('image', {
                //@ts-ignore
                uri: imageUri,
                type: 'image/jpeg',
                name: imageUri.replace(/^.*[\\\/]/, '')
            })
            const image = formData
            const resUploadImage = await uploadImageToRecipe({id, image}).unwrap()
            if (resUploadImage) {
                goBack()
            }
        }
    }

    //TODO: Handle on skip & on next and add validation

    return {
        goToAddRecipe,
        goBack,
        title,
        setTitle,
        description,
        setDescription,
        duration, 
        setDuration,
        styles,
        link, 
        setLink,
        step, 
        setStep,
        steps,
        ingredient, 
        setIngredient,
        tag, 
        setTag,
        ingredients,
        tags,
        onSave,
        setImageUri,
        index,
        setIndex
    }
}