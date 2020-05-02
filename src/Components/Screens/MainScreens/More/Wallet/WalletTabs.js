import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { Header } from '../../../../Commons';

import Wallet from './Wallet';
import Transaction from './Transaction';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
    first: Wallet,
    second: Transaction,
});
const renderTabBar = props => (
    <TabBar
        {...props}
        labelStyle={{ fontFamily: 'num', }}
        indicatorStyle={{ backgroundColor: '#F7AC3B',height: 4 }}
        style={{ backgroundColor: EStyleSheet.value('$GREEN_COLOR') }}
    />
);

export default WalletTabs = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'افزایش اعتبار' },
        { key: 'second', title: 'تراکنش ها' },
    ]);

    return (
        <View style={styles.container}>
            <Header
                title={'کیف پول'}
                none
                back
                backOnclick={() => navigation.pop()}
            />

            <TabView
                renderTabBar={renderTabBar}
                style={{ marginTop: -20 }}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                indicatorStyle={{ backgroundColor: 'red' }}
                initialLayout={initialLayout}
            />
        </View>
    );
};
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});