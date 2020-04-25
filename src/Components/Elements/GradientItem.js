import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Numbers } from '../../Utils';
import EStyleSheet from 'react-native-extended-stylesheet';

const widthScreen = Dimensions.get('window').width;

export const GradientItem = ({
    title,
    cost,
    onPress,
    icon,
    hasTitle,
    vipStatus,
    imageBg
}) => {
    return (
        <TouchableHighlight
            underlayColor={'transparent'}
            onPress={onPress}>
            <View style={styles.container}>
                <ImageBackground
                    source={imageBg}
                    style={styles.imageBg}
                >
                    <View style={styles.linearGradien}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Icon
                                name={icon}
                                color={'#fff'}
                                size={30}
                            />

                            <Text style={styles.walletTitle}>
                                {title}
                            </Text>
                        </View>

                        {hasTitle ?
                            <Text style={[styles.costTitle, {
                                color: vipStatus === 0 ? 'green' : 'red'
                            }]}>{cost}</Text>
                            :
                            <Text style={styles.costTitle}>{Numbers.putCommas(cost)} تومان</Text>
                        }
                    </View>
                </ImageBackground>
            </View>
        </TouchableHighlight>
    );
};
const styles = EStyleSheet.create({
    imageBg: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    linearGradien: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        padding: 16,
    },
    walletTitle: {
        fontFamily: '$BOLD_FONT',
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    costTitle: {
        fontFamily: '$BOLD_FONT',
        color: '#fff',
        textAlign: 'center',
        fontSize: 23,
    },
    container: {
        width: widthScreen - 32,
        height: 100,
        // borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 16,
    },
})