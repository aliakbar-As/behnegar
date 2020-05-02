import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import NavigationService from '../../Router/NavigationService';

import Icon from 'react-native-vector-icons/AntDesign';

export const Header = ({
    title,
    transparent,
    back = false,
    backOverride = null,
    icon,
    iconPress = null,
    rightIcon,
    rightIconPress,
    extraStylse,
    none,
    backOnclick,
}) => {

    const rightAction = () => {
        if (back) {
            if (backOverride !== null) {
                backOverride();
            } else {
                NavigationService.goBack();
            }
        } else {
            if (icon !== undefined) {
                iconPress();
            } else {
                return null;
            }
        }
    };

    return (
        <View style={{ marginBottom: 20 }}>
            <View
                style={[styles.container, {
                    backgroundColor: transparent ? 'transparent' : EStyleSheet.value('$GREEN_COLOR')
                }, extraStylse]}
            >
                {rightIcon ?
                    <TouchableWithoutFeedback onPress={() => rightIconPress()}>
                        <View style={styles.rightIconBox}>
                            <Text style={[styles.title, { marginRight: 20 }]}>{title}</Text>
                            <Icon name={rightIcon} size={25} color={'#fff'} />
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Text style={styles.title}>{title}</Text>
                }
                {back ?
                    <TouchableWithoutFeedback
                        onPress={backOnclick}>
                        <View style={styles.iconBox}>
                            <Icon name={'arrowleft'} size={25} color={'#fff'} style={styles.icon} />
                        </View>
                    </TouchableWithoutFeedback> : null}

            </View>
            {none ? null : <View style={styles.flagBottom} />}
        </View>
    )
};

const styles = EStyleSheet.create({
    icon: {
        alignSelf: 'flex-start',

    },
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    flagBottom: {
        position: 'absolute',
        left: 0,
        bottom: -13,
        width: '100%',
        height: 0,
        borderBottomWidth: 13,
        borderBottomColor: 'transparent',
        borderLeftWidth: 100,
        borderLeftColor: '$GREEN_COLOR',
        borderRightWidth: 100,
        borderRightColor: '$GREEN_COLOR'
    },
    title: {
        color: '#FFF',
        fontFamily: '$BOLD_FONT',
        fontSize: 20,
        textAlign: 'center',
       alignSelf: 'center',
    },
    iconBox: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightIconBox: {
        width: 'auto',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
