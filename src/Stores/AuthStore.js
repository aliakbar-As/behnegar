import { types, applySnapshot } from 'mobx-state-tree';
import { Logger, request } from '../Utils';
import { ApiClient } from '../assets/webServices/ApiClient';
import { ApiHelper } from '../assets/webServices/ApiHelper';
import AsyncStorage from '@react-native-community/async-storage';


const authStore = types.model('authStore', {
    firstName: types.maybeNull(types.string),
    lastName: types.maybeNull(types.string),
    tel: types.maybeNull(types.string),
    email: types.optional(types.string, ''),
    password: types.optional(types.string, ''),
    loading: types.optional(types.boolean, false),
}).actions((self) => {
    let apiClient = ApiClient.getInstance();

    return {
        submitUserInformation(userData) {
            this.changeLoading(true);
            const {
                email,
                password,
                firstName,
                lastName,
                tel,
            } = userData;

            return new Promise(async (resolve) => {
                apiClient.post(ApiHelper.register,
                    (error, response) => {
                        Logger(response, 'register')
                        this.changeLoading(false);
                        this.storeData(response.token);
                        resolve(response.status);
                    }, {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    tel: tel,
                })
            });

        },
        async storeData(value) {
            try {
                await AsyncStorage.setItem('@token', value)
            } catch (e) {
                Logger(e, 'err');
            };
        },
        changeLoading(value) {
            return self.loading = value;
        },
        fillUserModel(data) {
            applySnapshot(self.userModel, data);
        },
    };
});

export const AuthStore = authStore.create();