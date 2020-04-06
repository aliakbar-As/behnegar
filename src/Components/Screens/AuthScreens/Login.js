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
import { CommonActions  } from '@react-navigation/native';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [modalVisible, setmodalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Header title={'ورود'} />
            {/* <View style={{ backgroundColor: '#3AC745',marginTop: -20}}>
                <Image
                    style={{ height: 100, width: 100, }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXnyMMkAf9-bSgeUwuAdPD86w_bbEbPWXH5A-B0-Co-ttfNHwB&usqp=CAU' }} />
            </View> */}

            <ScrollView style={{ paddingHorizontal: 6 }}>

                <Input
                    value={email}
                    onChangeText={email => setEmail(email)}
                    title={"ایمیل"}
                    icon={'md-close'}
                    keyboardType={'email-address'}
                    iconOnclick={() => setEmail('')}
                    placeholder={'email@gmail.com'}
                />

                <Input
                    secureTextEntry={!passwordVisible}
                    value={password}
                    icon={passwordVisible ? 'ios-eye' : 'ios-eye-off'}
                    iconOnclick={() => setPasswordVisible(!passwordVisible)}
                    onChangeText={password => setPassword(password)}
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
                    onPress={() => {
                        navigation.dispatch(
                            CommonActions.reset({
                              index: 1,
                              routes: [
                                {
                                  name: 'TabNavigator',
                                  params: { user: 'jane' },
                                },
                              ],
                            })
                          );
                          
                    }}
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
                            value={email}
                            onChangeText={email => setEmail(email)}
                            iconOnclick={() => setEmail('')}
                            icon={'md-close'}
                            title={"ایمیل"}
                            placeholder={'email@gmail.com'}
                            keyboardType={'email-address'}
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

