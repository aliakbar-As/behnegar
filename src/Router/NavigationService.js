import { NavigationActions } from '@react-navigation/native';
import { fromRight, fromBottom } from 'react-navigation-transitions';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function goBack() {
  navigator.dispatch(
      NavigationActions.back()
  );
}

function handleCustomTransition({ scenes }) {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  if ((prevScene
    && prevScene.route.routeName.indexOf('Modal') > -1)
    || nextScene.route.routeName.indexOf('Modal') > -1) {
      return fromBottom();
    } 
  return fromRight();
}

function navigationOptions(navigation) {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const navigationOptionsObj = {};
  if (
      routeName !== 'Main.Home' && 
      routeName !== 'Main.Orders' && 
      routeName !== 'Main.Inbox' &&
      routeName !== 'Main.Profile'
  ) {
      navigationOptionsObj.tabBarVisible = false;
  }
  if (routeName.indexOf('Modal') > -1) navigationOptionsObj.screenType = 'Modal';
      return navigationOptionsObj;
}

export default {
  goBack,
  navigate,
  setTopLevelNavigator,
  handleCustomTransition,
  navigationOptions
};
