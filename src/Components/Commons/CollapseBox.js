import React, { useCallback, useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from './Icomoon';
import { useLayoutAnimation } from '../../Utils';

export const CollapseBox = ({ children, title, style, headerTextStyle }) => {
    const [open, setOpen] = useState(false);
    
    const openWithAnimation = useCallback(() => {
        useLayoutAnimation();
        setOpen(!open);
    }, [open]);

    return (
        <TouchableWithoutFeedback onPress={() => openWithAnimation()}>
            <View 
                style={[styles.container, {
                    height: open ? 'auto' : 60
                }, style]}
            >
                <View style={styles.header}>
                    <Icon name={open ? 'arrow-up' : 'arrow-down'} />
                    <Text style={[styles.title, headerTextStyle]}>{title}</Text>
                </View>
                <View style={styles.contentWrapper}>
                    {children}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        borderColor: '$BORDER_BOX_COLOR',
        borderWidth: 1,
        backgroundColor: '$BG_BOX_COLOR',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15
    },
    header: {
        width: '100%',
        height: 'auto',
        minHeight: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: '$BORDER_BOX_COLOR',
        borderBottomWidth: 1
    },
    title: {
        fontFamily: '$REGULAR_FONT',
        color: '#FFF',
        fontSize: 14,
        paddingHorizontal: 8
    },
    contentWrapper: {
        width: '100%',
        height: 'auto',
        minHeight: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
});
