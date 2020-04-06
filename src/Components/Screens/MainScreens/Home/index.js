import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Logger } from '../../../../Utils';

export default Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                hello world
            </Text>
        </View>
    );
};
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})