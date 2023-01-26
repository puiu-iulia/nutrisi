import moment from 'moment';
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
//@ts-ignore
import CalendarPicker from 'react-native-calendar-picker';
import { colors } from '../../../theme/generalColors';
import { Screen } from '../../../components/Screen/Screen';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useMealPlannerScreen } from './useMealPlannerScreen';
import { RecipeCard } from '../../../components/RecipeCard/RecipeCard';

const MEAL_TIMES = [
    {
        id: 1,
        title : 'Breakfast'
    },
    {
        id: 2,
        title : 'Lunch'
    },
    {
        id: 3,
        title : 'Snack'
    },
    {
        id: 4,
        title : 'Dinner'
    }
]

const MealPlannerScreen = () => {

    const {
        onAddMeal
    } = useMealPlannerScreen()


    return (
        <Screen navBarHidden={false} navBarTitle={'Nutrisi'} >
            <View >
                <CalendarPicker 
                    onDateChange={(date: any) => console.log(date)}
                    startFromMonday={true}
                    selectedDayColor={colors.primaryLight}
                    selectedDayTextColor={colors.white}
                    minDate={moment.now()}
                    selectedStartDate={moment.now()}
                    restrictMonthNavigation={true}
                    nextTitle={'>'}
                    previousTitle={'<'}
                    nextTitleStyle={{fontSize: 20}}
                    previousTitleStyle={{fontSize: 20}}
                />
            </View>
            <View style={{flex: 1, padding: 12, borderTopColor: colors.greyLightest, borderTopWidth: 4}}>
                <TouchableOpacity 
                    onPress={onAddMeal} 
                    style={{alignItems: 'center', justifyContent: 'center', height: 200, width: '48%', borderColor: colors.primaryLightest, borderWidth: 1, borderRadius: 8}}>
                    <Icon 
                        name={'ios-add-outline'}
                        size={64}
                        color={colors.primary}
                    />
                    <Text style={{color: colors.primary}}>Add Meals</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

export default MealPlannerScreen