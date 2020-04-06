import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import NavigationService from '../../Router/NavigationService';
import { SafeView } from './SafeView';


class InAppNotification {

    /**
     * type = must be one of 'warning', 'danger, 'success'
     * text = a string text
     * timeout = time of close notification
     */    
    show(
        {
            stack = '',
            type = 'warning', 
            text = 'Hello world !', 
            delay = 0,
            timeout
        }
    ) {
        setTimeout(() => {
            NavigationService.navigate(stack, {
                type,
                text
            });
    
            if (timeout > 0) {
                setTimeout(() => {
                    NavigationService.goBack();
                }, timeout);
            }
        }, delay);
    }

    close() {
        NavigationService.goBack();
    }
}

export const InAppNotificationComponent = ({ navigation }) => {
    const { text, type } = navigation.state.params;
    let backgroundColor = '';

    switch (type) {
        case 'danger':
            backgroundColor = EStyleSheet.value('$RED_COLOR');
            break;
        case 'warning': 
            backgroundColor = EStyleSheet.value('$YELLOW_COLOR');
            break;
        case 'success': 
            backgroundColor = EStyleSheet.value('$GREEN_COLOR');
            break;
        case 'info': 
            backgroundColor = EStyleSheet.value('$BLUE_COLOR');
            break;
        default:
            break;
    }

    return (
        <SafeView style={{ backgroundColor: 'transparent' }}>
            <View style={[styles.container, { backgroundColor }]}>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </SafeView>
    );
};

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        minHeight: 60,
        height: 'auto',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    textStyle: {
        fontFamily: '$REGULAR_FONT',
        color: '#FFF',
        fontSize: 16,
        alignSelf: 'flex-end',
        textAlign: 'right'
    }
});

export const inAppNotification = new InAppNotification();
