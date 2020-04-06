import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Input} from './';


export const SearchAndFilter =
    ({
         onChangeText,
         backgroundStyle,
         onFilterPress,
         filter,
     }) => {
        return (
            <View style={[styles.container, backgroundStyle]}>
                <Input
                    placeholder="جستجو"
                    style={[styles.inputStyle, filter ? {width: '85%'} : {width: '100%'}]}
                    icon="ios-search"
                    onChangeText={(txt) => onChangeText(txt)}
                />
                {filter ?
                    <TouchableWithoutFeedback onPress={() => onFilterPress()}>
                        <Icon name="filter" color="#FFF" size={30}/>
                    </TouchableWithoutFeedback>
                    :
                    null
                }
            </View>
        );
    };

const styles = EStyleSheet.create({
    container: {
        // width: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 5
    },
    inputStyle: {
        backgroundColor: '#181b25',
        borderWidth: 0,
        alignSelf: 'center',
        borderRadius: 20,
    },
});
