import React from 'react';
import { View, TextInput, Keyboard, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const CodeInput = ({ initialCode = '', inputNumbers = 4, callback, error, autoFocus, maxLength = 1, }) => {
    // const [codes, setCodes] = useState([]);
    const codes = [];
    const inputWidth = (Dimensions.get('window').width / inputNumbers) - 30;
    const refInputs = [];
    let inputDeleteController = 0;
    let codeWrongError = error;

    function handleEnteredCode(text, i) {
        codeWrongError = false;
        if (text.length) {
            if (i + 1 <= inputNumbers) {
                codes[i] = text[0];
                if (refInputs[i + 1] !== undefined) {
                    refInputs[i + 1].focus();
                } else {
                    callback(codes.join(''));
                    Keyboard.dismiss();
                }
            }
        } else {
            if (codes[i]) codes[i] = ' ';
            inputDeleteController++;
            if (
                inputDeleteController === 2 && 
                codes[i] === undefined && refInputs[i - 1]
            ) { 
                refInputs[i - 1].focus(); 
                inputDeleteController = 0;
            }
        }
    }

    function renderInputs() {
        const inputs = [];

        for (let i = 0; i < inputNumbers; i++) {
            inputs.push(
                <View style={[styles.inputBox, { width: inputWidth }]} key={i}>
                    <TextInput
                        ref={(input) => refInputs[i] = input} 
                        maxLength={maxLength}
                        value={codes[i]}
                        keyboardType="number-pad"
                        style={[styles.inputStyle, {
                            borderBottomColor: codeWrongError ? 
                            EStyleSheet.value('$RED_COLOR') : EStyleSheet.value('$GRAY_COLOR')  
                        }]}
                        onChangeText={(text) => handleEnteredCode(text, i)}
                        autoFocus={autoFocus && i === 0}
                    />
                </View>
            );
        }
        return inputs;
    }
    return (
        <View style={styles.container}>
            {renderInputs()}
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 20,
    },
    inputBox: {
        width: 60,
        height: 60
    },
    inputStyle: {
        borderWidth: 0,
        borderBottomColor: '$GRAY_COLOR',
        borderBottomWidth: 2,
        width: '100%',
        textAlign: 'center',
        height: 40,
        color: '#FFF',
        fontFamily: '$BOLD_FONT',
        fontSize: 14
    },
});
