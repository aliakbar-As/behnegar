import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, List, Button } from '../../../Commons';
import { FilesCard } from '../../../Elements/FilesCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Numbers } from '../../../../Utils';

export const ShoppingCart = ({ route, navigation }) => {
    const data = route.params;

    const fileSize = (bytes) => {
        if (bytes < 1024) return bytes;
        else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
        else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
        else return (bytes / 1073741824).toFixed(3) + " GB";
    };

    useEffect(() => {
        console.log('data', route.params)
    }, [])
    return (
        <View style={styles.container}>
            <Header
                title={"تایید سفارش"}
                back
                backOnclick={() => navigation.pop()}
            />

            <ScrollView>

                <View style={styles.hdrContainer}>
                    <Text
                        onPress={() => navigation.pop()}
                        style={styles.edtiTitle}>ویرایش</Text>

                    <Text style={styles.edtiTitle}>{data.files.length} فایل</Text>

                </View>
                <List
                    data={data.files}
                    renderItem={(item, i) => {
                        return (
                            <FilesCard
                                title={item.name}
                                size={fileSize(item.size)}
                                page={item.numberOfPages}
                                fileIconColor={'red'}
                                fileIconSize={70}
                                cost={Numbers.putCommas(3000)}
                            />
                        );
                    }}
                />


                <View style={styles.subTotalContainer}>
                    <Text style={styles.hdrTitle}>مجموع کل</Text>

                    <Text style={styles.numTitle}>{Numbers.putCommas(6000)}</Text>
                </View>

                <Text style={styles.innertitles}>
                    (مجموع کل شامل هزینه پیک نخواهد شد)
                </Text>

            </ScrollView>


            <Button
                text={'تایید'}
            />
        </View>
    );

};
const styles = EStyleSheet.create({
    edtiTitle: {
        fontSize: 16,
        color: '#434245',
        textAlign: 'right',
        // textDecorationLine: 'underline',
        fontFamily: '$REGULAR_FONT'
    },
    innertitles: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 14,
        color: 'gray',
        textAlign: 'right',
        marginRight: 16,
    },
    hdrContainer: {
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
        flexDirection: 'row-reverse',
        // marginHorizontal: 16,
        paddingHorizontal: 16,
        justifyContent: 'space-between'
    },
    numTitle: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 18,
        color: '#000',
        textAlign: 'left',
    },
    hdrTitle: {
        fontFamily: '$BOLD_FONT',
        fontSize: 18,
        color: '#616161',
        textAlign: 'right',
    },
    subTotalContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        padding: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});