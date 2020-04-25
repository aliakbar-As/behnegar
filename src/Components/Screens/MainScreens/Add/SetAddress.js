import React, { useContext, useEffect, useState } from 'react';
import { View, Image, ScrollView, TouchableWithoutFeedback, PermissionsAndroid, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, Button } from '../../../Commons';
import MapView from 'react-native-maps';
import { observer } from 'mobx-react-lite';
import Geolocation from 'react-native-geolocation-service';
import { Logger, GetAndroidPermission, CheckAndroidPermission } from '../../../../Utils';
import Icon from 'react-native-vector-icons/AntDesign';

import mapPin from '../../../../assets/images/mainScreens/pin.png';
import mapBg from '../../../../assets/images/mainScreens/mapBg.jpg';
import StoreContext from '../../../../Stores';


export const SetAddress = ({ navigation }) => {
    const { MapStore } = useContext(StoreContext);

    const [regionInfo, setRegionInfo] = useState({
        initialRegion: {
            latitude: 35.745845,
            longitude: 51.388164999999994,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        selectedRegion: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        userRegion: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }
    });

    useEffect(() => {
        checkPermisstion();
    }, []);

    const checkPermisstion = async () => {
        const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted) {
            console.log("You can use the ACCESS_FINE_LOCATION");
            getCurrentLocation();
        }
        else {
            console.log("ACCESS_FINE_LOCATION permission denied")
        };
    };
    const getCurrentLocation = async () => {

        Geolocation.getCurrentPosition((position) => {
            Logger(position, 'positino')
            setRegionInfo({
                ...regionInfo,
                selectedRegion: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                },
                userRegion: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }
            });
        }, (error) => {
            Logger(error.code, error.message);
        },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    const onRegionChangeComplete = (region) => {
        setRegionInfo({
            ...regionInfo,
            selectedRegion: {
                latitude: region.latitude,
                longitude: region.longitude,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta,
            }
        });
    };

    const storeCurrentPosition = () => {
        MapStore.fillAddAdress(regionInfo.selectedRegion.latitude,regionInfo.selectedRegion.longitude);
        navigation.navigate('GetAddressDetails');

    };
    return (
        <View style={styles.container}>

            <Header
                title="انتخاب بر روی نقشه"
                backOnclick={() => navigation.pop()}
                extraStylse={{ marginBottom: -16 }}
                none
                back />


            <MapView
                style={styles.googleMap}
                initialRegion={regionInfo.initialRegion}
                onRegionChangeComplete={(region) => onRegionChangeComplete(region)}
                region={regionInfo.selectedRegion}
                onMapReady={() => getCurrentLocation()}
                showsUserLocation
                loadingEnabled
                showsMyLocationButton={false}
            />

            <PinMarker
                onPress={() => storeCurrentPosition()}
            />

            <View style={styles.acceptLocationBox}>
                <Button
                    text="تایید و ادامه ی ثبت آدرس"
                    onPress={() => storeCurrentPosition()}
                    extraStyle={styles.acceptLocationBtn}
                />
            </View>
            <TouchableWithoutFeedback onPress={() => setRegionInfo({ ...regionInfo, selectedRegion: regionInfo.userRegion })}>
                <View style={styles.showCurrentLocation}>
                    <Icon name="enviroment" color="#fff" size={22} />
                </View>
            </TouchableWithoutFeedback>

        </View>
    );
};

const PinMarker = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.pinMarkerBox}>
            <Image source={mapPin} style={styles.pinStyle} />
        </TouchableOpacity>
    );
};
const styles = EStyleSheet.create({
    googleMap: {
        flex: 1,
    },
    gradientStyle: {
        width: '100%',
        alignSelf: 'center',
        height: 70,
        alignItems: 'center',
        marginBottom: 20
    },
    contentWrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    iconAndTextBoxStyle: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginRight: 0,
    },
    inputStyle: {
        marginBottom: 20
    },
    acceptLocationBox: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    acceptLocationBtn: {
        borderRadius: 0,
        height: 60,
    },
    pinMarkerBox: {
        left: '45%',
        marginLeft: -5,
        // marginTop: 10,
        position: 'absolute',
        top: '45%',
    },
    pinStyle: {
        height: 48,
        width: 48
    },
    showCurrentLocation: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 90,
        right: 30,
        backgroundColor: '$GREEN_COLOR'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});