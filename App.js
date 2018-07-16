import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './app/screens/LoginComponent'
import screen1 from './app/screens/screen1'
import screen2 from './app/screens/screen2'
import screen3 from './app/screens/screen3'
import screen4 from './app/screens/screen4'
import screen5 from './app/screens/screen5'
import screen11 from './app/screens/screen11'
import screen22 from './app/screens/screen22'
import screen33 from './app/screens/screen33'
import screen44 from './app/screens/screen44'
import screen55 from './app/screens/screen55'
import screen111 from './app/screens/screen111'
import screen222 from './app/screens/screen222'
import screen333 from './app/screens/screen333'
import screen444 from './app/screens/screen444'
import screen555 from './app/screens/screen555'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  register: Login,
  yaris: screen1,
  vios: screen2,
  altis: screen3,
  chr: screen4,
  camry: screen5,
  detail_yaris: screen11,
  detail_vios: screen22,
  detail_altis: screen33,
  detail_chr: screen44,
  detail_camry: screen55,
  show_yaris: screen111,
  show_vios: screen222,
  show_altis: screen333,
  show_chr: screen444,
  show_camry: screen555,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});