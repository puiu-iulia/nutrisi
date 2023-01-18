import { Provider as PaperProvider } from 'react-native-paper'
import theme from './src/theme/basePaperTheme'
import RootNavigator from './src/navigation/RootNavigation'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

const App = () => {
  return (
    <Provider store={store}>
        <PaperProvider theme={theme}>
            <RootNavigator />
        </PaperProvider>
    </Provider>
    
  );
}

export default App