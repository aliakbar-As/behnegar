import React, { useRef, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from '../Commons';


export const NumberCarousel = ({ title, start = 55, end = 150, numberOfDots = 5, selectedNumber }) => {
    const scrollViewRef = useRef(null);
    const [value, setValue] = useState(start);

    const handleScroll = (event) => {
        const value = ((event.nativeEvent.contentOffset.x / 25) + start).toFixed();
        setValue(value);
        
        if (event.nativeEvent.contentOffset.x > ((end - start) / 5) * 125) {
            scrollViewRef.current.scrollTo({ x: (((end - start) / 5) * 125) - 1, y: 0, animated: true });
        }
        if (value <= start - 1) {
            scrollViewRef.current.scrollTo({ x: 55, y: 0, animated: true });
        }

        if (event.nativeEvent.contentOffset.x % 25 === 0) {
            scrollViewRef.current.scrollTo({ x: event.nativeEvent.contentOffset.x, y: 0, animated: true });
        }
    };

    const renderDots = () => {
        const dotsViews = [];
        let i = 0;
        for (i = start; i < end; i += 5) {
            const view = <FivePoint value={i} key={i} numberOfDots={numberOfDots} />;
            dotsViews.push(view);
        }
        return dotsViews;
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleAndValueBox}>
                <Text style={styles.textStyle}>{value}</Text>
                <Text style={styles.textStyle}>{title}</Text>
            </View>
            <ScrollView 
                ref={scrollViewRef}
                style={styles.scrollView}
                onScroll={handleScroll}
                scrollEventThrottle={25}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={() => selectedNumber(value)}
                horizontal
            >
                <FivePoint value={0} />
                {renderDots()}
                <FivePoint value={end} numberOfDots={1} />
                <FivePoint value={0} />
            </ScrollView>
            <Icon name="arrow-up" size={20} style={styles.icon} />
        </View>
    );
};

const FivePoint = ({ value, numberOfDots }) => {
    const renderLines = () => {
        const linesViews = [];
        for (let i = 0; i < numberOfDots; i++) {
            if (i === 0) {
                linesViews.push(<View style={styles.bigPoint} key={i} />);
            } else {
                linesViews.push(<View style={styles.smallPoint} key={i} />);
            }
        }
        return linesViews;
    };

    if (value !== 0) {
        return (
            <View style={styles.fivePointAndTitleBox}>
                <Text style={styles.textStyle}>{value}</Text>
                <View style={styles.pointBox}>
                    {/* <View style={styles.bigPoint} />
                    <View style={styles.smallPoint} />
                    <View style={styles.smallPoint} />
                    <View style={styles.smallPoint} />
                    <View style={styles.smallPoint} /> */}
                    {renderLines()}
                </View>
            </View>
        );
    }
    return (
        <View style={styles.fivePointAndTitleBox}>
            <View style={styles.pointBox}>
                
            </View>
        </View>
    );
    
}

const styles = EStyleSheet.create({
    container: {
        width: 253,
        height: 'auto'
    },
    scrollView: {
        marginBottom: 5
    },  
    titleAndValueBox: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
    pointBox: {
        width: 125,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 25,
    },
    bigPoint: {
        width: 2,
        height: 35,
        borderRadius: 2,
        backgroundColor: '#FFF'
    },
    smallPoint: {
        width: 1,
        height: 20,
        borderRadius: 2,
        backgroundColor: '#FFF'
    },
    fivePointAndTitleBox: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRightColor: '#FFF',
    },
    textStyle: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 18,
        color: '#FFF',
    },
    icon: {
        alignSelf: 'center',
    }
})