import React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Home from '../../../Components/Screens/MainScreens/Home';


import {
    PrintScreen,
    HandoutUpload,
    ShoppingCart,
    AddressScreen,
    SetAddress,
    GetAddressDetails,
    ConfirmOrder,
} from '../../../Components/Screens/MainScreens/Add';

import OrderList from '../../../Components/Screens/MainScreens/Order/OrderList';

import MoreScreen from '../../../Components/Screens/MainScreens/More/MoreScreen';


import Profile from '../../../Components/Screens/MainScreens/More/Profile/Profile';
import EditProfile from '../../../Components/Screens/MainScreens/More/Profile/EditProfile';
import AboutUs from '../../../Components/Screens/MainScreens/More/AboutUs/AboutUs';
import WalletTabs from '../../../Components/Screens/MainScreens/More/Wallet/WalletTabs';

const Tab = createBottomTabNavigator();
const AddStack = createStackNavigator();


function OrderScreens() {
    return (
        <AddStack.Navigator
            headerMode={'none'}
            initialRouteName={'OrderList'}
        >
            <AddStack.Screen name={'OrderList'} component={OrderList} />
        </AddStack.Navigator>
    );
};


function MoreScreens() {
    return (
        <AddStack.Navigator
            headerMode={'none'}
            initialRouteName={'MoreScreen'}
        >
            <AddStack.Screen name={'MoreScreen'} component={MoreScreen} />
            <AddStack.Screen name={'Profile'} component={Profile} />
            <AddStack.Screen name={'EditProfile'} component={EditProfile} />
            <AddStack.Screen name={'AboutUs'} component={AboutUs} />
            <AddStack.Screen name={'WalletTabs'} component={WalletTabs} />
        </AddStack.Navigator>
    );
};

function AddScreens() {
    return (
        <AddStack.Navigator
            headerMode={'none'}
            initialRouteName={'AddScreen'}
        >
            <AddStack.Screen name={'AddScreen'} component={PrintScreen} />
            <AddStack.Screen name={'HandoutUpload'} component={HandoutUpload} />
            <AddStack.Screen name={'ShoppingCard'} component={ShoppingCart} />
            <AddStack.Screen name={'Address'} component={AddressScreen} />
            <AddStack.Screen name={'SetAddress'} component={SetAddress} />
            <AddStack.Screen name={'GetAddressDetails'} component={GetAddressDetails} />
            <AddStack.Screen name={'ConfirmOrder'} component={ConfirmOrder} />
        </AddStack.Navigator>
    );
};

function chatScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>chat!</Text>
        </View>
    );
};



const tabBarIconFunction = ({ route, focused, color, size }) => {
    let iconName;
    let title;

    switch (route.name) {
        case 'Home':
            iconName = focused ? 'home' : 'home';
            title = "خانه";
            break;

        case 'Order':
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
            title = "سفارشات";
            break;

        case 'Add':
            iconName = focused ? 'squared-plus' : 'squared-plus';
            title = "سفارش";
            break;

        case 'Chats':
            iconName = focused ? 'chat' : 'chat';
            title = "چت‌ها";
            break;

        case 'More':
            iconName = focused ? 'dots-three-horizontal' : 'dots-three-horizontal';
            title = "بیشتر";
            break;

        default:
            console.log('default')
            break;
    };

    return (
        <View style={styles.iconContainer}>
            <Icon name={iconName} size={20} color={color} />
            <Text style={[styles.title, {
                color: focused ? EStyleSheet.value('$GREEN_COLOR') : EStyleSheet.value('$GRAY_COLOR'),
            }]}>{title}</Text>
        </View>
    );
};

export default TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => tabBarIconFunction({ route, focused, color, size }),
            })}
            initialRouteName={'Home'}
            tabBarOptions={{
                activeTintColor: EStyleSheet.value('$GREEN_COLOR'),
                inactiveTintColor: EStyleSheet.value('$GRAY_COLOR'),
                showLabel: false,
            }}
        >
            <Tab.Screen name="More" component={MoreScreens} />
            <Tab.Screen name="Chats" component={chatScreen} />
            <Tab.Screen name="Add" component={AddScreens} options={{
                tabBarLabel: 'Add',
                tabBarVisible: false
            }} />
            <Tab.Screen name="Order" component={OrderScreens} />
            <Tab.Screen name="Home" component={Home} />

        </Tab.Navigator>
    )
};
const styles = EStyleSheet.create({
    iconContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5
    },
    title: {
        fontFamily: '$BOLD_FONT',
        fontSize: 12,
        textAlign: 'center',
    },
});