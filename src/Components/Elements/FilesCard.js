import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

export const FilesCard = ({
    title,
    fileImage,
}) => {
    return(
        <View style={styles.container}>
            <Image 
            source={fileImage}
            style={styles.fileImageStyle}
            />
            <Text>{title}</Text>
        </View>
    );
};
const styles = EStyleSheet.create({
    fileImageStyle: {
        width: '30%',
        height: 50
    },
    container: {
        width: widthScreen - 32,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
        alignSelf: 'center',
        flexDirection: 'row',
    }
})