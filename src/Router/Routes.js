import React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Components/Screens/AuthScreens/Splash';
import Login from '../Components/Screens/AuthScreens/Login';
import Register from '../Components/Screens/AuthScreens/Register';
import TabNavigator from './ScreensConfig/MainConfig/TabNavigator';

const Stack = createStackNavigator();



export default RouterComponent = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="Login"
                headerMode="none"
                mode={'card'}
            >
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                />

                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                />
            </Stack.Navigator>


        </NavigationContainer>

    )
};
