import React ,{ useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const navigation = useNavigation()

  useFocusEffect(
    React.useCallback(() => {
      const Init = async () => {
        await AsyncStorage.getItem("uid").then(uid => {
          navigation.navigate('auth')
        })
      }
      Init()
    })
  )

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
