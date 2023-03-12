import moment from 'moment';
import React from 'react'
import { View } from 'react-native'
//@ts-ignore
import CalendarPicker from 'react-native-calendar-picker';
import { colors } from '../../../theme/generalColors';
import { Screen } from '../../../components/Screen/Screen';
import { useMealPlannerScreen } from './useMealPlannerScreen';
import { RecipeList } from '../../../components/RecipeList/RecipeList';
import { AddButtonCard } from '../../../components/AddButtonCard/AddButtonCard';
import { Loading } from '../../../components/Loading/Loading';

const MealPlannerScreen = () => {

    const {
        onAddMeal,
        dailyMeals,
        styles,
        setSelectedDate,
        filterMeals,
        onMealPress,
        meals,
        removeMeal,
        isLoading
    } = useMealPlannerScreen()

    if (isLoading) {
        return <Loading />
    }

    return (
        <Screen navBarHidden={false} navBarTitle={'Nutrisi'} >
            <View style={styles.calendarContainer}>
                <CalendarPicker 
                    onDateChange={(date: any) => {
                            setSelectedDate(date)
                            filterMeals(date)
                        }}
                    startFromMonday={true}
                    selectedDayColor={colors.primaryLight}
                    selectedDayTextColor={colors.white}
                    minDate={moment.now()}
                    restrictMonthNavigation={true}
                    nextTitle={'>'}
                    previousTitle={'<'}
                    nextTitleStyle={{fontSize: 20, color: colors.greyLighter}}
                    previousTitleStyle={{fontSize: 20, color: colors.greyLighter}}
                />
            </View>
            {dailyMeals ? 
                <RecipeList
                    data={dailyMeals}
                    onPress={onMealPress}
                    onDelete={removeMeal}
                />
                :
                <AddButtonCard 
                    onPress={onAddMeal}
                    buttonTitle={'Add Meals'}
                />
            }
        </Screen>
    )
}

export default MealPlannerScreen