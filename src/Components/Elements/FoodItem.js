import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, BackHandler } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { observer, useObserver } from 'mobx-react-lite';

import { Icon } from '../Commons';

import { Numbers, Logger } from '../../Utils';

export const FoodItem = ({ itemImage, itemTitle, itemDesc, itemPrice, itemRank, itemStatus, itemAdd, itemRemove, count = 0, numberOnly = false, activeBuffet, activeFood = true }) => {
    return (
        <View style={styles.container}>
            {numberOnly &&
                <Text style={styles.numberOfFoods}>{count}</Text>
            }
            <View style={[styles.detailsItemBoxStyle, { marginRight: itemImage ? 20 : 0 }]}>
                <Text style={styles.titleItemStyle}>{itemTitle}</Text>
                {itemAdd && itemRemove && activeBuffet &&
                    <Text style={styles.priceItemStyle}>{Numbers.putCommas(itemPrice)} تومان</Text>
                }
                {itemDesc !== undefined &&
                    <View style={styles.priceAndDescItemBoxStyle}>
                            <Text style={styles.descItemStyle}>{itemDesc}</Text>
                    </View>
                }
                {itemAdd && itemRemove && activeBuffet && activeFood ?
                    <View style={styles.addOrRemoveBox}>
                        <TouchableWithoutFeedback onPress={() => { itemAdd(); }}>
                            <View style={styles.addBox}>
                                <Icon name="plus" />
                            </View>
                        </TouchableWithoutFeedback>
                        {count > 0 &&
                            <Text style={styles.numberOfFoods}>{count}</Text>
                        }

                        {count > 0 &&
                            <TouchableWithoutFeedback onPress={() => { itemRemove(); }}>
                                <View style={styles.removeBox}>
                                    <Icon name="minus" />
                                </View>
                            </TouchableWithoutFeedback>

                        }
                    </View>
                    :
                    <Text style={styles.unavailableText}> ناموجود</Text>
                }
            </View>
            {itemImage &&
                <Image source={{ uri: itemImage }} style={styles.imageItemStyle} />
            }
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        width: '85%',
        height: 'auto',
        backgroundColor: '$BG_BOX_COLOR',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        padding: 10
    },
    imageItemStyle: {
        width: 110,
        height: 110,
        borderRadius: 10,

    },
    detailsItemBoxStyle: {
        flex: 1,
        height: 'auto',
        justifyContent: 'center',
        marginRight: 20,
        alignSelf: 'center',

    },
    titleItemStyle: {
        fontFamily: '$BOLD_FONT',
        fontSize: 20,
        color: '#FFF',
        width: 'auto',
        textAlign: 'right'
    },
    priceAndDescItemBoxStyle: {
        width: 'auto',
        marginBottom: 10,

    },  
    priceItemStyle: {
        fontFamily: '$BOLD_FONT',
        fontSize: 18,
        color: '$YELLOW_COLOR',
        width: 'auto',
        textAlign: 'right'
    },
    descItemStyle: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 16,
        color: '$GRAY_COLOR',
        width: 'auto',
        textAlign: 'right'
    },
    addOrRemoveBox: {
        width: 120,
        height: 45,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
    },
    addBox: {
        width: 35,
        height: 35,
        borderRadius: 10,
        backgroundColor: '$GREEN_COLOR',
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeBox: {
        width: 35,
        height: 35,
        borderRadius: 10,
        backgroundColor: '$RED_COLOR',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberOfFoods: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 25,
        color: '#FFF',
        // textAlign: 'right'
    },
    unavailableText: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 18,
        color: '$RED_COLOR',
        marginTop: 15,
        marginLeft: 10,
        alignSelf: 'flex-start'
    }
});
