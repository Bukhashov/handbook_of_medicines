import React ,{ useState, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivityIndicatorComponent from '../component/activityIndicator';

const SaveScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(true);

    const getSavedKeys = async () => {
        let savedKeys = await AsyncStorage.getAllKeys();
        if(savedKeys.length >= 1) {
            await getAllSaved(savedKeys);
            // loading false
            // 

        }else{
            setIsLoading(false);
            setIsSaved(true);
            return;
        }
    }

    const getAllSaved = async (keys) => {
        try{
            
        }
        catch(e){

        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getSavedKeys();
        })
    )
    
    return (
        <View>
            {
                isLoading
                ? ( 
                    <ActivityIndicatorComponent />
                )
                : (
                    isSaved 
                    ? (
                        <View />
                    )
                    : (
                        <SafeAreaView>
                            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
                                <View style={{ padding: 8 }}>
                                    {
                                        
                                    }
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    )
                )
            }
        </View>
    )
}

export default SaveScreen;