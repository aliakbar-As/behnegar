import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';

import { Icon } from '../Commons';

export const PublicItem = ({ itemImage, itemTitle, itemDesc, itemRank, itemStatus, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onPress()}>
            <View style={styles.container}>
            <View style={styles.imageAndDetailsBox}>
                <Image source={{ uri: itemImage }} style={styles.imageStyle} />
                <View style={{ marginRight: 15, width: '60%', paddingRight: 0 }}>
                    <Text style={styles.titleStyle} numberOfLines={1}>
                        {itemTitle} 
                    </Text>
                    {itemStatus !== undefined && !itemStatus && <Text style={styles.closeBuffetStyle}>( تعطیل )</Text>}
                    {itemRank !== undefined && itemRank > 0 ?
                        <StarRating
                            maxStars={5}
                            rating={itemRank}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'} 
                            fullStarColor={EStyleSheet.value('$YELLOW_COLOR')}  
                            starSize={18} 
                            containerStyle={styles.rateStyle}            
                            disabled
                        />
                        :
                        <View />
                    }
                    <Text style={styles.descStyle}>{itemDesc}</Text>
                </View>

                {itemStatus !== undefined &&
                    <View 
                        style={[styles.statusBox, { 
                            backgroundColor: itemStatus ? EStyleSheet.value('$GREEN_COLOR') : EStyleSheet.value('$RED_COLOR')
                        }]}
                    >
                        <Icon name={itemStatus ? 'unlock' : 'lock'} size={16} />
                    </View>
                }
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = EStyleSheet.create({
    container: {
        width: '85%',
        height: 'auto',
        backgroundColor: '$BG_BOX_COLOR',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 10
    },
    imageAndDetailsBox: {
        width: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },  
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: -15,
        
    },
    rateStyle: {
        width: 90, 
        marginTop: 10, 
        alignSelf: 'flex-end'
    },
    titleStyle: {
        color: '#FFF',
        fontFamily: '$BOLD_FONT',
        fontSize: 18,
        textAlign: 'right'
    }, 
    descStyle: {
        fontFamily: '$REGULAR_FONT',
        color: '#FFF',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'right'
    },
    statusBox: {
        width: 30,
        height: 30,
        borderRadius: 10,
        backgroundColor: '$GREEN_COLOR',
        justifyContent: 'center',
        alignItems: 'center',
        top: 15,
        right: 15,
        position: 'absolute'
    },
    closeBuffetStyle: {
        fontFamily: '$REGULAR_FONT',
        color: '$GRAY_COLOR',
        fontSize: 14,
        marginLeft: 20,
        textAlign: 'right'
    }
});
