import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('window').width;

const ContainerConponent = (props) => {    
    const navigator = () => {
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
            onPress={() => navigator()}
        >
            <View style={{ width: width-20 }}>
                <View style={{}}>
                    <Image style={{ width: 160, height: 200 }} source={{uri: props.image[0]}} />
                </View>
                <View>
                    <Text>{props.title}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

export default ContainerConponent;