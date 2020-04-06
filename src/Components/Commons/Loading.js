import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LottieView from 'lottie-react-native';
import { SafeView } from './SafeView';

import lottieLoading from '../../assets/json/listFooterLoading.json';

const screenSize = Dimensions.get('window');

export const Loading = () => {
    return (
        <View style={styles.loadingBox}>
            <ActivityIndicator color={EStyleSheet.value('$GREEN_COLOR')} size="large" />
        </View>
    );
};

export const FullScreenLoading = () => {
    return (
        <View style={styles.fullScreenLoadingBox}>
			<LottieView 
				source={lottieLoading} 
				style={{ width: 150, alignSelf: 'center' }} 
				speed={1} 
				autoPlay
				loop 
			/>
        </View>
    );
};

const styles = EStyleSheet.create({
    loadingBox: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    fullScreenLoadingBox: {
        // flex: 1,
        width: screenSize.width,
        height: screenSize.height,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        top: 0,
        zIndex: 100
    }
});
