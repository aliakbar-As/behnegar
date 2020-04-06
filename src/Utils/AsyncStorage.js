import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';
import { Logger } from './SmallUtils';

const SetItem = (key, val) => useAsyncStorage(key).setItem(JSON.stringify(val)); 
const MultiGet = async (keys) => await AsyncStorage.multiGet(keys);

const GetItem = async (key) => {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
};

const FindItem = async (key, condition) => {
    const values = await GetItem(key);
    if (values === null) return [];

    for (let i = 0; i <= values.length; i++) {
        if (eval(condition)) {
            return values[i];
        }
    }
    return [];
};

export const RemoveItem = (key) => useAsyncStorage(key).removeItem();
export const Clear = () => AsyncStorage.clear();

export const Storage = {
    GetItem,
    SetItem,
    MultiGet,
    FindItem,
    RemoveItem,
    Clear
} 
