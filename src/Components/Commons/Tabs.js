import React, { useState } from 'react';
import { Dimensions, } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Tabs = ({ defaultIndex = 1, indexChange, RightTabCmp, LeftTabCmp, RightTabText, LeftTabText, }) => {
    const [tabConfig, setTabConfig] = useState({
        index: defaultIndex,
        routes: [
            { key: 'right', title: LeftTabText },
            { key: 'left', title: RightTabText },
        ],
    });

    const renderTabBar = (props) => {
        return (
            <TabBar
                {...props}
                indicatorStyle={styles.tabBarIndicatorStyle}
                style={styles.tabBarStyle}
                labelStyle={styles.tabBarLabelStyle}
            />
        );
    };

    return (
        <TabView
            navigationState={tabConfig}
            renderScene={SceneMap({
                right: () => <LeftTabCmp />,
                left: () => <RightTabCmp />,
            })}
            onIndexChange={index => { 
                setTabConfig({ ...tabConfig, index }); 
                indexChange && indexChange(index); 
            }}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={props => renderTabBar(props)}
            style={{ height: 'auto' }}
            
        />
    );
};

const styles = EStyleSheet.create({
    tabBarStyle: {
        backgroundColor: '$DARK_COLOR'
    },
    tabBarIndicatorStyle: {
        backgroundColor: '$GREEN_COLOR'
    },
    tabBarLabelStyle: {
        fontFamily: '$REGULAR_FONT',
        fontSize: 22
    }
});
