import { types, applySnapshot } from 'mobx-state-tree';
import { Logger, request } from '../Utils';



// export const SingleAddNewAddress = types.model('SingleAddNewAddress', {
//     desc: types.optional(types.string, ''),
//     titleaddress: types.optional(types.string, ''),
//     plaque: types.optional(types.number, 0),
//     floor: types.optional(types.number, 0),
//     lat: types.optional(types.number, 0),
//     lng: types.optional(types.number, 0),
// });


const mapStore = types.model('mapStore', {
    adTitle: types.optional(types.string, ''),
    desc: types.optional(types.string, ''),
    plaque: types.optional(types.string, ''),
    floor: types.optional(types.string, ''),
    lat: types.optional(types.number, 0),
    lng: types.optional(types.number, 0),
    loading: types.optional(types.boolean, false),

}).actions(self => {
    return {
        fillAddInfo(title, des, plaque, floor) {
            self.adTitle = title;
            self.desc = des;
            self.plaque = plaque;
            self.floor = floor;
        },
        fillAddAdress(lat, lng) {
            self.lat = lat;
            self.lng = lng;
        },
    }
});

export const MapStore = mapStore.create();