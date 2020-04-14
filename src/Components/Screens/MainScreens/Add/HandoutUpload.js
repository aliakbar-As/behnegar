import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    Modal,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, Button } from '../../../Commons';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';
import { Logger } from '../../../../Utils';
import StoreContext from '../../../../Stores';
import Pdf from 'react-native-pdf';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;



export const HandoutUpload = ({ navigation }) => {
    const { FileUploadedStore } = useContext(StoreContext);
    const [fileLists, setFileLists] = useState([]);
    const [lastPdfFile, setlastPdfFile] = useState('');
    const [lastPdfName, setLastPdfName] = useState('');
    const [lastPdfSize, setlastPdfSize] = useState('');
    const [finalPdfUploaded, setfinalPdfUploaded] = useState('');
    const [modalVisible, setmodalVisible] = useState(false);


    const handleRemoveItem = (e, index) => {
        setFileLists(
            fileLists.map(item => item)
                .filter(x => x.name !== e.name));
    };

    const fileSize = (bytes) => {
        if (bytes < 1024) return bytes;
        else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
        else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
        else return (bytes / 1073741824).toFixed(3) + " GB";
    };
    const filePicker = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            Logger(res.type, 'type')

            if (res.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                && res.type !== 'application/pdf'
                && res.type !== 'application/msword') {
                Alert.alert('error', 'delete your files except pdf and docx files')
                return;
            };
            setFileLists([...fileLists, {
                'uri': res.uri,
                'type': res.type,
                'name': res.name,
                'size': res.size,
            }]);
            if (res.type === 'application/pdf') {
                setlastPdfFile(res.uri);
                setLastPdfName(res.name);
                setlastPdfSize(res.size);
                setmodalVisible(true)
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                Logger(err, 'isCancel')
            } else {
                Logger(err, 'catchError')
            };
        };
    };

    const FileCard = ({ title, deleteOnclick, size, type }) => {
        let s = 'application/'
        return (
            <View style={styles.fileCardContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon
                        size={30}
                        color={EStyleSheet.value('$GREEN_COLOR')}
                        name={type !== s + 'pdf' ? 'file-word-o' : 'file-pdf-o'}
                    />

                    <View style={styles.titleContainer}>
                        <Text numberOfLines={1}>{title}</Text>
                        <Text>{size}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{ padding: 16, margin: -16 }}
                    onPress={deleteOnclick}>
                    <Icon
                        size={25}
                        color={'#006242'}
                        name={'remove'}
                    />
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Header
                title={'آپلود فایل'}
                back
                backOnclick={() => navigation.pop()}
            />
            <ScrollView>
                <Text style={styles.toptitle}>
                    لطفا فایل خود را با پسوند <Text style={{ color: '#006242', fontWeight: 'bold' }}>PDF</Text> ،
                     <Text style={{ color: '#006242', fontWeight: 'bold' }}> docx </Text>
                      یا <Text style={{ color: '#006242', fontWeight: 'bold' }}>doc</Text> انتخاب کنید *
                </Text>
                <TouchableHighlight
                    onPress={() => filePicker()}
                    underlayColor={'transparent'}>
                    <View style={styles.uploadContainer}>
                        <Icon
                            name={'cloud-upload'}
                            color={EStyleSheet.value('$GREEN_COLOR')}
                            size={50}
                            style={{ marginBottom: 16 }}
                        />

                        <Text style={[styles.primaryTitle, { fontFamily: EStyleSheet.value('$BOLD_FONT') }]}>
                            برای آپلود فایل خود اینجا کلیک کنید
                        </Text>
                    </View>
                </TouchableHighlight>


                {fileLists.length !== 0 ?
                    fileLists.map((item, index) => {
                        return (
                            <FileCard
                                key={index}
                                title={item.name}
                                size={fileSize(item.size)}
                                deleteOnclick={() => handleRemoveItem(item, index)}
                                type={item.type}
                            />
                        )
                    }) : null}


            </ScrollView>

            <Button
                disabled={fileLists.length === 0}
                extraStyle={{ width: widthScreen - 32, opacity: fileLists.length !== 0 ? 1 : 0.5 }}
                text={'تایید'}
                onPress={() => navigation.navigate('ShoppingCard', { files: finalPdfUploaded })}
            />


            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setmodalVisible(false)}>
                <View style={styles.modalView}>
                    <View style={styles.modalContainerStyle}>
                        <Pdf
                            source={{ uri: lastPdfFile, cache: true }}
                            onLoadComplete={(numberOfPages, filePath, { width, height }) => {
                                console.log(`number of pages: ${width}`);
                                setfinalPdfUploaded([...finalPdfUploaded, {
                                    'uri': filePath,
                                    'type': 'application/pdf',
                                    'numberOfPages': numberOfPages,
                                    'name': lastPdfName,
                                    'size': lastPdfSize,
                                }]);
                            }}
                            onError={(error) => {
                                Alert.alert('error', error)
                            }}
                            style={styles.pdfContainer} />

                        <View style={{ padding: 10, backgroundColor: '#eee' }}>
                            <Button
                                disabled={fileLists.length === 0}
                                extraStyle={{ width: widthScreen - 16, opacity: fileLists.length !== 0 ? 1 : 0.5 }}
                                text={'تایید فایل'}
                                onPress={() => setmodalVisible(false)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = EStyleSheet.create({
    pdfContainer: {
        width: widthScreen - 16,
        height: heightScreen - 100,
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainerStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        width: widthScreen,
        height: heightScreen,
        paddingTop: 10,
    },
    toptitle: {
        color: '#666666',
        marginHorizontal: 16,
        fontFamily: '$REGULAR_FONT',
        textAlign: 'right',
        fontSize: 14
    },
    titleContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10,
        width: '80%'
    },
    fileCardContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginHorizontal: 16,
        justifyContent: 'space-between'
    },
    primaryTitle: {
        color: '$GREEN_COLOR',
        fontFamily: '$REGULAR_FONT',
        textAlign: 'center',
        fontSize: 16,
    },
    uploadContainer: {
        width: widthScreen - 32,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: heightScreen / 4,
        borderColor: '#ccc',
        marginTop: 16,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 1,
        marginBottom: 16,
    },
    hdrTitle: {
        fontFamily: '$BOLD_FONT',
        textAlign: 'center',
        fontSize: 16,
        color: '#505050',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});