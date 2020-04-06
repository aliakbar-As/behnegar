import React from 'react';
import { View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const FoodInvoiceItem = ({ itemName, itemNumber, itemPic, itemShopType }) => {
    return (
        <View style={styles.foodItemBox}>
            <View style={styles.foodNumberBox}>
                <Text style={styles.whiteTextStyle}>{itemNumber}</Text>
            </View>
            <View style={styles.foodNameAndPicBox}>
                <View style={{ marginRight: 10 }}>
                    <Text style={styles.whiteTextStyle}>{itemName}</Text>
                    <Text style={styles.grayTextStyle}>{itemShopType}</Text>
                </View>
                <Image source={{ uri: itemPic }} style={styles.foodImage} />
            </View>
        </View>
    );
};

const styles = EStyleSheet.create({
    foodItemBox: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    foodNumberBox: {
        width: 30,
        height: 30,
        backgroundColor: '$GREEN_COLOR',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    foodNameAndPicBox: {
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },  
    whiteTextStyle: {
        fontFamily: '$REGULAR_FONT',
        color: '#FFF',
        fontSize: 16
    },
    grayTextStyle: {
        fontFamily: '$REGULAR_FONT',
        color: '$GRAY_COLOR',
        fontSize: 16
    },
    foodImage: {
        width: 55,
        height: 55,
        borderRadius: 10
    }
});
