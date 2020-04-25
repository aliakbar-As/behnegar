import React from 'react';
import { View, Text, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Line = ({
    extraStyle,
}) => {
    return (
        <View style={[styles.mainContainer, extraStyle]} />
            
    );
};

const styles = EStyleSheet.create({
    mainContainer: {
        // marginHorizontal: 16,
        height: 1,
        alignSelf: 'stretch',
        backgroundColor: '#eee',
        marginTop: 10
    },
})