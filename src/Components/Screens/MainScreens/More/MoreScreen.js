import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/AntDesign';
import { GradientItem } from '../../../Elements';


let items = [
    {
        id: 0,
        title: 'ویرایش پروفایل',
        icon: 'user'
    },
    {
        id: 1,
        title: 'هدیه و معرفی',
        icon: 'gift'
    },
    {
        id: 2,
        title: 'راهنما و پشتیبانی',
        icon: 'customerservice'
    },
    {
        id: 3,
        title: 'درباره بهنگار',
        icon: 'link'
    },
    {
        id: 4,
        title: 'خروج از حساب کاربری',
        icon: 'export'
    },
];

export default MoreScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.innerHdrcontainer}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkEBjMSwzdQ7GEL0cHuArnNUIhvY7eRh72YddymnZ8vmmzLME7&usqp=CAU' }}
                        style={styles.hdrImagestyle}
                    />

                    <Text style={styles.usernameTitle}>Aliakbar Asghari</Text>
                    <Text style={styles.emailtitle}>test@gmail.com</Text>
                </View>

                <View>
                    <GradientItem
                        title={'کیف پول'}
                        cost={30000}
                        imageBg={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8DLWkc6WTFf4JjXhfP4f5O4i4jkF9LjJ1UM-dRPZ6r2ZcYJin&usqp=CAU' }}
                        onPress={() => console.log('wallet')}
                        icon={'wallet'}
                    />


                    <GradientItem
                        title={'اشتراک ویژه'}
                        hasTitle
                        cost={'غیر فعال'}
                        onPress={() => console.log('vip')}
                        icon={'staro'}
                        imageBg={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRolGo9DMSGsE4F2CIWuHiked9613DEENOykS6ei2L8Hc3s21_-&usqp=CAU' }}
                        vipStatus={1}
                    />
                </View>

                <View style={{ marginHorizontal: 16, marginTop: 16 }}>
                    {items.map(item => {
                        return (
                            <TouchableHighlight
                                onPress={() => console.log(item.title)}
                                underlayColor={'transparent'}>
                                <View key={item.id} style={[styles.cardsection, {
                                    borderTopWidth: item.id === 0 ? 1 : 0,
                                    borderBottomWidth: item.id === 4 ? 0 : 1,
                                }]}>
                                    <View style={{ alignItems: 'center', flexDirection: 'row-reverse' }}>
                                        <Icon
                                            name={item.icon}
                                            color={EStyleSheet.value('$DARK_GRAY_COLOR')}
                                            size={20}
                                        />
                                        <Text style={styles.titles}>
                                            {item.title}
                                        </Text>
                                    </View>

                                    <Icon
                                        name={'left'}
                                        color={EStyleSheet.value('$DARK_GRAY_COLOR')}
                                        size={20}
                                    />
                                </View>
                            </TouchableHighlight>
                        )
                    })}


                </View>
            </ScrollView>
        </View>
    );
};
const styles = EStyleSheet.create({
    titles: {
        fontFamily: '$REGULAR_FONT',
        color: '$DARK_GRAY_COLOR',
        textAlign: 'center',
        fontSize: 15,
        marginRight: 10,
    },
    cardsection: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    emailtitle: {
        fontFamily: '$REGULAR_FONT',
        color: '$GRAY_COLOR',
        textAlign: 'center',
        fontSize: 14,
        marginTop: -5
    },
    usernameTitle: {
        fontFamily: '$BOLD_FONT',
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    hdrImagestyle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 16
    },
    innerHdrcontainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 16,
        borderBottomWidth: 1,
        borderColor: '#eee',
        paddingBottom: 16,
        backgroundColor: '$GREEN_COLOR'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});