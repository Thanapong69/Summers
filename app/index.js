import React from 'react'
import {Platform} from 'react-native'
import {Drawer} from './config/route'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export class Root extends React.Component {
    render(){
        return (
            (Platform.OS == 'ios') ? <Tabs/> : <Drawer/>
        )
    }
}