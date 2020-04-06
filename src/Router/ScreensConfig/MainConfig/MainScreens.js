
// import { createStackNavigator } from '@react-navigation/native';

// import NavigationService from '../../NavigationService';
// import { Modal, InAppNotificationComponent } from '../../../Components/Commons';

// import Home from '../../../Components/Screens/MainScreens/Home/';
// // Athlete Screens
// // Find Gyms
// import FindGyms from '../../../Components/Screens/MainScreens/Home/Athlete/FindGyms/FindGymsOnMap';
// import FindGymOnList from '../../../Components/Screens/MainScreens/Home/Athlete/FindGyms/FindGymsOnList';
// import GymProfile from '../../../Components/Screens/MainScreens/Home/Athlete/FindGyms/GymProfile';

// //Find Buffets
// import FindBuffets from '../../../Components/Screens/MainScreens/Home/Athlete/FindBuffets/FindBuffets';
// import FindBuffetsOnList from '../../../Components/Screens/MainScreens/Home/Athlete/FindBuffets/FindBuffetsOnList';
// import BuffetProfile from '../../../Components/Screens/MainScreens/Home/Athlete/FindBuffets/BuffetProfile';

// // Buffet Management Screens
// import ManageBuffetMenu from '../../../Components/Screens/MainScreens/Home/BuffetManagement/ManageBuffetMenu';
// import StatusOfOrders from '../../../Components/Screens/MainScreens/Home/BuffetManagement/StatusOfOrders';
// import BuffetOrderDetails from '../../../Components/Screens/MainScreens/Home/BuffetManagement/BuffetOrderDetails';

// // Common Screens    
// // Shop
// import SelectShopCategory from '../../../Components/Screens/MainScreens/Home/Shop/SelectCategory';
// import ProductList from '../../../Components/Screens/MainScreens/Home/Shop/ProductList';

// // Trainig Screens
// import SelectBlogCategory from '../../../Components/Screens/MainScreens/Home/Blog/SelectCategory';
// import BlogCategories from '../../../Components/Screens/MainScreens/Home/Blog/BlogCategories';
// import Anatomy from '../../../Components/Screens/MainScreens/Home/Blog/Anatomy';
// import SingleTutorial from '../../../Components/Screens/MainScreens/Home/Blog/SingleTutorial';

// import Orders from '../../../Components/Screens/MainScreens/Orders/Orders';
// import OrderDetails from '../../../Components/Screens/MainScreens/Orders/OrderDetails';

// import Music from '../../../Components/Screens/MainScreens/Music/Music';

// import Inbox from '../../../Components/Screens/MainScreens/Inbox/Inbox';

// import Profile from '../../../Components/Screens/MainScreens/Profile/Profile';
// import InviteAndGift from '../../../Components/Screens/MainScreens/Profile/SubScreens/InviteAndGift';
// import IncreaseWallet from '../../../Components/Screens/MainScreens/Profile/SubScreens/IncreaseWallet';
// import BMIResult from '../../../Components/Screens/MainScreens/Profile/SubScreens/BMIResult';
// import CalculateBMI from '../../../Components/Screens/MainScreens/Profile/SubScreens/CalculateBMI';
// import EditProfile from '../../../Components/Screens/MainScreens/Profile/SubScreens/EditProfile';
// import FAQ from '../../../Components/Screens/MainScreens/Profile/SubScreens/FAQ';
// import VIP from '../../../Components/Screens/MainScreens/Profile/SubScreens/VIP';

// import Support from '../../../Components/Screens/MainScreens/Profile/SubScreens/Support';
// import Basket from '../../../Components/Screens/MainScreens/Profile/SubScreens/Basket/Basket';
// import SelectDeliveryTime from '../../../Components/Screens/MainScreens/Profile/SubScreens/Basket/SelectDeliveryTime';
// import SelectAddress from '../../../Components/Screens/MainScreens/Profile/SubScreens/Basket/SelectAddress';
// import DetailsOfOrder from '../../../Components/Screens/MainScreens/Profile/SubScreens/Basket/DetailsOfOrder';
// import AddNewAddress from '../../../Components/Screens/MainScreens/Profile/SubScreens/Basket/AddNewAddress';
// import PurchaseInvoice from '../../../Components/Screens/MainScreens/Profile/SubScreens/Basket/PurchaseInvoice';

// import { 
//     ChallangeItems,
//     ChallengeDetails,
//     WinnersVideo,
//     UploadChallangeVideo,
//     Payment,
//     WinnersVideoDetails,
//  } from '../../../Components/Screens/MainScreens/Home/Challange';

// const HomeScreensStack = {
//     'Main.Home': { screen: Home },
//     'Main.Home.FindGyms': { screen: FindGyms },
//     'Main.Home.FindGyms.FindGymOnList': { screen: FindGymOnList },
//     'Main.Home.FindGyms.GymProfile': { screen: GymProfile },
//     'Main.Home.FindBuffets': { screen: FindBuffets },
//     'Main.Home.FindBuffets.FindBuffetsOnList': { screen: FindBuffetsOnList },
//     'Main.Home.FindBuffets.BuffetProfile': { screen: BuffetProfile },
//     'Main.Home.Shop': { screen: SelectShopCategory },
//     'Main.Home.Shop.ProductList': { screen: ProductList },

//     'Main.Home.Blog': { screen: SelectBlogCategory },
//     'Main.Home.Blog.Anatomy': { screen: Anatomy },
//     'Main.Home.Blog.BlogCategories': { screen: BlogCategories },
//     'Main.Home.Blog.SingleTutorial': { screen: SingleTutorial },

//     'Main.Home.BuffetManagement.ManageBuffetMenu': { screen: ManageBuffetMenu },
//     'Main.Home.BuffetManagement.StatusOfOrders': { screen: StatusOfOrders },
//     'Main.Home.BuffetManagement.BuffetOrderDetails': { screen: BuffetOrderDetails },
//     'Main.Home.VirtualOrderDetails': { screen: OrderDetails },

//     'Main.Home.VirtualBasket': { screen: Basket },
//     'Main.Profile.Basket.VirtualSelectDeliveryTime': { screen: SelectDeliveryTime },
//     'Main.Profile.Basket.VirtualSelectAddress': { screen: SelectAddress },
//     'Main.Profile.Basket.VirtualDetailsOfOrder': { screen: DetailsOfOrder },
//     'Main.Profile.Basket.VirtualAddNewAddress': { screen: AddNewAddress },
//     'Main.Profile.Basket.VirtualPurchaseInvoice': { screen: PurchaseInvoice },
//     'Main.Home.IncreaseWallet': { screen: IncreaseWallet },

    
//     'Main.Home.Challange.ChallengeItems': { screen: ChallangeItems },
//     'Main.Home.Challange.ChallengeDetails': { screen: ChallengeDetails },
//     'Main.Home.Challange.WinnersVideo': { screen: WinnersVideo },
//     'Main.Home.Challange.WinnersVideoDetails': { screen: WinnersVideoDetails },
//     'Main.Home.Challange.UploadChallengeVideo': { screen: UploadChallangeVideo },
//     'Main.Home.Challange.Payment': { screen: Payment },


//     'Modal.Home': { screen: Modal },
//     'Main.Home.InAppNotification': { screen: InAppNotificationComponent }

// };

// const OrdersScreensStack = {
//     'Main.Orders': { screen: Orders, params: { referrer: '' } },
//     'Main.Orders.OrderDetails': { screen: OrderDetails },
//     'Main.Orders.InAppNotification': { screen: InAppNotificationComponent }
// };

// const MusicScreensStack = {
//     'Main.Music': { screen: Music },
// };

// const InboxScreensStack = {
//     'Main.Inbox': { screen: Inbox }
// };

// const ProfileScreensStack = {
//     'Main.Profile': { screen: Profile },
//     'Main.Profile.InviteAndGift': { screen: InviteAndGift },
//     'Main.Profile.IncreaseWallet': { screen: IncreaseWallet },
//     'Main.Profile.BMIResult': { screen: BMIResult },
//     'Main.Profile.CalculateBMI': { screen: CalculateBMI },
//     'Main.Profile.EditProfile': { screen: EditProfile },
//     'Main.Profile.FAQ': { screen: FAQ },
//     'Main.Profile.VIP': { screen: VIP },

//     'Main.Profile.Support': { screen: Support },
//     'Main.Profile.Basket': { screen: Basket },
//     'Main.Profile.Basket.SelectDeliveryTime': { screen: SelectDeliveryTime },
//     'Main.Profile.Basket.SelectAddress': { screen: SelectAddress },
//     'Main.Profile.Basket.DetailsOfOrder': { screen: DetailsOfOrder },
//     'Main.Profile.Basket.AddNewAddress': { screen: AddNewAddress },
//     'Main.Profile.Basket.PurchaseInvoice': { screen: PurchaseInvoice },
//     'Modal.Profile': { screen: Modal },
//     'Main.Profile.InAppNotification': { screen: InAppNotificationComponent }
// };


// export const HomeScreensStackNavigator = createStackNavigator(HomeScreensStack, {
//     initialRouteName: 'Main.Home',
//     headerMode: 'none',
//     navigationOptions: ({ navigation }) => NavigationService.navigationOptions(navigation),
//     type: 'modal',
//     cardStyle: {
//         backgroundColor: 'transparent',
//         opacity: 1
//     },
//     transparentCard: true,
//     transitionConfig: (nav) => NavigationService.handleCustomTransition(nav)
// });


// export const OrdersScreensStackNavigator = createStackNavigator(OrdersScreensStack, {
//     initialRouteName: 'Main.Orders',
//     headerMode: 'none',
//     navigationOptions: ({ navigation }) => NavigationService.navigationOptions(navigation),
//     type: 'modal',
//     cardStyle: {
//         backgroundColor: 'transparent',
//         opacity: 1
//     },
//     transparentCard: true,
//     transitionConfig: (nav) => NavigationService.handleCustomTransition(nav)
// });

// export const MusicScreensStackNavigator = createStackNavigator(MusicScreensStack, {
//     initialRouteName: 'Main.Music',
//     headerMode: 'none',
//     navigationOptions: ({ navigation }) => NavigationService.navigationOptions(navigation),
//     transitionConfig: (nav) => NavigationService.handleCustomTransition(nav)

// });

// export const InboxScreensStackNavigator = createStackNavigator(InboxScreensStack, {
//     initialRouteName: 'Main.Inbox',
//     headerMode: 'none',
//     navigationOptions: ({ navigation }) => NavigationService.navigationOptions(navigation),
//     transitionConfig: (nav) => NavigationService.handleCustomTransition(nav)

// });

// export const ProfileScreensStackNavigator = createStackNavigator(ProfileScreensStack, {
//     initialRouteName: 'Main.Profile',
//     headerMode: 'none',
//     navigationOptions: ({ navigation }) => NavigationService.navigationOptions(navigation),
//     type: 'modal',
//     cardStyle: {
//         backgroundColor: 'transparent',
//         opacity: 1
//     },
//     transparentCard: true,
//     transitionConfig: (nav) => NavigationService.handleCustomTransition(nav)
// });
