import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Picker,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Header, Input, Button } from '../../../Commons';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';


let booklatType = [
    {
        id: 0,
        title: 'A3',
    },
    {
        id: 1,
        title: 'A4',
    },
    {
        id: 2,
        title: 'A5',
    }
];

let bindingType = [
    {
        id: 0,
        title: 'گوشه منگنه'
    },
    {
        id: 1,
        title: 'صحافی طلق و شیرازه'
    },
    {
        id: 2,
        title: 'صحافی سیمی پلاستیک'
    },
    {
        id: 3,
        title: 'صحافی سیمی فلزی فنر پیچ'
    },
    {
        id: 4,
        title: 'صحافی سیمی دوبل'
    },
    {
        id: 5,
        title: 'صحافی سلفون جلد سخت'
    },
];

let deliveryTimes = [
    {
        id: 5,
        title: 'فوری'
    },
    {
        id: 0,
        title: '5 روز کاری'
    },
    {
        id: 1,
        title: '4 روز کاری'
    },
    {
        id: 2,
        title: '3 روز کاری'
    },
    {
        id: 3,
        title: '2 روز کاری'
    },
    {
        id: 4,
        title: '1 روز کاری'
    },

];
export const PrintScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [timeSelcted, setTimeSelected] = useState(0);

    const TimeDeliveryComponent = ({ onPress, title, bgColor }) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.timesContainer, {
                    backgroundColor: bgColor
                }]}>
                    <Text style={styles.timesTitle}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    };
    return (
        <View style={styles.container}>
            <ScrollView style={styles.innerContainer}>

                <Header title={'پرینت'} />

                <View style={styles.cardContainer}>
                    <Text style={styles.hdrTitles}>
                        سایز جزوه؟ *
                    </Text>

                    <View style={styles.pickerContainer}>
                        <Picker
                            mode={'dropdown'}
                            selectedValue={selectedValue}
                            style={{ height: 50, width: '100%', }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            {booklatType.map(item => {
                                return (
                                    <Picker.Item
                                        key={item.id}
                                        label={item.title}
                                        value={item.title} />
                                );
                            })}
                        </Picker>
                    </View>
                </View>


                <View style={styles.cardContainer}>
                    <Text style={styles.hdrTitles}>
                        چاپ رنگی یا سیاه و سفید؟ *
                    </Text>

                    <View style={styles.pickerContainer}>
                        <Picker
                            mode={'dropdown'}
                            selectedValue={selectedValue}
                            style={styles.pickerStyle}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="رنگی" value='رنگی' />
                            <Picker.Item label="سیاه و سفید" value='سیاه و سفید' />

                        </Picker>

                        <Icon
                            name={'caretdown'}
                            size={10}
                            color={'gray'}
                        />
                    </View>
                </View>


                <View style={styles.cardContainer}>
                    <Text style={styles.hdrTitles}>
                        یکرو چاپ یا دورو چاپ؟ *
                    </Text>

                    <View style={styles.pickerContainer}>
                        <Picker
                            mode={'dropdown'}
                            selectedValue={selectedValue}
                            style={styles.pickerStyle}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="یکرو چاپ شود" value='یکرو چاپ شود' />
                            <Picker.Item label="دورو چاپ شود" value='دورو چاپ شود' />

                        </Picker>

                        <Icon
                            name={'caretdown'}
                            size={10}
                            color={'gray'}
                        />
                    </View>
                </View>

                <View style={[styles.cardContainer,]}>
                    <Text style={styles.hdrTitles}>
                        زمان تحویل *
                    </Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {deliveryTimes.map(item => {
                            return (
                                <TimeDeliveryComponent
                                    onPress={() => setTimeSelected(item.id)}
                                    title={item.title}
                                    key={item.id}
                                    bgColor={timeSelcted === item.id ? EStyleSheet.value('$GREEN_COLOR') : '#80B0A0'}
                                />
                            )
                        })}

                    </ScrollView>
                </View>

                <View style={styles.cardContainer}>
                    <Text style={styles.hdrTitles}>
                        تعداد صفحات جزوه تان را وارد کنید. *
                    </Text>

                    <Input
                        noTitle
                        extraStyle={{ marginTop: -5, paddingHorizontal: 10 }}
                        style={styles.input}
                        placeholder={'مثلا: 50'}
                    />
                </View>

                <View style={[styles.cardContainer, { marginBottom: 16 }]}>
                    <Text style={styles.hdrTitles}>
                        نوع صحافی را مشخص کنید. *
                    </Text>

                    <View style={styles.pickerContainer}>
                        <Picker
                            mode={'dropdown'}
                            selectedValue={selectedValue}
                            style={styles.pickerStyle}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            {bindingType.map(item => {
                                return (
                                    <Picker.Item
                                        key={item.id}
                                        label={item.title}
                                        value={item.title} />
                                );
                            })}

                        </Picker>

                        <Icon
                            name={'caretdown'}
                            size={10}
                            color={'gray'}
                        />
                    </View>
                </View>


                <Button
                    extraStyle={{ width: Dimensions.get('window').width - 16 }}
                    text={'ثبت اطلاعات'}
                    onPress={() => navigation.push('HandoutUpload')}
                />
            </ScrollView>
        </View>
    );

};

const styles = EStyleSheet.create({
    innerContainer: {
        marginTop: -10,
        paddingBottom: 16
    },
    timesTitle: {
        fontFamily: '$REGULAR_FONT',
        textAlign: 'center',
        color: '#fff',
        fontSize: 15
    },
    timesContainer: {
        paddingHorizontal: 10,
        backgroundColor: '#80B0A0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        padding: 16,
        width: 100,
        height: 50,
    },
    input: {
        borderWidth: 2,
        borderColor: '#eee',
        height: 50,
        paddingHorizontal: 10
    },
    cardContainer: {
        marginTop: 16,
    },
    hdrTitles: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 16,
        color: '#666666',
        textAlign: 'right',
        margin: 10
    },
    pickerStyle: {
        height: 50,
        width: Dimensions.get('window').width - 16,
        alignSelf: 'flex-end',
        flex: 1,
        marginRight: -50
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 3,
        width: Dimensions.get('window').width - 16,
        justifyContent: 'flex-end',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        zIndex: 0,
        paddingHorizontal: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});