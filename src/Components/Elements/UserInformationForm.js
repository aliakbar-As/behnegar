import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    CheckBox,
    Switch,
    Modal,
    TouchableHighlight,
    Dimensions,
    Alert,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment-jalaali';
import PersianDatePicker from 'rn-persian-date-picker';

import { Input, Button, Icon, inAppNotification, } from '../Commons';

import StoreContext from '../../Stores';

import { GalleryPicker, Logger, ImagePickerComponent } from '../../Utils';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export const UserInformationForm = ({ callback, navigation }) => {
    const { AuthStore } = useContext(StoreContext);

    const [userInfo, setUserInfo] = useState({
        imageData: { uri: null },
        namefamilymember: '',
        mailmember: '',
        picmember: '',
        birthdaymemberText: 'انتخاب کنید',
        birthdaymember: '',
        sexmember: 1,
        code: '',
        typememberid: 6,
    });
    

    let picker = '';

    const manItemBorderColor = userInfo.sexmember === 1 ?
        EStyleSheet.value('$GREEN_COLOR') :
        EStyleSheet.value('$GRAY_COLOR');

    const womanItemBorderColor = userInfo.sexmember === 2 ?
        EStyleSheet.value('$GREEN_COLOR') :
        EStyleSheet.value('$GRAY_COLOR');

    const selectPicture = async () => {
        GalleryPicker().then((image) => {
            const imageData = {
                uri: image.path,
                name: `${image.modificationDate}.${image.mime.split('/')[1]}`,
                type: image.mime
            };
            AuthStore.uploadFile(imageData).then((picmember) => {
                setUserInfo({ ...userInfo, picmember, imageData });
            });
        });
    };

    const fillFormData = (input, value) => {
        setUserInfo({ ...userInfo, [input]: value });
    };

    const submitUserInfo = () => {
            AuthStore.submitUserInformation(userInfo)
                .then((data) => {
                    console.log('type of:', data)
                    if (data.ResponseCode === 1) {
                        callback('ok');
                    } else if(typeof data === 'string') {
                        Alert.alert(
                            '',
                            data,
                            [
                                { text: 'باشه', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false },
                        );
                    }
                    else {
                        inAppNotification.show({
                            stack: 'Main.InAppNotification',
                            type: 'danger',
                            text: 'خطا !‌ فرم را با دقت تکمیل و ثبت نمایید',
                            timeout: 4000
                        });
                    }
                });
       
    };

    return (
        <ScrollView style={{ flex: 1, width: '100%' }}>
            <TouchableWithoutFeedback onPress={() => selectPicture()}>
                <View style={styles.itemBox}>
                    <View style={styles.imageBox}>
                        {userInfo.imageData.uri !== null ?
                            <Image source={{ uri: userInfo.imageData.uri }} style={styles.profileImage} />
                            :
                            <Text style={styles.textStyle}>عکس پروفایل</Text>
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.itemBox}>
                <Input
                    placeholder="نام و نام خانوادگی"
                    value={userInfo.namefamilymember}
                    onChangeText={(namefamilymember) => fillFormData('namefamilymember', namefamilymember)}
                />
            </View>
            {/* <View style={styles.itemBox}>
                <Input
                    placeholder="ایمیل :‌ example@gmail.com"
                    value={userInfo.mailmember}
                    keyboardType="email-address"
                    onChangeText={(mailmember) => fillFormData('mailmember', mailmember)}
                />
            </View>
            <View style={styles.itemBox}>
                <TouchableWithoutFeedback onPress={() => picker.showPicker()}>
                    <View style={styles.birthdayBox}>
                        <Icon name="arrow-left" />
                        <Text style={styles.textStyle}>{userInfo.birthdaymemberText}</Text>
                        <Text style={styles.textStyle}>تاریخ تولد :</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View> */}
            <View style={styles.itemBox}>
                <Input
                    placeholder="کد معرف(اختیاری)"
                    value={userInfo.code}
                    onChangeText={(code) => fillFormData('code', code)}
                />
            </View>
            <View style={[styles.itemBox, styles.twoItem]}>
                <TouchableWithoutFeedback onPress={() => fillFormData('sexmember', 1)}>
                    <View style={[styles.smallItemBox, { borderColor: manItemBorderColor }]}>
                        <Text style={styles.textStyle}>مرد</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => fillFormData('sexmember', 2)}>
                    <View style={[styles.smallItemBox, { borderColor: womanItemBorderColor }]}>
                        <Text style={styles.textStyle}>زن</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>

            {/* <View style={[styles.itemBox, { flexDirection: 'row-reverse', alignItems: 'center', }]}>

                <Switch
                    thumbColor={'#008AD3'}
                    trackColor={'#fff'}
                    style={{ marginLeft: 5 }}
                    onValueChange={value => setRulesConfirmed(value)}
                    value={rulesConfirmed} />


                <Text style={styles.textStyle}>
                    <Text
                        onPress={() => setModalVisible(true)}
                        style={{ color: '#379AE8' }}>قوانین و مقررات</Text> سلفیت را خوانده‌ام و موافقم
                </Text>
            </View> */}

            <View style={styles.itemBox}>
                <Button
                    text="ثبت اطلاعات"
                    onPress={() => submitUserInfo()}
                    showLoading={AuthStore.loading}
                    disable={!(userInfo.namefamilymember !== '')}
                />
            </View>
            <PersianDatePicker
                type="Jalali"
                pickerTitleText=""
                pickerCancelBtnText="     بستن تقویم     "
                pickerConfirmBtnText="    انتخاب تاریخ     "
                pickerConfirmBtnColor={[0, 207, 156, 1]}
                pickerCancelBtnColor={[255, 10, 69, 1]}
                pickerToolBarBg={[37, 40, 50, 1]}
                pickerFontFamily={EStyleSheet.value('$REGULAR_FONT')}
                minDate="1349/01/02"
                maxDate="1390/01/01"
                pickerToolBarFontSize={16}
                yearCount={10}
                onConfirm={date => {
                    setUserInfo({
                        ...userInfo,
                        birthdaymemberText: moment(date).format('jYYYY/ jMM/ jDD'),
                        birthdaymember: moment(date).format('YYYY-M-D HH:mm:ss')
                    });
                }}
                onPickerCancel={() => null}
                ref={ref => (picker = ref)}
            />



        </ScrollView>
    );
};

const styles = EStyleSheet.create({
   
    container: {
        flex: 1,
        width: '80%',
        backgroundColor: '$DARK_COLOR',
        paddingTop: 10,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    imageBox: {
        width: 120,
        height: 120,
        borderRadius: 30,
        borderColor: '$GRAY_COLOR',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        overflow: 'hidden'
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    itemBox: {
        width: '80%',
        marginVertical: 10,
        alignSelf: 'center'
    },
    textStyle: {
        color: '#FFF',
        fontFamily: '$LITE_FONT',
        fontSize: 14
    },
    smallItemBox: {
        borderRadius: 10,
        borderColor: '$GRAY_COLOR',
        borderWidth: 1,
        width: '48%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    twoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    birthdayBox: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        borderColor: '$BORDER_BOX_COLOR',
        borderWidth: 1,
        backgroundColor: '$BG_BOX_COLOR',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
});
