import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useObserver } from 'mobx-react-lite';

import { Button } from '../Commons';

import { Numbers } from '../../Utils';
import moment from 'moment-jalaali';

export const OrderCardBuffet = ({ item, showFactorDetails, handlePayment, style, showForBuffetFactor = false }) => {
    const orderStatusTextStyle = {
        fontSize: 18
    };

    if (item.acceptfactor === null) {
        orderStatusTextStyle.color = EStyleSheet.value('$YELLOW_COLOR');
    } else if (item.acceptfactor === false) {
        orderStatusTextStyle.color = EStyleSheet.value('$RED_COLOR');

    } else {
        if (item.idstatepayed === 1) {
            orderStatusTextStyle.color = EStyleSheet.value('$BLUE_COLOR');
        } else if (item.idstatepayed === 4) {
            orderStatusTextStyle.color = EStyleSheet.value('$GREEN_COLOR');
        } else {
            orderStatusTextStyle.color = EStyleSheet.value('$YELLOW_COLOR');
        }
    }

    return useObserver(() => (
        <View style={[styles.orderCardContiner, style]}>
            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{item.idfactorbuffet}</Text>
                <Text style={styles.textStyle}>شماره فاکتور</Text>
            </View>

            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{item.namebuffet}</Text>
                <Text style={styles.textStyle}>نام بوفه</Text>
            </View>

            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{item.date}</Text>
                <Text style={styles.textStyle}>تاریخ سفارش</Text>
            </View>
           
            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{Numbers.putCommas(((item.delivery * 60) / 100))} تومان</Text>
                <Text style={styles.textStyle}>هزینه ارسال</Text>
            </View>
            
            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{Numbers.putCommas(item.finalpricefactorbuffet)} تومان</Text>
                <Text style={styles.textStyle}>هزینه نهایی</Text>
            </View>
            <View style={styles.addressBox}>
                <Text style={[styles.textStyle, { textAlign: 'right' }]}>آدرس :</Text>
                <Text style={[styles.textStyle, { textAlign: 'center' }]}>{item.descaddressmember} , پلاک : {item.plaque}</Text>
            </View>

            <View style={styles.statusBox}>
                <Text style={styles.textStyle}>وضعیت سفارش :</Text>
                <Text style={[styles.textStyle, orderStatusTextStyle]}> {item.deliveryStatus}</Text>
            </View>

            <Button
                type="public"
                text="نمایش جزییات سفارش"
                onPress={() => showFactorDetails(item.idfactorbuffet)}
            />

            {
                item.acceptfactor === true &&
                item.idstatepayed === 2 && 
                item.idmethodpayed !== 3 && 
                !showForBuffetFactor &&
                <Button
                    text="پرداخت آنلاین"
                    onPress={() => handlePayment(item.idfactorbuffet)}
                    showLoading={item.loadingPayment}
                />
            }
        </View>
    ));
};

export const OrderCardShop = ({ item, style, showFactorDetails }) => {
    return (
        <View style={[styles.orderCardContiner, style]}>
            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{item.idfactor}</Text>
                <Text style={styles.textStyle}>شماره فاکتور</Text>
            </View>

            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{moment(item.datesaveorder).format('jYYYY/jM/jD')}</Text>
                <Text style={styles.textStyle}>تاریخ سفارش</Text>
            </View>
           
            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{item.delivery} تومان</Text>
                <Text style={styles.textStyle}>هزینه ارسال</Text>
            </View>
            
            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{Numbers.putCommas(item.finalpricefactor)} تومان</Text>
                <Text style={styles.textStyle}>هزینه نهایی</Text>
            </View>

            {item.descfactor.length > 1 &&
                <View style={styles.statusBox}>
                    <Text style={styles.textStyle}>توضیحات سفارش :</Text>
                    <Text style={styles.textStyle}>{item.descfactor}</Text>
                </View>
            }

            <Button
                type="public"
                text="نمایش جزییات سفارش"
                onPress={() => showFactorDetails(item.idfactor)}
                style={{ marginTop: 30 }}
            />
        </View>
    );
};

export const OrderCardBuffetManagement = ({ item, showFactorDetails, isManager, style }) => {
    const orderStatusTextStyle = {
        fontSize: 18
    };

    if (item.acceptfactor === null) {
        orderStatusTextStyle.color = EStyleSheet.value('$YELLOW_COLOR');
    } else if (item.acceptfactor === false) {
        orderStatusTextStyle.color = EStyleSheet.value('$RED_COLOR');

    } else {
        if (item.idstatepayed === 1) {
            orderStatusTextStyle.color = EStyleSheet.value('$BLUE_COLOR');
        } else if (item.idstatepayed === 4) {
            orderStatusTextStyle.color = EStyleSheet.value('$GREEN_COLOR');
        } else {
            orderStatusTextStyle.color = EStyleSheet.value('$YELLOW_COLOR');
        }
    }
    
    return useObserver(() => (
        <View style={[styles.orderCardContiner, style]}>
            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{item.idfactorbuffet}</Text>
                <Text style={styles.textStyle}>شماره فاکتور</Text>
            </View>

            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{item.namebuffet}</Text>
                <Text style={styles.textStyle}>نام بوفه</Text>
            </View>

            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{item.namefamilymember}</Text>
                <Text style={styles.textStyle}>نام سفارش دهنده</Text>
            </View>

            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{item.date}</Text>
                <Text style={styles.textStyle}>تاریخ سفارش</Text>
            </View>
            
            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{Numbers.putCommas(((item.delivery * 60) / 100))} تومان</Text>
                <Text style={styles.textStyle}>سهم شما از هزینه ارسال</Text>
            </View>
            
            <View style={styles.itemRowBox}>
                <Text style={styles.textStyle}>{Numbers.putCommas(item.finalpricefactorbuffet)} تومان</Text>
                <Text style={styles.textStyle}>هزینه نهایی</Text>
            </View>

            <View style={styles.addressBox}>
                <Text style={[styles.textStyle, { textAlign: 'right' }]}>توضیحات :</Text>
                <Text style={[styles.textStyle, { textAlign: 'center' }]}>{item.descfactor === '' ? 'این سفارش توضیحات ندارد.' : item.descfactor}</Text>
            </View>

            <View style={styles.addressBox}>
                <Text style={[styles.textStyle, { textAlign: 'right' }]}>آدرس :</Text>
                <Text style={[styles.textStyle, { textAlign: 'center' }]}>{item.descaddressmember} , پلاک : {item.plaque}</Text>
            </View>

            <View style={styles.statusBox}>
                <Text style={styles.textStyle}>وضعیت سفارش :</Text>
                <Text style={[styles.textStyle, orderStatusTextStyle]}> {item.deliveryStatus}</Text>
            </View>

            <Button
                type="public"
                text="نمایش جزییات سفارش"
                onPress={() => showFactorDetails(item.idfactorbuffet)}
            />

            {item.acceptfactor === null && isManager &&
                <View style={styles.acceptBtnBox}>
                    <Button
                        text="رد فاکتور"
                        onPress={() => item.buffetManagementRejectFactor()}
                        showLoading={item.loadingPayment}
                        style={{ backgroundColor: EStyleSheet.value('$RED_COLOR'), width: 120 }}
                    />
                    <Button
                        text="تایید فاکتور"
                        onPress={() => item.buffetManagementAcceptFactor()}
                        showLoading={item.loadingPayment}
                        style={{ width: 120 }}
                    />
                </View>
            }
        </View>
    ));
};

const styles = EStyleSheet.create({
    orderCardContiner: {
        width: '90%',
        height: 'auto',
        padding: 20,
        backgroundColor: '$BG_BOX_COLOR',
        borderColor: '$BORDER_BOX_COLOR',
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10
    },
    itemRowBox: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontFamily: '$REGULAR_FONT',
        color: '#FFF',
        fontSize: 14
    },
    addressBox: {
        width: '100%',
        height: 'auto',
        marginTop: 15, 
        textAlign: 'center'
    },
    statusBox: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 5,
        marginVertical: 20,
        padding: 10
    },
    acceptBtnBox: {
        width: '100%',
        height: 50,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});
