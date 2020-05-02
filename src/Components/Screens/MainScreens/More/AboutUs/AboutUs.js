import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header } from '../../../../Commons';
import { ScrollView } from 'react-native-gesture-handler';


export default AboutUs = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header
                title={'درباره بهنگار'}
                backOnclick={() => navigation.pop()}
                back
            />

            <ScrollView>
                
            </ScrollView>
        </View>
    );
};
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});