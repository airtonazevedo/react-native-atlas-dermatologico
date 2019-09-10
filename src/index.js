import React from 'react';
//import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from './routes';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
  ]);


export default function App() {
    // return false;
    return (
        <Routes />
    )
}