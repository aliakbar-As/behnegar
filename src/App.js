import React, { Component } from 'react';
import { View, StatusBar, } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RouterComponent from './Router/Routes';

EStyleSheet.build({
    // Colors variables
    $DARK_COLOR: '#12141d',
    $GREEN_COLOR: '#006241',
    $BLUE_COLOR: '#0a7fff',
    $YELLOW_COLOR: '#e7b538',
    $GRAY_COLOR: '#8b8e9f',
    $DARK_GRAY_COLOR: '#505050',
    $RED_COLOR: '#ff0a45',
    $BG_BOX_COLOR: '#181b25',
    $BORDER_BOX_COLOR: '#252832',
    $ORANGE_COLOR: '#e7b538',


    // Fonts Variables
    $LITE_FONT: 'IRANSansMobile_Light',
    $REGULAR_FONT: 'num',
    $BOLD_FONT: 'IRANSans(FaNum)_Bold',
    $ENG_FONT: 'CoreMellow-Regular'
});

export default class App extends Component {
    componentDidMount() {
        console.disableYellowBox = true;
    };
    render() {

        return (
            <View style={{ flex: 1, }}>
                <StatusBar backgroundColor={EStyleSheet.value('$GREEN_COLOR')} barStyle="light-content" />
                <RouterComponent />
            </View>
        );
    };
};
