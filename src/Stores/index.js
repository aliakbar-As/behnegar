import { createContext } from 'react';
import { AuthStore } from './AuthStore';
import { FileUploadedStore } from './FileUploadedStore';
import { MapStore } from './MapStore';


export const stores = {
    AuthStore,
    FileUploadedStore,
    MapStore
};

export default StoreContext = createContext(stores);
