import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Button } from '../Commons';

import { Numbers } from '../../Utils';

export const BasketDetailsAndPay = ({ buffetBasketPrice, onPress, showLoading }) => {
    return (
        <View style={styles.container}>
            <View style={styles.priceAndPayBox}>
                <View style={[styles.contentSection, styles.priceSection]}>
                    <Text style={styles.contentSectionPrice}>{Numbers.putCommas(buffetBasketPrice)} تومان</Text>
                    <Text style={styles.contentSectionTitle}>قیمت کل فاکتور</Text>
                </View>
                <View style={[styles.contentSection, styles.paySection]}>
                    <View style={[styles.circle, { top: -10, left: -10 }]} />
                    <View style={[styles.circle, { top: -10, right: -10 }]} />
                    <Button 
                        text="ادامه خرید" 
                        onPress={() => onPress()} 
                        disable={buffetBasketPrice === 0}
                        showLoading={showLoading}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        width: '90%',
        height: 'auto',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    priceAndPayBox: {
        width: '100%',
        height: 140,
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        backgroundColor: '$BG_BOX_COLOR',
        borderRadius: 20
    },  
    payBtnBox: {
        width: '100%',
        height: 70,
        paddingHorizontal: 20,
    },
    contentSection: {
        width: '100%',
        height: 70,
        paddingHorizontal: 20,
        borderColor: '$BORDER_BOX_COLOR',
        borderWidth: 1,
        alignItems: 'center',

    },
    priceSection: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    paySection: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
    },
    textStyle: {
        fontFamily: '$BOLD_FONT',
        fontSize: 20,
        color: '#FFF'
    },
    circle: {
        width: 20,
        height: 20,
        backgroundColor: '$DARK_COLOR',
        borderRadius: 10,
        position: 'absolute'
    },
    contentSectionPrice: {
        fontFamily: '$BOLD_FONT',
        fontSize: 20,
        color: '$GREEN_COLOR',

    },
    contentSectionTitle: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 20,
        color: '#fff'
    }
});
