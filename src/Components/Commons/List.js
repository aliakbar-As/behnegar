import React, { useEffect } from 'react';
import { FlatList, View, Image, RefreshControl } from 'react-native';
import LottieView from 'lottie-react-native';

import noDataImage from '../../assets/images/mainScreens/noData.png';

import listFooterLoading from '../../assets/json/listFooterLoading.json';

export const List = ({ 
    typeOfList = 'flatList', 
    store, 
    data, 
    renderItem, 
    loading, 
    ListHeader, 
    dataFetched = false, 
    onRefresh = null,
}) => {
    const dataFetch = store !== undefined ? store.data : data;
    const extraData = extraData !== undefined ? extraData : dataFetch;
    const dataFetchControlled = store !== undefined ? store.dataFetchControlled : dataFetched;

    const renderEmpty = () => {
        if (loading && !dataFetchControlled) {
            return null;
        } else if (loading && dataFetchControlled) {
            return <NoDataCmp />;
        }
    };

    if (typeOfList === 'flatList') {
        return (
            <FlatList
                data={dataFetch} 
                extraData={dataFetch}
                renderItem={({ item, index }) => renderItem(item, index)}
                keyExtractor={(item, i) => i.toString()}
                onEndReachedThreshold={0.3}
                onEndReached={() => store && store.onEndReached()}
                ListHeaderComponent={ListHeader && ListHeader}
                refreshControl={
                    <RefreshControl
                        colors={['#9Bd35A', '#689F38']}
                        refreshing={store ? store.loading : false}
                        onRefresh={() => onRefresh()}
                    />
                }
                contentContainerStyle={{ paddingBottom: 20 }}
                ListEmptyComponent={renderEmpty()}
                ListFooterComponent={loading && !dataFetchControlled && <FooterLoading />}
            />
        );
    } else if (typeOfList === 'reactElement') {
        return dataFetch.map((item, i) => renderItem(item, i));
    }
    return <View />;
};


const NoDataCmp = () => {
    return (
        <View style={styles.tabContainer}>
            <Image source={noDataImage} style={styles.noDataImage} />
        </View>
    );
};

const FooterLoading = () => {
    let playFooterAnimation;

    useEffect(() => {
        playFooterAnimation.play();
    }, []);


    return (
        <View style={styles.footerContainer}>
            <LottieView 
                ref={(animation) => { playFooterAnimation = animation; }} 
                source={listFooterLoading} 
                style={{ width: 100 }} 
                speed={1} 
                loop 
            />
        </View>
    );
};

const styles = {
    tabContainer: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataImage: {
        width: 200,
        height: 250,
        resizeMode: 'contain'
    },
    footerContainer: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
