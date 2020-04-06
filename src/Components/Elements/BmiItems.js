import React from 'react';
import { View, Text, } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const BmiItems = ({ weight = 0, height = 0, bmi = 0 }) => {
    return (
        <View style={styles.bmiDetailsBox}>
            <View style={styles.bmiItemBox}>
                <Text style={styles.boldTextStyle}>{bmi}</Text>
                <Text style={styles.textStyle}>BMI</Text>
            </View>
            <View style={styles.bmiItemBox}>
                <Text style={styles.boldTextStyle}>{height}</Text>
                <Text style={styles.textStyle}>قد</Text>
            </View>
            <View style={styles.bmiItemBox}>
                <Text style={styles.boldTextStyle}>{weight}</Text>
                <Text style={styles.textStyle}>وزن</Text>
            </View>
        </View>
    );
};

const styles = EStyleSheet.create({
    bmiDetailsBox: {
        width: '90%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        // backgroundColor: 'red'
    },
    bmiItemBox: {
        width: 85,
        height: 70,
        borderColor: '$BORDER_BOX_COLOR',
        backgroundColor: '$BG_BOX_COLOR',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    boldTextStyle: {
        fontFamily: '$BOLD_FONT',
        color: '#FFF',
        fontSize: 20
    },
    textStyle: {
        fontFamily: '$REGULAR_FONT',
        color: '$GRAY_COLOR',
        fontSize: 18
    },
});
