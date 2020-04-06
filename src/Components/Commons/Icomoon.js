import React from 'react';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/json/iconMoon.json';
const Icomoon = createIconSetFromIcoMoon(icoMoonConfig);

export const Icon = ({ name, color = "white", size, style }) => {
    return <Icomoon name={name} color={color} size={size} style={style} />;
};
