import React from 'react';
import {
    Text,
    TouchableOpacity,
    Platform,
    View,
    ActivityIndicator
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Button = ({
    text,
    onPress,
    showLoading,
    extraStyle,
    disabled
}) => {

    return (
        <TouchableOpacity
            style={[styles.btnStyle, extraStyle]}
            onPress={onPress}
            disabled={disabled}
        >
            {showLoading ?
                <ActivityIndicator size="small" color="#FFF" style={styles.loadingIndicator} />
                :
                <Text style={[styles.textBtn]}>{text}</Text>
            }
        </TouchableOpacity>
    );
};

const styles = EStyleSheet.create({
    btnStyle: {
        height: 45,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#006241',
        marginVertical: 10,
    },
    textBtn: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: '$REGULAR_FONT'
    },

});

export { Button };
