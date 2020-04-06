import React, { useEffect, useContext } from 'react';
import { View, Image, sl,Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import { SafeView } from '../../Commons';


export default Splash = ({ navigation }) => {
    useEffect(() => {
       
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
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashStyle: {
        width: 150,
        resizeMode: 'contain'
    }
});
