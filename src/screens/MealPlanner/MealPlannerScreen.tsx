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
        <Screen navBarTitle={'Meal Planning'}>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{flex: 1, backgroundColor: 'white'}}>
                    <View style={{height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.primaryLightest, padding: 8}}>
                        <Text style={{fontSize: 18}}>Select Recipe</Text>
                        <TouchableOpacity onPress={hideModal} >
                            <Icon 
                                name={'close-sharp'}
                                size={24}
                                color={colors.greyLight}
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
                                <TouchableOpacity 
                                    onPress={() => {}}
                                    style={{width: '48%', borderWidth: 1, borderColor: colors.primaryLightest, borderRadius: 4, overflow: 'hidden', marginTop: 8}}
                                >
                                    <View style={{height: 160}}>
                                        <Image source={{uri: item.image}} style={{width: '100%', height: '100%'}}/>
                                    </View>
                                    <View style={{height: 40, justifyContent: 'center'}}>
                                        <Text style={{textAlign: 'center'}} numberOfLines={2}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
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
            <FlatList 
                data={MEAL_TIMES}
                numColumns={2}
                renderItem={({item}: {item: any}) => (
                    <View style={{width: '50%', alignSelf: 'center', borderTopColor: '#F5F5F5', borderTopWidth: 5}}>
                        <View style={{marginBottom: 4, flex: 1}}>
                            <View style={{marginVertical: 4, alignItems: 'center'}}>
                                <Text>{item.title}</Text>
                            </View>
                            <View style={{height: 120, alignItems: 'center'}}>
                                <TouchableOpacity 
                                    onPress={() => {
                                        showModal()
                                    }} 
                                    style={{height: 80, width: 80, backgroundColor: colors.primaryLightest, borderRadius: 4, alignItems: 'center'}}>
                                    <Icon 
                                        name={'ios-add-outline'}
                                        size={80}
                                        color={colors.white}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </Screen>
    )
}

export default MealPlannerScreen