import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from './src/navigation/mainNavigation';
import SaveScreen from './src/screen/saveScreen';

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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

