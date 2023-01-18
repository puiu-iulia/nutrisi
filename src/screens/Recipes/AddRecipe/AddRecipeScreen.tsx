import React, {useEffect, useLayoutEffect} from 'react'
import { View, KeyboardAvoidingView, Text, ScrollView, FlatList } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { useTheme } from 'react-native-paper'
import { useAddRecipeScreen } from './useAddRecipeScreen'
import { colors } from '../../../theme/generalColors'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput, Button } from 'react-native-paper'
import { MyImagePicker } from '../../../components/ImagePicker/ImagePicker'

const AddRecipeScreen = () => {
    const theme = useTheme()

    const {
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
        setImage,
        index
    } = useAddRecipeScreen()

    const MainData = (value: any, setValue: any) => {
        return (
            <View>
                <TextInput 
                    label={"Title"}
                    mode="outlined"
                    value={value}
                    onChangeText={setValue}
                    keyboardType="email-address"
                    style={styles.input}
                />
                <MyImagePicker 
                    onSubmit={(file: string) => {setImage(file)}}
                />
            </View>
        )
    }

    //TODO: Create separate components for each of the steps to create a recipe
    //TODO: Add skip button

   

    const DetailsView = () => {
        return (
            <>
                <TextInput 
                    label={"Duration (optional)"}
                    mode="outlined"
                    value={duration}
                    onChangeText={setDuration}
                    //keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput 
                    label={"Link (optional)"}
                    mode="outlined"
                    value={link}
                    onChangeText={setLink}
                    //keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput 
                    label={"Description (optional)"}
                    mode="outlined"
                    value={description}
                    multiline={true}
                    onChangeText={setDescription}
                    //keyboardType="email-address"
                    style={styles.inputDescirption}
                />
            </>
        )
    }

    const ListView= (list: [], listTitle: string, setItem: any, placeholder: string, label: string, value: string, renderListItem: any) => {
        return (
            <>
                <Text>{listTitle}</Text>
                <TextInput 
                    label={label}
                    mode="outlined"
                    value={value}
                    onChangeText={setItem}
                    placeholder={placeholder}
                    //keyboardType="email-address"
                    style={styles.input}
                    left={<TextInput.Icon 
                        icon='plus'
                        color={colors.greyLight}
                        style={{marginTop: 16}}
                    />}
                />
                <FlatList 
                    data={list}
                    renderItem={() => (<></>)}
                    keyExtractor={item => item}
                />
            </>
        )
    }

    const FormView = () => {
        switch(index) {
            case 0:
                return <MainData  value={title} setValue={setTitle} />
            case 1:
                return <ListView list={ingredients} listTitle={'Ingredients'} setItem={setIngredient} placeholder={'Add Ingredient, eg 200g meat, 2 eggs (optional)'} label={'Ingredient'} value={ingredient} />
            case 2:
                return <ListView  list={steps} listTitle={'Steps'} setItem={setStep} placeholder={'Add Step, eg Scramble eggs for 1 min (optional)'} label={'Step'} value={step}/>
            case 3:
                return <ListView list={tags} listTitle={'Tags'} setItem={setTag} placeholder={'Add Tag, eg Vegetarian, Keto'} label={'Tag'} value={tag}/>
            case 4:
                return <DetailsView />
            default: 
                return null
        }
    }

    return (
        <Screen
            navBarTitle='Add New Recipe'
            backgroundColor={colors.white}
            navBarBackgroundColor={theme.colors.primary}
            backArrowButton={true}
            leftButtonAction={goBack}
        >
            <View style={styles.mainView} >
                <View>
                    <TextInput 
                        label={"Title"}
                        mode="outlined"
                        value={title}
                        onChangeText={setTitle}
                        keyboardType="email-address"
                        style={styles.input}
                    />
                    <MyImagePicker 
                        onSubmit={(file: string) => {setImage(file)}}
                />
                </View>
                <View>
                    <Button 
                        onPress={onSave}
                        mode='contained'
                        style={{marginBottom: 24}}
                    >{'Save'}</Button>
                </View>
            </View>
        </Screen>
    )
}

export default AddRecipeScreen