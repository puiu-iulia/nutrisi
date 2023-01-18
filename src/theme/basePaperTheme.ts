import { DefaultTheme} from 'react-native-paper'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#7AC74F',
        primaryLight: '#A1CF6B',
        secondary: '#D5D887',
        secondaryLight: '#E0C879',
        accent: '#E87461',
        error: '#E87461',
        white: '#fff'
    },
    customColors: {
        primaryLight: '#A1CF6B',
    }
}

export default theme