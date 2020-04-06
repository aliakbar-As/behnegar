import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from '../../NavigationService';
import Splash from '../../../Components/Screens/AuthScreens/Splash';
import Login from '../../../Components/Screens/AuthScreens/Login';
import Register from '../../../Components/Screens/AuthScreens/Register';
import { InAppNotificationComponent } from '../../../Components/Commons';

// import AuthScreens from './AuthScreens';

const navigationOptions = {
    header: null
};
const Stack = createStackNavigator();

function Authentication() {
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
                    name="InAppNotificationComponent"
                    component={InAppNotificationComponent}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Authentication;
// export default Authentication = createStackNavigator(AuthScreens, {
//     initialRouteName: 'Auth.Splash',
//     navigationOptions,
//     headerMode: 'none',
//     type: 'modal',
//     cardStyle: {
//         backgroundColor: 'transparent',
//         opacity: 1
//     },
//     transparentCard: true,
//     transitionConfig: (nav) => NavigationService.handleCustomTransition(nav)

// });
