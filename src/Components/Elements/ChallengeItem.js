import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StarRating from 'react-native-star-rating';
import Video from 'react-native-video';

export const ChallengeItem =
    ({
        itemTitle,
        itemOrganizer,
        itemDate,
        itemCategory,
        itemAward,
        itemDifficulty,
        itemImage,
        onPress,
    }) => {
        return (
            <TouchableWithoutFeedback onPress={() => onPress()}>
                <View style={styles.container}>
                    <View style={[styles.dayBadge,
                    {
                        backgroundColor: itemDate >= 10 ? EStyleSheet.value('$GREEN_COLOR') :
                            itemDate >= 0 ? EStyleSheet.value('$YELLOW_COLOR') : EStyleSheet.value('$RED_COLOR'),
                    }]}>
                        {itemDate > 0 ?
                            <Text style={styles.badgeText}>{`${itemDate} روز باقیمانده`}</Text> :
                            <Text style={styles.badgeText}>تمام شد</Text>
                        }
                    </View>
                    <View style={styles.imageAndDetailsBox}>
                        <View style={styles.thumbnailContainer}>
                            <Video
                                paused={true}
                                resizeMode={'cover'}
                                style={styles.challengeVideoStyle}
                                source={{ uri: itemImage }}
                            />
                        </View>
                        <View style={{ marginRight: 15, width: '60%', paddingRight: 0 }}>
                            <Text style={styles.titleStyle} numberOfLines={1}>
                                {itemTitle}
                            </Text>
                            <Text style={styles.descStyle}>{'برگزار کننده: ' + itemOrganizer}</Text>
                            <Text style={styles.descStyle}>{'دسته بندی: ' + itemCategory}</Text>
                            <Text style={styles.descStyle}>{'مجموع جوایز: ' + itemAward}</Text>
                            <StarRating
                                maxStars={5}
                                rating={itemDifficulty}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                fullStarColor={EStyleSheet.value('$YELLOW_COLOR')}
                                starSize={18}
                                containerStyle={styles.rateStyle}
                                disabled
                            />
                        </View>
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
        // paddingVertical: 10,
    },
    imageAndDetailsBox: {
        marginVertical: 10,
        width: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    thumbnailContainer: {
        width: 100,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: -15,
    },
    challengeVideoStyle: {
        height: 100,
        width: 100,
        // backgroundColor: 'transparent',
    },
    titleStyle: {
        color: '#FFF',
        fontFamily: '$BOLD_FONT',
        fontSize: 18,
        textAlign: 'right',
    },
    descStyle: {
        fontFamily: '$REGULAR_FONT',
        color: '$GRAY_COLOR',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'right',
    },
    rateStyle: {
        width: 100,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    dayBadge: {
        width: 25,
        height: '100%',
        position: 'absolute',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        // top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        transform: [{ rotate: '-90deg' }],
        fontFamily: '$REGULAR_FONT',
        fontSize: 16,
        width: 100,
        alignSelf: 'center',
        textAlign: 'center'
    },
});
