import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { escapeJsonPath } from 'mobx-state-tree';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/AntDesign';
import { Numbers } from '../../../../../Utils';
import { Button, Input } from '../../../../Commons';


const widthScreen = Dimensions.get('window').width;
const defaultPrice = [
    {
        id: 0,
        cost: 10000,
    },
    {
        id: 2,
        cost: 20000,
    },
    {
        id: 3,
        cost: 50000,
    },

];

export default Wallet = ({ navigation }) => {
    const [defaultPriceSelected, setDefaultPriceSelected] = useState(0);
    const [amounts, setAmounts] = useState('10000');
    const [lastAmountSelcted, setLastAmountSelcted] = useState(10000);


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.walletContainer}>
                    <View style={styles.walletInnerContainer}>

                        <View style={styles.flagContainer}>
                            <Text style={styles.walletTitle}>
                                کیف پول
                            </Text>

                            <View style={styles.flagStyle} />
                        </View>

                        <Icon
                            name={'wallet'}
                            color={'#61362A'}
                            size={50}
                            style={styles.walletIcon}
                        />

                        <Text style={styles.walletCostTitle}>
                            {Numbers.putCommas(30000)} <Text style={{ fontSize: 16 }}>تومان</Text>
                        </Text>
                    </View>
                </View>


                <Text style={[styles.primarytitle, { marginTop: 20, marginBottom: 5 }]}>
                    از مبالغ پیشفرض استفاده کنید:
                </Text>

                <FlatList
                    numColumns={3}
                    data={defaultPrice}
                    style={{ alignSelf: 'center', }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                let cost = item.cost;
                                setLastAmountSelcted(item.cost)
                                setAmounts(cost.toString())
                                setDefaultPriceSelected(item.id)
                            }}>
                                <View
                                    style={[styles.defaultPriceContainer, {
                                        opacity: defaultPriceSelected === item.id ? 1 : 0.5,
                                    }]}>
                                    <Text style={styles.pricesTitle}>
                                        {item.cost}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                <Text style={[styles.primarytitle, { marginTop: 20, marginBottom: 5 }]}>
                    مبلغ را به رقم دلخواه خود تغییر دهید
                </Text>

                <View style={styles.amountContainer}>

                    <View style={styles.iconsContainer}>
                        <Icon
                            name={'plus'}
                            color={'#61362A'}
                            size={20}
                            onPress={() => {
                                let cost = lastAmountSelcted + 1000;
                                setLastAmountSelcted(cost);
                                setAmounts(cost.toString());
                            }}
                        />
                    </View>


                    <View style={styles.inputContainer}>
                        <TextInput
                            value={amounts}
                            onChangeText={amount => setAmounts(amount)}
                            style={styles.inputStyle}
                            placeholder={'مبلغ های دیگر'}
                            placeholderTextColor={EStyleSheet.value('$GRAY_COLOR')}

                        />
                        <Text style={[styles.primarytitle, { margin: 0 }]}>تومان</Text>
                    </View>

                    <View style={styles.iconsContainer}>
                        <Icon
                            name={'minus'}
                            color={'#61362A'}
                            size={20}
                            onPress={() => {
                                let cost = lastAmountSelcted - 1000;
                                if (cost > 0) {
                                    setLastAmountSelcted(cost);
                                    setAmounts(cost.toString());
                                };
                            }}
                        />
                    </View>
                </View>



                <Button
                    extraStyle={{ width: '95%', marginTop: 16 }}
                    text={"پرداخت"}
                />
            </ScrollView>
        </View >
    );
};
const styles = EStyleSheet.create({
    amountContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    inputContainer: {
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        width: '85%',
    },
    inputStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: '$REGULAR_FONT',
        width: '55%',
        fontSize: 18,
    },
    iconsContainer: {
        borderWidth: 1,
        borderColor: '#61362A',
        alignItems: 'center',
        borderRadius: 3,
        padding: 2,
    },
    primarytitle: {
        fontFamily: 'num',
        textAlign: 'center',
        fontSize: 15,
        color: '$DARK_GRAY_COLOR',
    },
    pricesTitle: {
        fontFamily: '$BOLD_FONT',
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
    },
    defaultPriceContainer: {
        backgroundColor: '#003B2E',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        margin: 10,
        borderRadius: 5,
    },
    walletCostTitle: {
        textAlign: 'center',
        fontSize: 25,
        color: '#EBAE67',
        fontFamily: '$BOLD_FONT',
        marginTop: 64
    },
    walletIcon: {
        position: 'absolute',
        left: 20,
        top: 20,
    },
    walletContainer: {
        width: widthScreen - 16,
        height: 175,
        backgroundColor: '#9C4732',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    walletInnerContainer: {
        width: '95%',
        height: '92%',
        backgroundColor: '#9C4732',
        alignSelf: 'center',
        borderRadius: 5,
        borderStyle: 'dashed',
        borderColor: '#411A0B',
        borderWidth: 3,
        justifyContent: 'center',
    },
    flagContainer: {
        backgroundColor: '#3D221E',
        alignItems: 'center',
        width: '35%',
        height: 50,
        position: 'absolute',
        right: -10,
        top: 30,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: 10,
    },
    flagStyle: {
        width: 15,
        height: 15,
        borderRadius: 20,
        borderWidth: 4,
        padding: 5,
        borderColor: '#6C4233'
    },
    walletTitle: {
        fontFamily: '$BOLD_FONT',
        color: '#966854',
        fontSize: 15,
        textAlign: 'right',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});