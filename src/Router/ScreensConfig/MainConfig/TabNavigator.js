import React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../Components/Screens/MainScreens/Home';
import {
    PrintScreen,
    HandoutUpload,
} from '../../../Components/Screens/MainScreens/Add';
import Icon from 'react-native-vector-icons/Entypo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const AddStack = createStackNavigator();


function CartScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cart!</Text>
        </View>
    );
}
function AddScreens() {
    return (
        <AddStack.Navigator
            headerMode={'none'}
        >
            <AddStack.Screen name={'AddScreen'} component={PrintScreen} />
            <AddStack.Screen name={'HandoutUpload'} component={HandoutUpload} />
        </AddStack.Navigator>
    );
}
function chatScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>chat!</Text>
        </View>
    );
}

function moreScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>more!</Text>
        </View>
    );
}


const tabBarIconFunction = ({ route, focused, color, size }) => {
    let iconName;
    let title;

    switch (route.name) {
        case 'Home':
            iconName = focused ? 'home' : 'home';
            title = "خانه";
            break;

        case 'Cart':
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
            title = "سبد";
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
            <Tab.Screen name="More" component={moreScreen} />
            <Tab.Screen name="Chats" component={chatScreen} />
            <Tab.Screen name="Add" component={AddScreens} options={{
                tabBarLabel: 'Add',
                tabBarVisible: false

            }} />
            <Tab.Screen name="Cart" component={CartScreen} />
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