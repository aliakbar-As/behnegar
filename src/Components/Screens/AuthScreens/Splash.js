import React, { useEffect, useContext } from 'react';
import { View, Image, sl, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import { SafeView } from '../../Commons';
import AsyncStorage from '@react-native-community/async-storage';
import { Logger } from '../../../Utils';
import { CommonActions } from '@react-navigation/native';

const login = (navigation) => {

    setTimeout(async () => {
        AsyncStorage.getItem('@token', (error, result) => {
            if (result !== null) {
                Logger(result, 'token');
                navigation.dispatch(CommonActions.reset({
                    index: 1,
                    routes: [{
                        name: 'TabNavigator',
                        params: { user: 'splash' },
                    },],
                }));
            } else {
                navigation.dispatch(CommonActions.reset({
                    index: 1,
                    routes: [{
                        name: 'Login',
                        params: { user: 'spalsh' },
                    },],
                }));
            };
        });
    }, 3000);
};
export default Splash = ({ navigation }) => {
    useEffect(() => {
        login(navigation);

        return;
        AuthStore.initApplication().then((data) => {
            if (data) {
                if (AuthStore.isBuffetManager) {
                    BuffetManagementStore.getBuffetData();
                }
                navigation.navigate('Main.Home');
            } else {
                navigation.replace('Auth.Login');
            }
        });
    }, []);


    return (
        <SafeView>
            <View style={styles.container}>
                <Text onPress={() => navigation.navigate('Login')}>hello splash</Text>
            </View>
        </SafeView>
    );
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$GREEN_COLOR',
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashStyle: {
        width: 150,
        resizeMode: 'contain'
    }
});