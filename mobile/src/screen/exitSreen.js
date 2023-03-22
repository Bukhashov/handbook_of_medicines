import React, {useEffect} from 'react';
import { BackHandler, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const ExitSreen = () => {
    useFocusEffect(
        React.useCallback(()=>{
            setTimeout(() => {
                BackHandler.exitApp();
             }, 10);
        }, [])
    ); 
}

export default ExitSreen;