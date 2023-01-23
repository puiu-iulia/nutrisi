import React from "react"
import { FlatList, Touchable, TouchableOpacity } from "react-native"
import { Text } from 'react-native-paper'

import { Screen } from "../../components/Screen/Screen"
import { useStyles } from "./styles"

const ACCOUNT_DATA = [
    {
        id: 1,
        name: 'Logout'
    },
    {
        id: 2,
        name: 'Account Details'
    }
]

const AccountScreen = () => {

    const styles = useStyles()
    return (
        <Screen navBarTitle="Account">
            <FlatList 
                data={ACCOUNT_DATA}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={styles.mainView}  
                    >
                        <Text style={styles.itemText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </Screen>
    )
}

export default AccountScreen