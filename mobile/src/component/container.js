import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('window').width;

const ContainerConponent = (props) => {    
    const navigator = () => {
        console.log("1")
        props.navigation.navigate('medicine', {
            content: {
                id: props.id,
                title: props.title,
            }
        })
    }

    return (
        <TouchableOpacity 
            key={"component__container_title"+props.title+"_id_"+props.id}
            style={{
                width: width-16,
                maxHeight: 230,
                marginTop: 4,
                marginBottom: 4,
                borderRadius: 8,
                backgroundColor: "#D4D9DA",
            }}
            onPress={() => navigator()}
        >
            <View style={{  
                display: 'flex',
                flexDirection: 'row',
                margin: 15,
                }}
            >
                <View style={{padding: 8 }}>
                    <Image style={{ width: 140, height: 140 }} source={{uri: props.image[0]}} />
                </View>
                <View style={{padding: 5}}>
                    <View>
                        <Text style={{fontSize: 24, fontWeight: '600'}}>{props.title}</Text>
                    </View>
                    <View style={{maxWidth: width-196}}>
                        <Text style={{fontSize: 10, fontFamily: 'Roboto'}} numberOfLines={7}>{props.pharmachologicEffect}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ContainerConponent;