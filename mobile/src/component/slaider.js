import React from 'react';
import {Text, View, ScrollView, Image, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const SlaiderImage = (props) => {
    let count = 1;
    return (
        <View key={"component__slaider_id"+props.id}>
            <ScrollView 
                style={{ 
                    position: 'relative', 
                }} 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
            >
                {
                    props.images.map((image) => (
                        <Image 
                            key={"component__slaider_image_id"+props.id+"_count_"+count}
                            style={{
                                width: width, 
                                height: 220
                            }}
                            source={{ 
                                uri: image 
                            }}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default SlaiderImage;