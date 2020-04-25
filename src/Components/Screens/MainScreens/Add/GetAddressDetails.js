import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, Input, Button } from '../../../Commons';
import { ScrollView } from 'react-native-gesture-handler';
import StoreContext from '../../../../Stores';

export const GetAddressDetails = ({ navigation }) => {
    const { MapStore } = useContext(StoreContext);
    const [id, setId] = useState(0);
    const [addressInfo, setAddressInfo] = useState({
        adTitle: '',
        address: '',
        plaque: '',
        floor: '',
    });

    const fillData = (key, value) => {
        setAddressInfo({ ...addressInfo, [key]: value });
    };

    const confirmAddInfo = () => {

        MapStore.fillAddInfo(
            addressInfo.adTitle,
            addressInfo.address,
            addressInfo.plaque,
            addressInfo.floor);
            navigation.navigate('ConfirmOrder');
    };

    return (
        <View style={styles.container}>
            <Header
                title={'جزئیات آدرس'}
                back
                backOnclick={() => navigation.pop()}
            />

            <ScrollView>


                <Input
                    style={styles.inputStyle}
                    value={addressInfo.adTitle}
                    onChangeText={adTitle => fillData('adTitle', adTitle)}
                    placeholder={"نام آدرس"}
                />

                <Input
                    style={[styles.inputStyle, { height: 150 }]}
                    value={addressInfo.address}
                    onChangeText={address => fillData('address', address)}
                    placeholder={"آدرس کامل"}
                    multiline
                />


                <Input
                    style={styles.inputStyle}
                    value={addressInfo.plaque}
                    onChangeText={plaque => fillData('plaque', plaque)}
                    placeholder={"پلاک"}
                />

                <Input
                    style={styles.inputStyle}
                    value={addressInfo.floor}
                    onChangeText={floor => {
                        setId(1);
                        fillData('floor', floor)
                    }}
                    placeholder={"واحد"}
                />
            </ScrollView>

            <Button
                text={"ذخیره آدرس"}
                disabled={id === 0}
                extraStyle={{ opacity: id !== 0 ? 1 : 0.5 }}
                onPress={() => confirmAddInfo()}
            />
        </View>
    );
};

const styles = EStyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        padding: 10,
        marginTop: -30,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});