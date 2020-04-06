import ImagePicker from 'react-native-image-picker';
import { Logger } from './SmallUtils';

export const ImagePickerComponent = async () => {
    
    return new Promise((resolve, reject) => {
        const options = {
            title: 'انتخاب عکس',
            cancelButtonTitle: 'لغو',
            takePhotoButtonTitle: 'با دوربین خود عکس بگیرید',
            chooseFromLibraryButtonTitle: 'عکس را از گالری انتخاب کنید',
            // customButtons: [{name: 'removeImage', title: 'حذف عکس'}],
        
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            quality: 0.8,
            maxWidth: 1000,
            maxHeight: 1000
        };
        ImagePicker.showImagePicker(options, (response) => {
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
