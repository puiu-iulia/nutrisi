import moment from 'moment';
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
//@ts-ignore
import CalendarPicker from 'react-native-calendar-picker';
import { colors } from '../../theme/generalColors';
import { Screen } from '../../components/Screen/Screen';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useMealPlannerScreen } from './useMealPlannerScreen';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';

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
        recipes,
        visible,
        showModal,
        hideModal,
    } = useMealPlannerScreen()

    console.log('recipes', recipes)

    return (
        <Screen navBarHidden={false} navBarTitle={'Nutrisi'} >
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{flex: 1, backgroundColor: 'white'}}>
                    <View style={{height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.primary, padding: 8}}>
                        <Text style={{fontSize: 18, textAlign: 'center', color: colors.white}}>Add Meal</Text>
                        <TouchableOpacity onPress={hideModal} >
                            <Icon 
                                name={'close-sharp'}
                                size={24}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <FlatList 
                            style={{marginHorizontal: 16}}
                            data={recipes}
                            numColumns={2}
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            renderItem={({item}: {item: any}) => (
                                <RecipeCard 
                                    uri={item.image}
                                    title={item.title}
                                />
                            )}

                        />
                    </View>
                </Modal>
            </Portal>
            <View >
                <CalendarPicker 
                    onDateChange={(date: any) => console.log(date)}
                    startFromMonday={true}
                    selectedDayColor={colors.primaryLightest}
                    ini
                    minDate={moment.now()}
                    restrictMonthNavigation={true}
                />
            </View>
            {/* <FlatList 
                data={MEAL_TIMES}
                numColumns={2}
                style={{borderTopColor: '#F5F5F5', borderTopWidth: 5}}
                columnWrapperStyle={{justifyContent: 'space-around'}}
                renderItem={({item}: {item: any}) => (
                    <View style={{width: '46%', alignSelf: 'center', marginTop: 8}}>
                        <View style={{marginBottom: 4, alignItems: 'center'}}>
                            <Text>{item.title}</Text>
                        </View>
                   
                    </View>
                )}
            /> */}
            <View style={{flex: 1, padding: 12, borderTopColor: colors.greyLightest, borderTopWidth: 4}}>
                <TouchableOpacity 
                    onPress={() => {
                        showModal()
                    }} 
                    style={{alignItems: 'center', justifyContent: 'center', height: 160, width: 160, borderColor: colors.primaryLightest, borderWidth: 1, borderRadius: 4}}>
                    <Icon 
                        name={'ios-add-outline'}
                        size={64}
                        color={colors.primary}
                    />
                    <Text style={{color: colors.primary}}>Add Meal</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

export default MealPlannerScreen