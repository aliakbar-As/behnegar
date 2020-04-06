import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Devider = ({ style }) => {
    return (
        <View style={[styles.container, style]} />
    )
}

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: 1,
        backgroundColor: '$GRAY_COLOR',
        opacity: 0.2,
        marginVertical: 5
    }
})