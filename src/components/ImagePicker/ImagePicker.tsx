import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
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
    const [image, setImage] = useState('')
    const theme = useTheme()
    const styles = useStyles(theme)

    //console.log(image)

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
    
        //console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
          onSubmit(result.uri)
        }
      };

    return (
        <View style={styles.mainView}>
            {!image  ?  
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
                        source={{uri: image}}
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
                        {/* <TouchableOpacity style={styles.controlButtonView}>
                            <Icon 
                                name={'close-circle'}
                                size={24}
                                color={colors.greyLight}
                            />
                            <Text>Dwlete Image</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            }
        </View>
    )
}