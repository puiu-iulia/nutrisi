import React from 'react'
import { View, Text } from 'react-native'
import { Screen } from '../../components/Screen/Screen'
import { useAccountDetails } from './useAccountDetails'
import { NavBarIcon } from '../../components/NavBarIcon/NavBarIcon'

const AccountDetails = () => {

    const {
        goBack,
        user,
        styles,
        isLoading
    } = useAccountDetails()

    console.log(user)

    return (
        <Screen
            navBarTitle='Account Details'
            leftButton={<NavBarIcon 
                onPress={goBack}
                name='arrow-back'
            />}
        >
            <View style={styles.mainView}>
                <View style={styles.emailContainer}>
                    <Text style={styles.labelText}>Email: </Text>
                    <Text style={styles.emailText}>{user?.email}</Text>
                </View>
            </View>
        </Screen>
    )
}

export default AccountDetails