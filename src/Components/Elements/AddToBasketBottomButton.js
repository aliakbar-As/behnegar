import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Numbers } from '../../Utils';

export const AddToBasketBottomButton = ({ basketStatus, onPress, }) => {
    if (basketStatus.length) {
        return (
            <TouchableWithoutFeedback onPress={() => onPress()} >
                <View style={styles.buyBasketBoxStyle}>
					<View style={styles.detailsOfBasketBox}>
						<View style={styles.buyBasketNumberStyle}>
							<Text style={styles.buyBasketTextStyle}>
								{Numbers.putCommas(basketStatus.totalPrice)} تومان
							</Text>
						</View>
						<View style={[styles.buyBasketNumberStyle, { width: 35 }]}>
							<Text style={styles.buyBasketTextStyle}>
								{basketStatus.length.toString()}
							</Text>
						</View>
					</View>
                    <Text style={styles.buyBasketTextStyle}>
                        رفتن به سبد خرید
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    } 
    return null;
};

const styles = EStyleSheet.create({
    buyBasketBoxStyle: {
		width: '100%',
		height: 50,
		backgroundColor: '$GREEN_COLOR',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingHorizontal: 15
	},
	buyBasketTextStyle: {
		fontFamily: '$BOLD_FONT',
		color: '#FFF',
		fontSize: 18,
	},
	detailsOfBasketBox: {
		width: 130,
		height: 35,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},	
	buyBasketNumberStyle: {
		width: 120,
		height: 35,
		marginHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#17b68f',
		borderRadius: 10,
	},
});
