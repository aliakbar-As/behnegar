import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
const plus = require('../../assets/images/mainScreens/plus.png');
const minus = require('../../assets/images/mainScreens/minus.png');
const pdf = require('../../assets/images/mainScreens/pdf.png');

export const FilesCard = ({
    title,
    fileImage,
    icon,
    fileIconColor,
    fileIconSize,
    size, page, cost,
}) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                
                <Image
                    source={pdf}
                    style={styles.fileImageStyle}
                />

                <View style={{ marginLeft: 16 }}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.sizeTitle}>
                        size: {size} |
                        page: {page}
                    </Text>

                    <Text style={[styles.sizeTitle, { alignSelf: 'flex-start', }]}>
                        {cost} تومان
                    </Text>
                </View>
            </View>


            <View style={styles.counterContainer}>
                <Image
                    source={plus}
                    style={styles.icons}
                />

                <Text style={[styles.numTitle, { marginVertical: 5 }]}>
                    4
                </Text>

                <Image
                    source={minus}
                    style={styles.icons}
                />

            </View>
        </View>
    );
};
const styles = EStyleSheet.create({
    icons: {
        height: 15,
        width: 15,
        alignSelf: 'center',
    },
    counterContainer: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        padding: 5,
        borderRadius: 50
    },
    numTitle: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 16,
        color: 'gray',
    },
    sizeTitle: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 12,
        color: 'gray',
    },
    title: {
        fontFamily: '$BOLD_FONT',
        fontSize: 16,
        color: '#17171A',
    },
    fileImageStyle: {
        width: '25%',
        height: 70
    },
    container: {
        width: widthScreen - 32,
        paddingVertical: 25,
        borderBottomWidth: 1,
        borderColor: '#eee',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})