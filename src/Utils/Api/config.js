import { Platform } from 'react-native';
import axios from 'axios';

const serverUrl = 'http://95.216.161.74/api/v1';

export const instance = axios.create({
    baseURL: serverUrl,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
        // 'CustomUserAgent': `${Platform.OS} ${Platform.Version}`
    }
});

export default instance;
