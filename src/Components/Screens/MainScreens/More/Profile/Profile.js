import React, { useState, Profiler } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, Button } from '../../../../Commons';
import { ScrollView } from 'react-native-gesture-handler';
import { Numbers } from '../../../../../Utils';

export default Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header
                title={'پروفایل'}
                rightIcon={'edit'}
                rightIconPress={() => navigation.push('EditProfile')}
                back
                backOnclick={() => navigation.pop()}
            />

            <ScrollView>
                <View style={{ alignItems: 'center', }}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkEBjMSwzdQ7GEL0cHuArnNUIhvY7eRh72YddymnZ8vmmzLME7&usqp=CAU' }}
                        style={styles.hdrImage}
                    />

                    <Text style={styles.titles}>کد عضویت</Text>
                    <Text style={[styles.innerTitles, { marginTop: -5 }]}>1938823</Text>
                </View>


                <View style={styles.card}>
                    <View style={styles.cardsection}>
                        <Text style={[styles.titles, { fontSize: 16 }]}>آقای</Text>
                        <Text style={styles.primaryTitle}>بابک ناصری</Text>
                    </View>

                    <View style={styles.cardsection}>
                        <Text style={[styles.titles, { fontSize: 16 }]}>متولد</Text>
                        <Text style={styles.primaryTitle}>23 فروردین 1378</Text>
                    </View>

                    <View style={styles.cardsection}>
                        <Text style={[styles.titles, { fontSize: 16 }]}>شهر</Text>
                        <Text style={styles.primaryTitle}>تهران</Text>
                    </View>

                    <View style={styles.cardsection}>
                        <Text style={[styles.titles, { fontSize: 16 }]}>موبایل</Text>
                        <Text style={styles.primaryTitle}>091934838</Text>
                    </View>

                    <View style={styles.cardsection}>
                        <Text style={[styles.titles, { fontSize: 16 }]}>ایمیل</Text>
                        <Text style={styles.primaryTitle}>test@gmail.com</Text>
                    </View>

                    <View style={styles.cardsection}>
                        <Text style={[styles.titles, { fontSize: 16 }]}>اعتبار</Text>
                        <Text style={styles.primaryTitle}>{Numbers.putCommas(39900)}</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};
const styles = EStyleSheet.create({
    hdrImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        alignSelf: 'center',
    },
    primaryTitle: {
        fontFamily: 'num',
        fontSize: 15,
        color: '#464646',
        textAlign: 'right',
        marginRight: 5,
    },
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 16,
        margin: 16,
    },
    cardsection: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginTop: 10,
    },
    innerTitles: {
        color: '$DARK_COLOR',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: '$BOLD_FONT',
    },
    titles: {
        color: '$GRAY_COLOR',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: '$REGULAR_FONT'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});