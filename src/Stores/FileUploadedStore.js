import { types, applySnapshot } from 'mobx-state-tree';
import { Logger, request } from '../Utils';
import { ApiClient } from '../assets/webServices/ApiClient';
import { ApiHelper } from '../assets/webServices/ApiHelper';
import AsyncStorage from '@react-native-community/async-storage';

export const SingleFile = types.model('SingleFile', {
    uri: types.maybeNull(types.string),
    type: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    size: types.optional(types.number, 0),
});
const fileUploadedStore = types.model('fileUploadedStore', {
    fileLists: types.optional(types.array(SingleFile), []),
    loading: types.optional(types.boolean, false),
}).actions((self) => {
    let apiClient = ApiClient.getInstance();

    return {
        changeLoading(value) {
            return self.loading = value;
        },
        fillUserModel(data) {
            Logger(data, 'fillUserData')

            applySnapshot(self.userModel, data);
        },
    };
});

export const FileUploadedStore = fileUploadedStore.create();