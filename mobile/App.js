import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from './src/navigation/mainNavigation';
import SaveScreen from './src/screen/saveScreen';
import PharmaciesScreen from './src/screen/pharmaciesScreen';
import ExitSreen from './src/screen/exitSreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen 
                name="Main" 
                component={MainNavigator} 
            />
            <Drawer.Screen
                name="My pharmacy"
                component={SaveScreen}
            />
            <Drawer.Screen
                name="Pharmacies"
                component={PharmaciesScreen}
            />
            <Drawer.Screen
                name="Exit"
                component={ExitSreen}
            />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

