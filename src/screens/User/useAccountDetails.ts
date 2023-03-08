import { useNavigation } from "../../navigation/useNavigation";
import { useGetUserQuery } from "../../store/apiSlice";
import { useStyles } from "./styles";

export const useAccountDetails = () => {
    const { goBack } = useNavigation()
    const { data, isLoading, error } = useGetUserQuery()
    const styles = useStyles()

    return {
        user: data,
        isLoading,
        error,
        goBack,
        styles
    }
}