import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, Input, Button, Line } from '../../../Commons';
import { CommonActions } from '@react-navigation/native';


export const ConfirmOrder = ({ navigation }) => {
    const [discount, setDiscount] = useState('');
    const [des, setDes] = useState('');

    return (
        <View style={styles.container}>
            <Header
                title={'تایید سفارش'}
                back
                backOnclick={() => navigation.pop()}
            />
            <ScrollView>

                <View>
                    <Text style={[styles.hdrTitle, { marginRight: 16 }]}>
                        کد تخفیف
                    </Text>
                    <Input
                        style={styles.inputStyle}
                        value={discount}
                        onChangeText={discount => setDiscount(discount)}
                        placeholder={'مثلا: Welcome'}
                    />

                    <Button
                        text={'اعمال'}
                    />
                </View>

                <Line />

                <View style={{ marginTop: 16, }}>
                    <Text style={[styles.hdrTitle, { marginRight: 16 }]}>
                        قیمت نهایی
                    </Text>

                    <View style={styles.cardsection}>
                        <Text style={styles.innerTitle}>موجودی کیف پول</Text>

                        <Text style={styles.innerTitle}>15,300 تومان</Text>
                    </View>
                </View>


                <View style={styles.cardsection}>
                    <Text style={[styles.innerTitle, { color: '#006242' }]}>قیمت نهایی</Text>

                    <Text style={[styles.innerTitle, { color: '#006242' }]}>6,060 تومان</Text>
                </View>
                <Line extraStyle={{ marginTop: 16, }} />


                <View style={{ marginTop: 16 }}>
                    <Text style={[styles.hdrTitle, { marginRight: 16 }]}>
                        توضیحات
                    </Text>
                    <Input
                        style={[styles.inputStyle, { height: 100 }]}
                        value={des}
                        multiline
                        onChangeText={des => setDes(des)}
                        placeholder={'اگر نکته‌ایی راجب سفارش دارید، برای ما بنویسید'}
                    />

                </View>

                <Button
                    text={'تایید اطلاعات'}
                    onPress={() => 
                        navigation.dispatch(CommonActions.reset({
                            index: 1,
                            routes: [{
                                name: 'Order',
                                params: { user: 'Order' },
                            },],
                        }))
                    }
                />
            </ScrollView>

        </View>
    );
};
const styles = EStyleSheet.create({
    innerTitle: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 15,
        textAlign: 'right',
        color: '#2DA4F5',
    },
    cardsection: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 10,
        backgroundColor: '#eee',
    },
    hdrTitle: {
        fontFamily: '$BOLD_FONT',
        fontSize: 16,
        textAlign: 'right',
        color: '#505050',
    },
    inputStyle: {
        borderWidth: 1,
        height: 50,
        padding: 10,
        marginTop: -30,
        marginBottom: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});