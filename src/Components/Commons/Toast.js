import React, { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


export const Toast = ({ text, style, textStyle, delay = 2700 }) => {
    const opacity = useRef(new Animated.Value(0)).current;
    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(opacity, { toValue: 1, delay: 200, duration: 200 }),
            Animated.timing(opacity, { toValue: 0, delay, duration: 500 }),
        ]).start();
    };

    useEffect(() => {
        startAnimation();
        // const timeout = setTimeout(() => {  }, 500);
        // return () => clearTimeout(timeout);
    }, []);

    return (
        <Animated.View 
            style={[styles.container, {
                opacity,
            }, style]}
        >
            <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        </Animated.View>
    );
};

const styles = EStyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        maxWidth: 200,
        minWidth: 180,
        minHeight: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center'
    },
    textStyle: {
        fontFamily: '$REGULAR_FONT',
        color: '#FFF',
        fontSize: 18
    }
})
