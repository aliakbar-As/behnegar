import React, { useState } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { escapeJsonPath } from 'mobx-state-tree';
import EStyleSheet from 'react-native-extended-stylesheet';

export default Transaction = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                hello Transaction
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