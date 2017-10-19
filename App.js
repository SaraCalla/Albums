//importo librerie per costruire un Component

import React from 'react';
import {Text, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Creare un Component

const App = () => (
  <View style={{flex : 1}}>
    <Header headerText = {'Albums'}/>
    <AlbumList />
  </View>

);

export default App;



//Render it to the device 
//nel file index.js
