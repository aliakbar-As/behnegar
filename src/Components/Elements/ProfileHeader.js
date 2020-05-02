import React from 'react';
import {
    View,
    Text,
    Image,
    ActionSheetIOS,
    ScrollView,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/AntDesign';


export const ProfileHeader = ({
    title,
    userPic,
    onPress,
    backonclick,
}) => {

    return (
        <View style={styles.headerContainer}>
            <TouchableHighlight
                style={{ padding: 16, margin: -16 }}
                underlayColor={'transparent'}
                onPress={backonclick}>
                <Icon name={'arrowleft'} size={30} color={'#fff'} />
            </TouchableHighlight>

            <Text style={styles.headerTitle}>
                {title}
            </Text>

            <View style={{ alignItems: 'center', }}>
                <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={onPress}>

                    <View style={styles.headerImageContainer}>

                        {userPic !== null ?
                            <Image
                                source={{ uri: userPic }}
                                style={styles.headerImage}
                            />
                            :
                            <Icon
                                name={'user'}
                                size={60}
                                style={{ alignSelf: 'center', marginTop: 16, }}
                                color={EStyleSheet.value('$GREEN_COLOR')} />
                        }

                    </View>
                </TouchableHighlight>
                <Icon
                    name={'pluscircle'}
                    size={30}
                    style={styles.addIconStyle}
                    color={'#6d9773'}
                />
            </View>
        </View>
    )
};

const styles = EStyleSheet.create({
    addIconStyle: {
        marginRight: -50,
        marginTop: -20,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    headerImage: {
        height: 100,
        width: 100,
        borderRadius: 100,
        alignSelf: 'center',
    },
    headerImageContainer: {
        alignSelf: 'center',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '$GREEN_COLOR',
        backgroundColor: '#fff',
        height: 100,
        width: 100,
        alignItems: 'center',
    },
    headerContainer: {
        width: '100%',
        height: Dimensions.get('window').width / 2 - 50,
        backgroundColor: '$GREEN_COLOR',
        borderBottomRightRadius: 200,
        borderBottomLeftRadius: 200,
        paddingLeft: 16,
    },
    headerTitle: {
        textAlign: 'center',
        fontFamily: '$BOLD_FONT',
        fontSize: 18,
        color: '#fff',
        marginTop: -16,
        marginBottom: 16,
    },
});
