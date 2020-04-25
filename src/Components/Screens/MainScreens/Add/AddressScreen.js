import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, Button } from '../../../Commons';
import Icon from 'react-native-vector-icons/AntDesign';
import StoreContext from '../../../../Stores';


const widthScreen = Dimensions.get('window').width;

export const AddressScreen = ({ navigation }) => {
    const { MapStore } = useContext(StoreContext);

    const AddressCardSection = ({
        onPress,
        title,
        add,
        address,
        main,
        work,
        star,
        deleteOnclick }) => {
        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                onPress={onPress}>

                <View style={styles.mainAddContainer}>
                    <View style={styles.innerAddContainer}>
                        <Icon
                            name={work ? 'wallet' : star ? 'staro' : 'home'}
                            color={EStyleSheet.value('$GREEN_COLOR')}
                            size={23}
                            style={{ marginLeft: 10 }}
                        />

                        <View>
                            <Text style={styles.primaryAddTitle}>
                                {title}
                            </Text>
                            {main ? null :
                                <Text style={styles.addInnerTitle}>
                                    {address}
                                </Text>
                            }
                        </View>
                    </View>

                    <TouchableOpacity
                        disabled={add}
                        onPress={deleteOnclick}>
                        <Icon
                            name={add ? 'plus' : 'delete'}
                            color={EStyleSheet.value('$GREEN_COLOR')}
                            size={23}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableHighlight>
        );
    };

        return (
            <View style={styles.container}>
                <Header
                    title={'مکان منتخب'}
                    back
                    backOnclick={() => navigation.pop()}
                />
                <ScrollView>

                    <AddressCardSection
                        add main
                        title={'افزودن خانه به مکان‌های منتخب'} />

                    <AddressCardSection
                        work add main
                        title={'افزودن محل کار به مکان‌های منتخب'} />


                    <AddressCardSection
                        star
                        address={'منطقه 1، فرمانیه، افسریه، مسعودیه، خ...'}
                        title={'شرکت'} />

                    <AddressCardSection
                        star
                        address={'منطقه 1، فرمانیه، افسریه، مسعودیه، خ...'}
                        title={'خونه علی'} />


                    <AddressCardSection
                        star
                        address={'منطقه 1، فرمانیه، افسریه، مسعودیه، خ...'}
                        title={'خونه کرج'} />

                </ScrollView>

                <Button
                    text={"افزودن مکان منتخب"}
                    onPress={() => navigation.navigate('SetAddress')}
                />
            </View>
        );
};

const styles = EStyleSheet.create({
    addInnerTitle: {
        fontFamily: 'num',
        textAlign: 'right',
        fontSize: 12,
        color: 'gray'
    },
    innerAddContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    primaryAddTitle: {
        fontFamily: 'num',
        textAlign: 'right',
        fontSize: 14,
        color: '#191919'
    },
    mainAddContainer: {
        width: widthScreen - 32,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderRadius: 10,
        height: 60,
        borderColor: '#eee',
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});