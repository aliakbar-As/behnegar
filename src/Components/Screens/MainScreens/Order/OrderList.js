import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, List } from '../../../Commons';
import { Numbers } from '../../../../Utils';
import { FlatList } from 'react-native-gesture-handler';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
let items = [
    {
        id: 0,
        cost: 30000,
        date: '02/02/1399',
        statusId: 2,
        orderCode: 14534,
    },
    {
        id: 1,
        cost: 30000,
        date: '02/02/1399',
        statusId: 1,
        orderCode: 14534,
    },
    {
        id: 2,
        cost: 30000,
        date: '02/02/1399',
        statusId: 3,
        orderCode: 14534,
    },
    {
        id: 3,
        cost: 30000,
        date: '02/02/1399',
        statusId: 1,
        orderCode: 14534,
    },
    {
        id: 4,
        cost: 30000,
        date: '02/02/1399',
        statusId: 2,
        orderCode: 14534,
    },
];
export default OrderList = ({ navigation }) => {

    const OrderCards = ({ cost, date, statusId, orderCode }) => {
        return (
            <View style={styles.card}>
                <View style={styles.innerCardContainer}>
                    <Text style={styles.codeTitle}>کد: <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{orderCode}</Text></Text>

                    <Text style={styles.codeTitle}>{date}</Text>
                </View>

                <View style={styles.innerCardContainer}>
                    <Text style={[styles.statusTitle, {
                        color: statusId === 1 ? 'green' : statusId === 2 ? 'red' : 'orange'
                    }]}>{statusId === 1 ? 'پرداخت شده' : statusId === 2 ? 'لغو شده' : 'در حال انجام'}</Text>
                    <Text style={styles.codeTitle}>{Numbers.putCommas(cost)} تومان</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Header
                title={"لیست سفارشات"}
            />

            <ScrollView>

                {items.map(item => {
                    return (
                        <OrderCards
                            orderCode={item.orderCode}
                            cost={item.cost}
                            statusId={item.statusId}
                            date={item.date}
                        />
                    );
                })}

            </ScrollView>
        </View>
    );
};
const styles = EStyleSheet.create({
    statusTitle: {
        fontFamily: '$REGULAR_FONT',
        textAlign: 'right',
        fontSize: 16,
    },
    codeTitle: {
        fontFamily: '$REGULAR_FONT',
        textAlign: 'right',
        fontSize: 14,
        color: '#505050'
    },
    innerCardContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card: {
        width: widthScreen - 16,
        height: heightScreen / 8 + 20,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal: 16,
        paddingVertical: 5,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
});