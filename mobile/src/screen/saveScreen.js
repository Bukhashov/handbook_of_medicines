import React ,{ useState, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivityIndicatorComponent from '../component/activityIndicator';
import axios from 'axios';
import ContainerConponent from '../component/container';
import config from '../../config/config';

const SaveScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(true);
    const [data, setData] = useState([]);

    const getSavedKeys = async () => {
        let savedKeys = await AsyncStorage.getAllKeys();
        if(savedKeys.length >= 1) {
            await getAllSaved(savedKeys);
            
            setIsLoading(false);
            setIsSaved(false);

        }else{
            setIsLoading(false);
            setIsSaved(true);
            return;
        }
    }

    const getAllSaved = async (keys) => {
        try{
            axios.post(`${config.API_URI}${config.API_VERSION}/medicine/byides`, {
                "ides" : keys
            }).then((response) => {
                setData(response.data)
            })
        }
        catch(e){
            console.log(e);
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
                                        data.map((d) => (
                                            <ContainerConponent 
                                                key={d._id}
                                                navigation={navigation}
                                                id={d._id}
                                                image={d.image}
                                                title={d.name}
                                                pharmachologicEffect={d.pharmachologicEffect}
                                            />
                                        ))
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