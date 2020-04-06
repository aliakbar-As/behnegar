import React from 'react';
import { View, Text } from 'react-native';
import StarRating from 'react-native-star-rating';
import { observer } from 'mobx-react-lite';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Button } from '../Commons';

export const RateModalContent = observer(({ store }) => {
	return (
		<View style={styles.rateModalContainer}>
			<View style={styles.rateBox}>
				<View>
					<StarRating
						rating={store.userRate}
						maxStars={5}
						emptyStar={'ios-star-outline'}
						fullStar={'ios-star'}
						halfStar={'ios-star-half'}
						iconSet={'Ionicons'}
						fullStarColor={EStyleSheet.value('$YELLOW_COLOR')}
						starSize={29}
						containerStyle={[styles.rateStyle, { width: 150 }]}
						selectedStar={rate => store.changeRate(rate)}
					/>
				</View>
				{store.submitedRate ?
					<Text style={styles.statusOfRateText}>نظر شما با موفقیت ثبت شده است .</Text>
					:
					<Button
						text='ثبت نظر'
						onPress={() => store.userRate && store.submitRate(store.userRate)}
					/>
				}
			</View>
		</View>
	);
});

const styles = EStyleSheet.create({
    rateModalContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	rateBox: {
		width: '90%',
		height: 150,
		alignItems: 'center',
		justifyContent: 'space-around',
    },
    rateStyle: {
		width: 100,
		marginVertical: 10,
		alignSelf: 'flex-end',
    },
    statusOfRateText: {
		fontFamily: '$REGULAR_FONT',
		color: '$GRAY_COLOR',
		fontSize: 14,
	},
});

