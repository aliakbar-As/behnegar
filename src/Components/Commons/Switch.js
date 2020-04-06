import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { useLayoutAnimation } from '../../Utils';

export const Switch = ({ status, style, defaultValue = false }) => {
    const [value, setValue] = useState(defaultValue);

    const toggleSwitch = useCallback(() => {
        useLayoutAnimation();
        setValue(!value);
        status(!value);
    }, [value]);

    return (
        <TouchableWithoutFeedback onPress={() => toggleSwitch()}>
            <View style={[styles.container, style]}>
                <Animated.View 
                    style={[styles.backgroundBox, {
                        backgroundColor: value ? 'rgba(0, 207, 156, 0.4)' : EStyleSheet.value('$BG_BOX_COLOR')                    
                    }]} 
                />
                <Animated.View 
                    style={[styles.switchCircle, {
                        left: value ? 35 : 0,
                    }]} 
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = EStyleSheet.create({
    container: {
        width: 62,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundBox: {
        width: 55,
        height: 22,
        borderRadius: 20,
        borderColor: '$BORDER_BOX_COLOR',
        borderWidth: 1,
        backgroundColor: '$BG_BOX_COLOR',
    },
    switchCircle: {
        width: 26,
        height: 26,
        backgroundColor: '#FFF',
        borderRadius: 13,
        position: 'absolute',
        top: 2,
        left: 0
    }
})
