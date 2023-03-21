import React, {useState} from 'react';
import { View, Dimensions } from "react-native";
import MapView ,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';

const PharmaciesScreen = ({navigation}) => {
    const { width, height } = Dimensions.get("window");
    
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELETA = 0.09;
    const LONGITUDE_DELTA = LATITUDE_DELETA * ASPECT_RATIO;

    const [mapRegion, setMapRegion] = useState({
        latitude: 49.8057253,
        longitude: 73.077113,
        latitudeDelta: LATITUDE_DELETA,
        longitudeDelta: LONGITUDE_DELTA,
    })

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922,
        })
    }

    useFocusEffect(
        React.useCallback(()=>{
            getLocation()
        }, [])
    )

    return (
        <View>
            <MapView
              style={{width: '100%', height: '100%', backgroundColor: '#0000',}} 
              provider={PROVIDER_GOOGLE}
              region={mapRegion}
              >
                <Marker coordinate={mapRegion} title="marker"/>
            </MapView>
        </View>
    )
}

export default PharmaciesScreen;