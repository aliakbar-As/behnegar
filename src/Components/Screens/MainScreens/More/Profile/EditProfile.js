import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ActionSheetIOS,
    ScrollView,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, Input, Button } from '../../../../Commons';
import { GalleryPicker, ImagePickerComponent } from '../../../../../Utils';
import { ProfileHeader } from '../../../../Elements';
import Icon from 'react-native-vector-icons/AntDesign';
import PersianDatePicker from "rn-persian-date-picker";
import Picker from 'react-native-picker';


export default EditProfile = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({
        imageData: { uri: null },
        namefamilymember: '',
        mailmember: '',
        picmember: '',
        birthdaymemberText: 'انتخاب کنید',
        birthdaymember: '',
        sexmember: 1,
        phone: '',
        password: ''
    });

    const selectPicture = async () => {
        ImagePickerComponent().then((image) => {
            const imageData = {
                uri: image.path,
                name: `${image.modificationDate}.${image.mime.split('/')[1]}`,
                type: image.mime
            };
            setUserInfo({ ...userInfo, imageData });

        });
    };

    const fillFormData = (input, value) => {
        setUserInfo({ ...userInfo, [input]: value });
    };

    const genderOnclick = () => {

        Picker.init({
            pickerData: ['خانم', 'آقا'],
            selectedValue: [userInfo.sexmember],
            pickerConfirmBtnColor: [0, 207, 156, 1],
            pickerCancelBtnColor: [255, 10, 69, 1],
            pickerToolBarBg: [37, 40, 50, 1],
            pickerFontFamily: EStyleSheet.value('$REGULAR_FONT'),
            pickerTitleText: "",
            pickerCancelBtnText: "     لغو      ",
            pickerConfirmBtnText: "    انتخاب جنسیت     ",
            onPickerConfirm: data => {
                if (data[0].toString() === 'خانم') {
                    setUserInfo({ ...userInfo, sexmember: 0 });
                } else {
                    setUserInfo({ ...userInfo, sexmember: 1 });
                };

                console.log(data[0].toString());
            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    };
    
    const goBack = () => {
        Keyboard.dismiss();
        Picker.hide();
        navigation.pop();
    };

    return (
        <View style={styles.container}>
            <ProfileHeader
                backonclick={() => goBack()}
                title={'علی اکبر اصغری وافی'}
                userPic={userInfo.imageData.uri}
                onPress={() => selectPicture()}
            />

            <ScrollView>
                <Input
                    placeholder={'نام و نام خانوادگی'}
                    icon={'ios-person'}
                    rightIcon
                    clear
                    extraStyle={{ marginTop: 30 }}
                    iconOnclick={() => fillFormData('namefamilymember', '')}
                    value={userInfo.namefamilymember}
                    onChangeText={namefamilymember => fillFormData('namefamilymember', namefamilymember)}
                />


                <Input
                    placeholder={'موبایل'}
                    extraStyle={{ marginTop: 0 }}
                    icon={'md-phone-portrait'}
                    rightIcon
                    clear
                    iconOnclick={() => fillFormData('phone', '')}
                    value={userInfo.phone}
                    onChangeText={phone => fillFormData('phone', phone)}
                />

                <Input
                    placeholder={'ایمیل'}
                    extraStyle={{ marginTop: 0 }}
                    clear
                    iconOnclick={() => fillFormData('mailmember', '')}
                    icon={'ios-mail'}
                    value={userInfo.mailmember}
                    onChangeText={mailmember => fillFormData('mailmember', mailmember)}
                    rightIcon
                />

                <Input
                    placeholder={'رمز عبور'}
                    extraStyle={{ marginTop: 0 }}
                    icon={'ios-lock'}
                    value={userInfo.password}
                    onChangeText={password => fillFormData('password', password)}
                    secureTextEntry
                    rightIcon
                />

                <View style={styles.pickerSelectedMainContainer}>
                    <TouchableWithoutFeedback onPress={() => picker.showPicker()}>
                        <View style={styles.pickerSelectedContainer}>
                            <Text style={styles.pickertitles}>23 فرودین 1399</Text>

                            <Icon
                                name={'caretdown'}
                                size={10}
                                color={EStyleSheet.value('$GRAY_COLOR')}
                            />
                        </View>
                    </TouchableWithoutFeedback>


                    <TouchableWithoutFeedback onPress={() => genderOnclick()}>
                        <View style={[styles.pickerSelectedContainer, { width: '40%' }]}>
                            <Text style={styles.pickertitles}>{userInfo.sexmember === 1 ? 'آقا' : 'خانم'}</Text>

                            <Icon
                                name={'caretdown'}
                                size={10}
                                color={EStyleSheet.value('$GRAY_COLOR')}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </ScrollView>

            <Button
                text={'ویرایش پروفایل'}
                extraStyle={{ marginVertical: 0, width: '100%', height: 50 }}
                onPress={() => navigation.pop()}
            />

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
                    console.log('data', date)
                    // setUserInfo({
                    //     ...userInfo,
                    //     birthdaymemberText: moment(date).format('jYYYY/ jMM/ jDD'),
                    //     birthdaymember: moment(date).format('YYYY-M-D HH:mm:ss')
                    // });
                }}
                onPickerCancel={() => null}
                ref={ref => (picker = ref)}
            />

        </View>
    );
};
const styles = EStyleSheet.create({
    pickertitles: {
        fontFamily: '$REGULAR_FONT',
        color: '$DARK_GRAY_COLOR',
        textAlign: 'right',
        fontSize: 15,
    },
    pickerSelectedMainContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pickerSelectedContainer: {
        width: '50%',
        height: 45,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 2,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});