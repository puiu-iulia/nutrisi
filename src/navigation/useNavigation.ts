import {useContext} from 'react'
import {
	NavigationContext,
	useRoute,
} from '@react-navigation/native'

export const useNavigation = () => {
	const navigator: any = useContext(NavigationContext)
	const {params} = useRoute()
	const navigate = (screen: string, params?: object) => {
		return navigator.navigate(screen, params)
	}

    const getParam = (key: string) => {
		// @ts-ignore
		return params ? params[key] : undefined
	}

	const goBack = () => {
		navigator.goBack()
	}

    const dismissStack = () => {
        navigator.dangerouslyGetParent()?.goBack()
    }

	return {
		navigator,
		navigate,
		goBack,
		getParam,
        dismissStack
	}
}
