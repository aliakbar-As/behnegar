import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Modal,
    Dimensions,
    Linking,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from 'react-native';
import EStylesSheet from 'react-native-extended-stylesheet';
import Video from 'react-native-video';


const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export const VideoCard = ({
    mainTitle,
    videoLink,
    thumbnail,
    description,
    onPress,
    date
}) => {
    return (
        <TouchableHighlight
            underlayColor={'transparent'}
            onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.hdrTitle}>
                    {/* جاستین بیبر - خوشمزه */}
                    {mainTitle}
                </Text>


                <Text
                    onPress={() => Linking.openURL(videoLink)}
                    numberOfLines={1}
                    style={styles.linkTitle}>
                    {/* https://www.youtube.com */}
                    {videoLink}
                </Text>

                <View style={styles.innerContainer}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlXZJsOJoReObL41j572FaQ9lNAtNWzsiYQRgL0vt8W1VDZpde' }}
                        // source={thumbnail}
                        style={styles.image}
                    />

                    <View style={{
                        width: '60%',
                        flexDirection: 'column', justifyContent: 'center', marginRight: 10,
                        alignItems: 'flex-end'
                    }}>
                        <Text
                            style={styles.desTitle}
                            numberOfLines={1}>
                                 در تاریخ -- {date}
                        </Text>

                        <Text
                            style={styles.desTitle}
                            numberOfLines={2}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        {/* {description} */}
                        </Text>
                    </View>

                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = EStylesSheet.create({
    desTitle: {
        fontSize: 14,
        color: '#eee',
        textAlign: 'right',
        // width: '60%',
        fontFamily: '$REGULAR_FONT',

    },
    image: {
        width: 100,
        height: 70,
        marginLeft: 10,
    },
    innerContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    linkTitle: {
        fontSize: 16,
        color: '#84CEFF',
        textAlign: 'right',
        fontFamily: '$REGULAR_FONT',
    },
    container: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        marginTop: -10,
        width: widthScreen - 16,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    hdrTitle: {
        fontSize: 18,
        color: '#eee',
        textAlign: 'right',
        width: '60%',
        fontFamily: '$BOLD_FONT',
    },
});
