import { createContext } from 'react';
import { AuthStore } from './AuthStore';
import { FileUploadedStore } from './FileUploadedStore';


export const stores = {
    AuthStore,
    FileUploadedStore
};

export default StoreContext = createContext(stores);
