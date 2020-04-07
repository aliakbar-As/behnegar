import React from 'react';
import { View, Text, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Input = ({
    style,
    inputStyle,
    value,
    placeholder,
    keyboardType,
    maxLength,
    multiline,
    numberOfLines,
    onChangeText,
    autoFocus,
    icon,
    editable,
    returnKeyType,
    title,
    extraStyle,
    secureTextEntry,
    iconOnclick,
    selectionColor,
    forced,
    noTitle
}) => {
    return (
        <View style={[styles.mainContainer, extraStyle]}>
            {noTitle ? null : 
            <Text style={styles.titleStyle}>{title} <Text style={{color: 'red'}}>{forced ? '*' : ''}</Text></Text>}
            
            <View style={[styles.container, style]}>
                <TouchableOpacity onPress={iconOnclick}>
                    <Icon name={icon} size={20} color={EStyleSheet.value('$GRAY_COLOR')} />
                </TouchableOpacity>
                <TextInput
                    style={[styles.inputStyle, inputStyle]}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    placeholderTextColor={EStyleSheet.value('$GRAY_COLOR')}
                    underlineColorAndroid="transparent"
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    multiline={multiline || false}
                    numberOfLines={numberOfLines || 1}
                    allowFontScaling={false}
                    onChangeText={(text) => onChangeText(text)}
                    selectionColor={EStyleSheet.value('$GREEN_COLOR')}
                    autoFocus={autoFocus}
                    editable={editable}
                    returnKeyType={returnKeyType || 'done'}
                />
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    mainContainer: {
        paddingHorizontal: 16,
        marginTop: 20,
    },
    titleStyle: {
        textAlign: 'right',
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
        fontFamily: '$REGULAR_FONT',
    },
    container: {
        width: '100%',
        height: 35,
        borderColor: '#eee',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    inputStyle: {
        flex: 1,
        fontFamily: '$REGULAR_FONT',
        color: '#010101',
        fontSize: 12,
        textAlign: 'right',
        height: 40,
    }
})