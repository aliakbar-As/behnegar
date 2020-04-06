// import firebase from 'react-native-firebase';
// import { Logger } from './SmallUtils';
// import { request } from './index';

// export const getCurrentFirebaseToken = () => {
//     firebase.messaging().getToken().then(fcmToken => {
//     if (fcmToken) {
//         // Logger(fcmToken);
//         request.put('/Member/PutSecretKey', {
//             tokenapi: 'selfit.member',
//             secretkey: fcmToken
//         });
//     }
//   });
// }

// export const monitorFirebaseToken = () => firebase.messaging().onTokenRefresh(fcmToken => {
//     request.put('/Member/PutSecretKey', {
//         tokenapi: 'selfit.member',
//         secretkey: fcmToken
//     });
// });