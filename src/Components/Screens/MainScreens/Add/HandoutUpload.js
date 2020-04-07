import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const HandoutUpload = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                hello HandoutUpload
            </Text>
        </View>
    );
};
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});