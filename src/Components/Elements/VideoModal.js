import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EStylesSheet from 'react-native-extended-stylesheet';
import Video from 'react-native-video';

export const VideoModal = ({onClosePress, title, source}) => {
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
                {title ? title : 'ویدیو'}
            </Text>
            <View style={styles.sliderWrapper}>
                <Video
                    // position: 'absolute'
                    controls={true}
                    resizeMode={'contain'}
                    style={styles.challengeVideoStyle}
                    source={source}
                />
            </View>
            <TouchableOpacity onPress={() => onClosePress()} style={styles.closeButton}>
                <Text style={styles.closeText}>{'بستن ویدیو'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = EStylesSheet.create({
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(20,20,20,0.8)',
        flex: 1,
        padding: 5,
    },
    modalTitle: {
        fontFamily: '$BOLD_FONT',
        fontSize: 23,
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 40,
    },
    closeButton: {
        position: 'absolute',
        alignItems: 'center',
        bottom: '20%',
        paddingVertical: 5,
        backgroundColor: 'rgba(255,60,60,0.8)',
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 20,
    },
    closeText: {
        fontFamily: '$BOLD_FONT',
        fontSize: 20,
        color: '#FFF',
    },
    sliderWrapper: {
        height: 180,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    challengeVideoStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
});
