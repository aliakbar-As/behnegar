import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, List } from '../../../Commons';
import { FilesCard } from '../../../Elements/FilesCard';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ShoppingCart = ({ route, navigation }) => {
    const data = route.params;



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
                <List
                    data={data.files}
                    renderItem={(item, i) => {
                        return (
                            <FilesCard
                                title={item.uri}
                                fileImage={'file-pdf-o'}
                            />
                        );
                    }}
                />
            </ScrollView>
        </View>
    );

};
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});