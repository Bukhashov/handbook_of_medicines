import * as React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screen/mainScreen';
import MedicineScreen from '../screen/medicineScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="main" component={MainScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="medicine" component={MedicineScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default MainNavigator;
