import React from 'react';
import { View, ImageBackground, TouchableWithoutFeedback, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Icon } from '../Commons';

export const GradientItem = ({
    backgroundStyle,
    itemTitle,
    itemIcon,
    itemBg,
    onPress,
    iconAndTextBoxStyle,
    linearGradientStyle,
    iconStyle,
    titleStyle,
    imageExtraStyles,
    resizeMode,
    vip,
    disabled
}) => {
    return (
        <TouchableWithoutFeedback
        disabled={disabled}
        onPress={() => onPress()}>
            <View style={[styles.item, backgroundStyle]}>
                <ImageBackground
                    resizeMode={resizeMode}
                    source={itemBg}
                    style={[styles.itemBg, imageExtraStyles]}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[vip ? 'rgba(0,0,0,0.7)' : 'rgba(0, 207, 156, 0.4)', 'rgba(18, 50, 114, 0.5)']}
                        style={[styles.linearGradientStyle, linearGradientStyle]}
                    >
                        <View style={[styles.iconAndTextBox, iconAndTextBoxStyle]}>
                            <Icon name={itemIcon} color="#FFF" size={30} style={iconStyle} />
                            <Text style={[styles.itemTitle, titleStyle]}>{itemTitle}</Text>
                        </View>

                    </LinearGradient>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = EStyleSheet.create({
    item: {
        width: '48%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    itemBg: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    itemTitle: {
        color: '#FFF',
        fontFamily: '$BOLD_FONT',
        fontSize: 22,
    },
    linearGradientStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    iconAndTextBox: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20
    }
});
