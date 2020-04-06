import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, BackHandler } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useLayoutAnimation, enableAnimation, useAnimation, Logger } from '../../Utils';

import { Icon } from './Icomoon';

const collapseData = [
    {
        categoryTitle: 'فیلتر 1',
        categoryChilds: [
            { childName: 'شماره 1' },
            { childName: 'شماره 2' },
            { childName: 'شماره 3' },
            { childName: 'شماره 4' },
        ]
    },
    {
        categoryTitle: 'فیلتر 2',
        categoryChilds: [
            { childName: 'شماره 5' },
            { childName: 'شماره 6' },
            { childName: 'شماره 7' },
            { childName: 'شماره 8' },
        ]
    },
    {
        categoryTitle: 'فیلتر 3',
        categoryChilds: [
            { childName: 'شماره 5' },
            { childName: 'شماره 6' },
            { childName: 'شماره 7' },
            { childName: 'شماره 8' },
        ]
    },
];

// CollapseModal & OkModal 

export const Modal = ({ navigation }) => {
    const [opacity] = useAnimation(0, 1, 50, 200);
    const [scale] = useAnimation(0.8, 1, 50, 200);

    const disbaleCancelOption = navigation.state.params.disbaleCancelOption === true;

    const renderModal = () => {
        switch (navigation.state.params.type) {
            case 'OkModal': 
                return <OkModal {...navigation.state.params} />;
            case 'ConfirmModal': 
                return <ConfirmModal {...navigation.state.params} />;
            case 'WrapperModal':
                return navigation.state.params.content;
            case 'CollapseModal':
                return <CollapseModal {...navigation.state.params} />;

            default: 
                return <View />;
        }
    };

    useEffect(() => {
        let backHandler = null;

        if (disbaleCancelOption) {
            backHandler = BackHandler.addEventListener('hardwareBackPress', () => { return true; });
        } 

        return () => {
            backHandler !== null && backHandler.remove();
        }
    }, []);

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => disbaleCancelOption ? null : navigation.pop()}>
                <View style={styles.modalBackground} />
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.modalWrapper, { opacity, transform: [{ scale }] }]}>
                <View style={styles.modalHeader}>
                    {!disbaleCancelOption ?
                        <TouchableWithoutFeedback onPress={() => navigation.pop()}>
                            <View style={styles.iconBox}>
                                <Icon name="close" color={EStyleSheet.value('$GRAY_COLOR')} />
                            </View>
                        </TouchableWithoutFeedback>
                        :
                        <View />
                    }
                    <Text style={styles.textStyle}>{navigation.state.params.title}</Text>
                </View>
                {renderModal()}
            </Animated.View>
        </View>
    );
};

const CollapseModal = () => {
    useEffect(() => {
        enableAnimation();
    });
    const [selectedFilterItem, setFilterItem] = useState(0);
  
    const startAnimation = useCallback((index) => {
            useLayoutAnimation();
            setFilterItem(index);
        },
        [selectedFilterItem]
    );

    return (
        collapseData.map((item, index) => (
            <TouchableWithoutFeedback onPress={() => startAnimation(index)} key={index}>
                <View style={styles.collapseItem}>
                    <View style={styles.collapseItemHeader}>
                        <Icon name={index === selectedFilterItem ? 'arrow-down' : 'arrow-up'} color="#000" />
                        <Text style={styles.textStyle}>{item.categoryTitle}</Text>
                    </View>
                    { index === selectedFilterItem &&
                        <View style={styles.collapseChildItemsBox}>
                            { 
                                item.categoryChilds.map((item, index) => (
                                    <View style={styles.childItemBox} key={index}>
                                        <Icon name="dish" color="#666" />
                                        <Text style={styles.childNameStyle}>{item.childName}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    }
                </View>
            </TouchableWithoutFeedback>

        )) 
    );
};

const OkModal = ({ subject, okPress, okText = 'متوجه شدم!' }) => {
    return (
        <View style={styles.confirmContainer}>
            <View style={styles.confirmContent}>
                <Text style={styles.confirmContentText}>{subject}</Text>
            </View>
            <View style={styles.modalFooter}>
                <TouchableWithoutFeedback onPress={() => okPress()}>
                    <View style={styles.confirmBtns}>
                        <Text style={styles.confirmBtnText}>{okText}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const ConfirmModal = ({ subject, okPress, cancelPress, cancelText = 'خیر', okText = 'بله' }) => {
    return (
        <View style={styles.confirmContainer}>
            <View style={styles.confirmContent}>
                <Text style={styles.confirmContentText}>{subject}</Text>
            </View>
            <View style={styles.modalFooter}>
                <TouchableWithoutFeedback onPress={() => cancelPress()}>
                    <View style={styles.confirmBtns}>
                        <Text style={styles.confirmBtnText}>{cancelText}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => okPress()}>
                    <View style={styles.confirmBtns}>
                        <Text style={styles.confirmBtnText}>{okText}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const WrapperModal = ({ content }) => {
    return (
        <View style={styles.modalWrapper}>
            <View style={styles.modalHeader}>
                <Icon name="close" />
                <Text>افزودن فیلتر</Text>
            </View>
            <View style={styles.content}>
                {content}
            </View>
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(18, 20, 29, 0.7)',
        
    },
    modalBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },  
    modalWrapper: {
        width: '70%',
        height: 'auto',
        maxHeight: '70%',
        minHeight: 200,
        backgroundColor: '#FFF',
        borderRadius: 20,
        overflow: 'hidden',
        opacity: 0
    },
    modalHeader: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },  
    textStyle: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 16,
        textAlign: 'right'
    },
    modalFooter: {
        alignSelf: 'flex-end',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: 55,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    iconBox: {
        width: 70,
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    collapseItemHeader: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    collapseChildItemsBox: {
        width: '100%',
        height: 'auto',
        padding: 15,
        backgroundColor: '#CCC',
    },
    childItemBox: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    childNameStyle: {
        fontFamily: '$LITE_FONT',
        fontSize: 16
    },
    confirmBtns: {
        flex: 0.46,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$BG_BOX_COLOR',
        borderRadius: 10
    },
    confirmBtnText: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 12,
        color: '#FFF'
    },
    confirmContainer: {
        flex: 1
    },  
    confirmContent: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmContentText: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 16,
        textAlign: 'center'
    }
});
