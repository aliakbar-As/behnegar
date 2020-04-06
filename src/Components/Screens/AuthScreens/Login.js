import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Keyboard,
    BackHandler,
    ScrollView,
    Modal,
    Dimensions,
    Alert,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, Input, Button } from '../../Commons';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import { CommonActions } from '@react-navigation/native';
import StoreContext from '../../../Stores';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default LoginScreen = ({ navigation }) => {
    const {AuthStore } = useContext(StoreContext);

    const [modalVisible, setmodalVisible] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        passwordVisible: false,
    });

    const fillUserData = (input, value) => {
        setUserInfo({ ...userInfo, [input]: value });
    };

    const submitUserRegisteredInfo = () => {
        let email = userInfo.email;
        let password = userInfo.password;
        if (email === '' || password === '') {
            Alert.alert('fill data');
        } else { 
            AuthStore.submitUserRegisteredInformation(userInfo).then(data => {
                switch (data) {
                    case 422:
                        Alert.alert('', 'validation error');
                        break;
                    case 404:
                        Alert.alert('', 'user not found');
                        break;
                    case 403:
                        Alert.alert('', 'password not correct');
                        break;
                    case 200:
                        Alert.alert('', 'resister success');
                        navigation.dispatch(CommonActions.reset({
                              index: 1,
                              routes: [{
                                  name: 'TabNavigator',
                                  params: { user: 'login' },
                                },],
                            }));
                        break;
                    default:
                        console.log('default')
                        break;
                }
            })
        };
    };

    return (
        <View style={styles.container}>
            <Header title={'ورود'} />

            <ScrollView style={{ paddingHorizontal: 6 }}>

                <Input
                    value={userInfo.email}
                    onChangeText={email => fillUserData('email', email)}
                    title={"ایمیل"}
                    icon={'md-close'}
                    keyboardType={'email-address'}
                    iconOnclick={() => fillUserData('email', '')}
                    placeholder={'email@gmail.com'}
                />

                <Input
                    secureTextEntry={!userInfo.passwordVisible}
                    value={userInfo.password}
                    forced
                    icon={userInfo.passwordVisible ? 'ios-eye' : 'ios-eye-off'}
                    iconOnclick={() => fillUserData('passwordVisible', !userInfo.passwordVisible)}
                    onChangeText={password => fillUserData('password', password)}
                    title={"رمزعبور"}
                />

                <TouchableHighlight
                    onPress={() => setmodalVisible(true)}
                    underlayColor={'transparent'}>
                    <Text style={styles.forgetPassTitle}>
                        رمز عبور خود را فراموش کرده‌ام
                    </Text>
                </TouchableHighlight>

                <Button
                    text={"ورود"}
                    onPress={() => submitUserRegisteredInfo()}
                    extraStyle={{ marginTop: 32 }}
                />

                <Text style={styles.title}>
                    در صورت عدم نداشتن اکانت، <Text onPress={() => navigation.navigate('Register')} style={styles.rulesTitle}>ثبت نام</Text> کنید.
                </Text>
            </ScrollView>


            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setmodalVisible(false)}>
                <View style={styles.modalView}>
                    <View style={styles.modalContainerStyle}>
                        <Icon
                            name={'cross'}
                            size={30}
                            onPress={() => setmodalVisible(false)}
                            style={{ alignSelf: 'flex-end', marginRight: 16, }}
                            color={EStyleSheet.value('$GREEN_COLOR')}
                        />

                        <View style={styles.iconContainer}>
                            <Icon
                                name={'key'}
                                size={50}
                                color={EStyleSheet.value('$GREEN_COLOR')}
                            />
                        </View>

                        <Text style={[styles.title, { color: '#006241' }]}>
                            ایمیل‌تان را برای بازیابی رمزعبور خود وارد نمایید
                        </Text>

                        <Input
                            value={userInfo.email}
                            onChangeText={email => fillUserData('email', email)}
                            title={"ایمیل"}
                            icon={'md-close'}
                            keyboardType={'email-address'}
                            iconOnclick={() => fillUserData('email', '')}
                            placeholder={'email@gmail.com'}
                        />


                        <Button
                            text={"ثبت درخواست"}
                            extraStyle={{ marginTop: 32 }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};


const styles = EStyleSheet.create({
    iconContainer: {
        borderWidth: 2,
        borderColor: '$GREEN_COLOR',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 100
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainerStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        width: widthScreen - 32,
        height: heightScreen / 2 + 30,
        paddingTop: 10,
    },
    forgetPassTitle: {
        fontFamily: '$REGULAR_FONT',
        textAlign: 'right',
        color: '$GRAY_COLOR',
        marginTop: 16,
        marginRight: 16,
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted'
    },
    rulesTitle: {
        color: '#000',
        fontFamily: '$BOLD_FONT',
    },
    title: {
        fontFamily: '$REGULAR_FONT',
        textAlign: 'center',
        color: '$GRAY_COLOR',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20
    },
    hdrContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

});