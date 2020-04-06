import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';


export const SafeView = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <StatusBar backgroundColor="#12141d" barStyle="light-content" />
            {children}
        </SafeAreaView>
    );
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$DARK_COLOR'
    },
    pageWrapper: {
        flex: 1,
        backgroundColor: '$DARK_COLOR'
    }
});
