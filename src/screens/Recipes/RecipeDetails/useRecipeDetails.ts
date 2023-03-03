import { useNavigation } from "../../../navigation/useNavigation";
import { useGetRecipeByIdQuery } from "../../../store/apiSlice";
import { useStyles } from "./styles"
import { useTheme } from 'react-native-paper'

export const useRecipeDetails = () => {
    const styles = useStyles(useTheme())

    const { getParam, goBack } = useNavigation();
    const recipeId = getParam("recipeId");
    const { data, isLoading, error } = useGetRecipeByIdQuery(recipeId);
    
    return {
        recipe: data,
        isLoading,
        error,
        goBack,
        styles
    };
}