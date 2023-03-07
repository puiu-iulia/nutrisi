import moment from 'moment';
import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
//@ts-ignore
import CalendarPicker from 'react-native-calendar-picker';
import { colors } from '../../../theme/generalColors';
import { Screen } from '../../../components/Screen/Screen';
//@ts-ignore
import Image from 'expo-fast-image'
import { useMealPlannerScreen } from './useMealPlannerScreen';
import { RecipeList } from '../../../components/RecipeList/RecipeList';

const MealPlannerScreen = () => {

    const {
        onAddMeal,
        dailyMeals,
        styles,
        setSelectedDate,
        filterMeals,
        onMealPress
    } = useMealPlannerScreen()

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
            {dailyMeals.length > 0 ? 
                <RecipeList
                    data={dailyMeals}
                    onPress={onMealPress}
                />
                :
                <View style={styles.cardContainer}>
                    <TouchableOpacity 
                        onPress={onAddMeal} 
                        style={styles.mainView}
                    >
                        <View style={styles.imageContainer}>
                            <Image 
                                style={styles.image}
                                source={{uri: ''}} 
                                defaultSource={require('../../../../assets/placeholder.png')}
                            />
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Add Meals</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }
        </Screen>
    )
}

export default MealPlannerScreen