import ImagePicker from 'react-native-image-picker';
import { Logger } from './SmallUtils';

export const GalleryPicker = async () => {
    
    return new Promise((resolve, reject) => {
        const options = {
            title: 'انتخاب عکس',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                Logger('User cancelled image picker');
            } else if (response.error) {
                Logger('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                Logger('User tapped custom button: ', response.customButton);
            } else {
                const fileUriSplited = response.uri.split('.');
                const source = { 
                    path: response.uri,
                    // mime: fileUriSplited[fileUriSplited.length - 1]
                    mime: 'image/jpeg'
                };
                resolve(source);
            }
        });
    });
};
