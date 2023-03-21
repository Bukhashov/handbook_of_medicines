import React ,{ useState} from 'react';
import { View, Text } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import Titles from "../constant/title";
import LineComponent from './line';


const ContentContainer = (props) => {
    const [title, setTitle] = useState("");

    const comparisonsTitles = async () => {
        for(let i=0; i < Titles.length; i++){
            if(Titles[i].title == props.title){
                setTitle(Titles[i].data);
                return
            }
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            comparisonsTitles()
        })
    )

    return (
        <View key={"component__content_title"+props.title}>
            <LineComponent />
            <View>
                <Text style={{ fontSize: 18, marginLeft: 8, paddingBottom: 5, paddingTop: 5, color: "#989C9D" }}>{title}</Text>
            </View>
            <View style={{ marginRight: 3, marginLeft: 3, padding: 5, }}>
                <Text style={{
                    fontSize: 14,
                }}>{props.content}</Text>
            </View>
        </View>
    )
}

export default ContentContainer;