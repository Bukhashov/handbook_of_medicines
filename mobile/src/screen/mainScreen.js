import React ,{ useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import ActivityIndicatorComponent from '../component/activityIndicator';
import axios from 'axios';
import { SearchBar } from '@rneui/themed';
import ContainerConponent from '../component/container';
import config from '../../config/config';


const MainScreen = ({navigation}) => {
    const [containers, setContainers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [search, setSearch] = useState('');

    const featData = async () => {
        try {
            await axios.get(`${config.API_URI}${config.API_VERSION}/medicines`).then((response) => {
                setContainers(response.data);
                setIsLoading(false);
                getDataNames()
            })
        }
        catch(e) {
            console.log(e);
        }
    }

    const getDataNames = async () => {
        let dataName = []
        console.log(containers)
        // for(let i=0; i<containers.length; i++){
        //     dataName.push(containers[i].name)
        // }
        // setMasterDataSource(dataName)
    }

    const searchFilter = (text) => {
        if(text){
            const newData = masterDataSource.filter((item) => {
                const itemData = item ? item.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            })
            setFilteredDataSource(newData);
            setSearch(text);
        }else{
            setSearch(text)
        }
    }

    useEffect(() => {
        featData();
    }, [])
    
    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                backgroundColor: '#C8C8C8',
                }}
            />
        );
    }

    return (
        <View style={{ }} >
            <SearchBar
                round
                searchIcon={{size: 24}}
                onChangeText={(text) => searchFilter(text)}
                onClear={(text) => searchFilter('')}
                value={search}
                inputStyle={{backgroundColor: '#fff', borderRadius: 3, }}
                inputContainerStyle={{backgroundColor: '#D4D9DA', borderRadius: 8, }}
                containerStyle={{backgroundColor: "#fff", borderBottomColor: "#fff", borderTopColor: "#fff"}}
                placeholderTextColor={'#D4D9DA'}
                placeholder={'Search'}
            />

            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
            />

            {
                isLoading
                ? ( 
                    <ActivityIndicatorComponent /> 
                ) 
                : ( 
                    <SafeAreaView>
                        <ScrollView 
                            horizontal={false}
                            showsHorizontalScrollIndicator={true}
                        >
                            <View style={{ padding: 8 }}>
                                {
                                    containers.map((container)=> (
                                        <ContainerConponent 
                                            key={container._id}
                                            navigation={navigation}
                                            id={container._id}
                                            image={container.image}
                                            title={container.name}
                                            pharmachologicEffect={container.pharmachologicEffect}
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