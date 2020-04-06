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
import StoreContext from '../../../Stores';
import { CommonActions  } from '@react-navigation/native';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default RegisterScreen = ({ navigation }) => {
    const { AuthStore } = useContext(StoreContext);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        tel: '',
        passwordVisible: false
    });

    const fillFormData = (input, value) => {
        setUserInfo({ ...userInfo, [input]: value });
    };

    const submitUserInfo = () => {
        let email = userInfo.email;
        let password = userInfo.password;
        if (email === '' || password === '') {
            Alert.alert('fill data');
        } else {
            AuthStore.submitUserInformation(userInfo).then(data => {
                switch (data) {
                    case 422:
                        Alert.alert('', 'validation error');
                        break;
                    case 11000:
                        Alert.alert('', 'user is registered');
                        break;
                    case 403:
                        Alert.alert('', 'server error');
                        break;
                    case 200:
                        Alert.alert('', 'resister success');
                        navigation.navigate('TabNavigator');
                        navigation.dispatch(CommonActions.reset({
                              index: 1,
                              routes: [{
                                  name: 'TabNavigator',
                                  params: { user: 'jane' },
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
            <Header
                title={'ثبت نام'}
                back
                backOnclick={() => navigation.goBack()}
            />

            <ScrollView style={{ paddingHorizontal: 6 }}>
                <View style={styles.hdrContainer}>
                    <Input
                        value={userInfo.firstName}
                        extraStyle={{ width: '40%' }}
                        onChangeText={firstName => fillFormData('firstName', firstName)}
                        title={"نام"}
                    />

                    <Input
                        value={userInfo.lastName}
                        extraStyle={{ width: '60%' }}
                        onChangeText={lastName => fillFormData('lastName', lastName)}
                        title={"نام خانوادگی"}
                    />
                </View>

                <Input
                    value={userInfo.tel}
                    onChangeText={tel => fillFormData('tel', tel)}
                    title={"موبایل"}
                    keyboardType={'numeric'}
                    iconOnclick={() => fillFormData('tel', '')}
                    icon={'md-close'}
                />

                <Input
                    value={userInfo.email}
                    forced
                    onChangeText={email => fillFormData('email', email)}
                    iconOnclick={() => fillFormData('email', '')}
                    icon={'md-close'}
                    title={"ایمیل"}
                    placeholder={'email@gmail.com'}
                    keyboardType={'email-address'}

                />

                <Input
                    secureTextEntry={!userInfo.passwordVisible}
                    value={userInfo.password}
                    forced
                    icon={userInfo.passwordVisible ? 'ios-eye' : 'ios-eye-off'}
                    iconOnclick={() => fillFormData('passwordVisible', !userInfo.passwordVisible)}
                    onChangeText={password => fillFormData('password', password)}
                    title={"رمزعبور"}
                />


                <Button
                    text={"ثبت نام"}
                    extraStyle={{ marginTop: 32 }}
                    onPress={() => submitUserInfo()}
                />

                <Text style={styles.title}>
                    ثبت نام شما به منزله‌ی پذیرفتن <Text style={styles.rulesTitle}>شرایط</Text> و <Text style={styles.rulesTitle}>قوانین</Text> می‌باشد.
                </Text>
            </ScrollView>

        </View>
    );
};


const styles = EStyleSheet.create({
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

