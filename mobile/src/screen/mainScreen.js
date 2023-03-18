import React ,{ useState, useEffect} from 'react';
import {ActivityIndicator ,View, Text, SafeAreaView, ScrollView} from 'react-native';
import ActivityIndicatorComponent from '../component/activityIndicator';
import axios from 'axios';
import ContainerConponent from '../component/container';
import SearchComponent from '../component/search';

import config from '../../config/config';


const MainScreen = ({navigation}) => {
    const [containers, setContainers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const featData = async () => {
        try {
            await axios.get(`${config.API_URI}${config.API_VERSION}/medicines`).then((response) => {
                setContainers(response.data);
                setIsLoading(false);
            })
        }
        catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        featData();
    }, [])
    
    return (
        <View>
            <SearchComponent />
            {
                isLoading
                ? ( 
                    <ActivityIndicatorComponent /> 
                ) 
                : ( 
                    <SafeAreaView>
                        <ScrollView 
                            horizontal={true} 
                            showsHorizontalScrollIndicator={true}
                        >
                            <View style={{ padding: 5 }}>
                                {
                                    containers.map((container)=> (
                                        <ContainerConponent 
                                            navigator={navigation}
                                            id={container._id}
                                            image={container.image}
                                            title={container.name}
                                        />
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                )
            }
        </View>
    )
}

export default MainScreen;