import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Image, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme/generalColors'
import { useStyles } from './styles'
import { useTheme } from 'react-native-paper'

interface IImagePicker {
    onSubmit: (arg0: any) => void
}

export const MyImagePicker = ({onSubmit} : IImagePicker) => {
    const [imageUri, setImageUri] = useState('')
    const theme = useTheme()
    const styles = useStyles(theme)

    const pickImage = async () => {
        if (Platform.OS == 'ios') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
        });
    
    
        if (!result.canceled) {
          setImageUri(result.assets[0].uri);
          onSubmit(result.assets[0].uri)
        }
      };

    return (
        <View style={styles.mainView}>
            {!imageUri  ?  
                <TouchableOpacity onPress={pickImage} style={styles.buttonView}>
                    <Text>Add an image</Text>
                    <View>
                        <Icon 
                            name={'ios-camera'}
                            size={48}
                            color={colors.greyLight}
                        />
                    </View>
                </TouchableOpacity> : 
                <View style={styles.imageView} >
                    <Image 
                        source={{uri: imageUri}}
                        style={styles.image}
                    />
                    <View style={styles.buttonsView}>
                        <TouchableOpacity 
                            style={styles.controlButtonView}
                            onPress={pickImage}
                        >
                            <Icon 
                                name={'ios-camera'}
                                size={24}
                                color={colors.greyLight}
                            />
                            <Text style={styles.buttonText}>Change Image</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}