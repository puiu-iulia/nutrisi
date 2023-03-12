import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import helpers from '../../theme/helpers'
import { colors } from '../../theme/generalColors'

export const Loading = () => {
    return (
        <View style={[helpers.fillCenter]}>
            <ActivityIndicator 
                size='small' 
                animating={true}
                color={colors.primaryLight}
            />
        </View>
    )
}