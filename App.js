import * as React from 'react';
import { Text, View} from 'react-native';
import Constants from 'expo-constants'; //Constants kütüphanesi Telefonların üst bar'lara olan uzaklığını ayarlar
import { createStackNavigator, createAppContainer } from 'react-navigation';
//Page İmport
import Home from './Home';
import Categories from './Categories';
import NewsPage from './NewsPage';
import Detail from './Detail';

//Class'lara Routing işlemi Yapar
const stack=createStackNavigator({
categories:{
  screen:Categories
},
home:{
  screen:Home
},
newsPage:{
  screen:NewsPage
},
detail:{
  screen:Detail
},


},

{
  initialRouteName:'home' //İlk çalıştığında hangi sayfanın açılmasını belirliyoruz
});

export default createAppContainer(stack);