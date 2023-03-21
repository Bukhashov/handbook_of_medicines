import React ,{ useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivityIndicatorComponent from '../component/activityIndicator';
import config from '../../config/config';
import SlaiderImage from '../component/slaider';
import ContentContainer from '../component/content';
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const MedicineScreen = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [dataKeys, setDataKeys] = useState([]);
    const [saved, setSaved] = useState(false);

    const getObjectKeys = async (mapKeys) => {
        let keys = Object.keys(mapKeys)
        keys = keys.filter(key => { return key != 'image' && key != 'name' && key != "_id" && key != "__v"});
        await setDataKeys(keys)
    }

    const featData = async () => {
        try {
            await axios.get(`${config.API_URI}${config.API_VERSION}/medicine/${props.route.params.content.id}`).then(async(response) => {
                await setData(response.data)
                await getObjectKeys(response.data)
                setIsLoading(false)  
            })
        }
        catch(e){
            console.log(e);
        }
    }

    const isSaved = async () => {
        let save = await AsyncStorage.getItem(props.route.params.content.id);
        if(save) setSaved(true);
        else setSaved(false);
    }

    const onPressSaved = async () => {
        if(saved){
            await AsyncStorage.removeItem(props.route.params.content.id);
            setSaved(false);
        }
        else{
            await AsyncStorage.setItem(props.route.params.content.id, "saved");
            setSaved(true);
        }        
    }

    useFocusEffect(
        React.useCallback(() => {
            featData();
            isSaved();
        }, [])
    )

    return (
        <View style={{}}>
            {
                isLoading
                ? (
                    <ActivityIndicatorComponent /> 
                )
                : (
                    <SafeAreaView>
                        <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                            <View>
                                <SlaiderImage 
                                    key={"slaider_image"+props.route.params.content.id}
                                    id={props.route.params.content.id}
                                    images={data.image}
                                />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <View style={{ width: width-16, padding: 8, backgroundColor: "#fff", borderTopLeftRadius: 8, borderTopRightRadius: 8, }} >
                                <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{data.name}</Text>
                                    </View>
                                    <View>
                                        <Ionicons name={saved 
                                            ? 'bookmark' 
                                            : 'bookmark-outline'
                                            } 
                                            size={24}
                                            color={"black"}
                                            onPress={() => onPressSaved()}
                                        />
                                    </View>
                                </View>

                                <View>
                                    {
                                        dataKeys.map((key) => (
                                            <ContentContainer
                                                title={key}
                                                content={data[key][0]}
                                            />
                                        ))
                                    }
                                </View>
                               
                            </View>
                            </View>

                        </ScrollView>
                    </SafeAreaView>
                )
            }
        </View>
    )
}

export default MedicineScreen;