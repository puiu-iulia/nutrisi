import * as SecureStore from 'expo-secure-store'

export const saveKey = async (key: string, value: any) => {
    try {
        await SecureStore.setItemAsync(key, value)
    } catch (e) {
        console.log('Secure store save error', e)
    }
}

export const getKey = async (key: string) => {
    try {
        const storeData = await SecureStore.getItemAsync(key)
        return storeData
    } catch (e) {
        console.log('Secure store get error', e)
    }
} 

export const deleteKey = async (key: string) => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (e) {
        console.log('Secure store delete error', e)
    }
} 
