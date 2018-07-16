import React from 'react'
import {StackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import {Screen1} from '../screens/screen1'
import {Screen2} from '../screens/screen2'
import {Screen3} from '../screens/screen3'
import {Screen4} from '../screens/screen4'
import {Screen5} from '../screens/screen5'
import Login from '../screens/LoginComponent'

export const Drawer = StackNavigator({
    Login:{
        screen: Login
    },
    Screen1:{
        screen: Screen1
    },
    Screen2:{
        screen: Screen2
    },
    Screen3:{
        screen: Screen3
    },
    Screen4:{
        screen: Screen4
    },
    Screen5:{
        screen: Screen5
    },
})
