import React from 'react';
import {ImageBackground, Text, TouchableWithoutFeedback, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';

export const ProfileOptions = ({itemTitle, itemIcon, onPress, itemBg, extraStyles}) => {

    return (
        <TouchableWithoutFeedback onPress={() => onPress()}>
            <View style={[styles.gymProfileOptionItem, extraStyles]}>
                <ImageBackground source={itemBg} style={styles.itemBg}>
                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['rgba(0, 207, 156, 0.4)', 'rgba(18, 50, 114, 0.5)']}
                        style={styles.linearGradientStyle}
                    >
                        <View style={styles.iconAndTextBox}>
                            <Icon name={itemIcon} color="#fff" size={20}/>
                            <Text style={styles.itemTitle}>{itemTitle}</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = EStyleSheet.create({
    gymProfileOptionItem: {
        width: '90%',
        height: 60,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '$YELLOW_COLOR',
    },
    itemBg: {
        width: '100%',
        height: '100%',
    },
    linearGradientStyle: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconAndTextBox: {
        width: 150,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    itemTitle: {
        marginRight: 16,
        fontFamily: '$REGULAR_FONT',
        fontSize: 18,
        color: '#FFF',
    },
});
