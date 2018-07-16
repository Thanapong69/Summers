import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet  } from 'react-native';
import {sum} from './screen1'

let year = 0
let total = 0

class Screen11 extends Component {

  callFun1 = () =>
  {
    year = 4
    total = (490000 - sum)/48 + (((490000 - sum)/48)*2.5)/100
    this.props.navigation.navigate('show_yaris')
  }

  callFun2 = () =>
  {
    year = 5
    total = (490000 - sum)/60 + (((490000 - sum)/60)*3.0)/100
    this.props.navigation.navigate('show_yaris')
  }

  callFun3 = () =>
  {
    year = 6
    total = (490000 - sum)/72 + (((490000 - sum)/72)*3.5)/100
    this.props.navigation.navigate('show_yaris')
  }

  callFun4 = () =>
  {
    year = 7
    total = (490000 - sum)/84 + (((490000 - sum)/84)*4.0)/100
    this.props.navigation.navigate('show_yaris')
  }

  
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>จำนวนเงินที่ต้องการดาวน์ {sum} บาท</Text>
      <Text style={styles.title}>ระยะเวลาที่ต้องการผ่อน </Text>
       
        <TouchableOpacity style={styles.button}
          onPress={this.callFun1}>
        <Text style={styles.buttonText}>4 ปี ดอกเบี้ย 2.5 %</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button}
          onPress={this.callFun2}>
        <Text style={styles.buttonText}>5 ปี ดอกเบี้ย 3.0 %</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={this.callFun3}>
        <Text style={styles.buttonText}>6 ปี ดอกเบี้ย 3.5 %</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress={this.callFun4}>
        <Text style={styles.buttonText}>7 ปี ดอกเบี้ย 4.0 %</Text>
        </TouchableOpacity>



    </View>
  );
}
}

export default Screen11;
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 20
},
group: {
  marginTop: 20
},
button: {
  backgroundColor: 'lightblue',
  padding: 20,
  borderWidth: 1
},
buttonText: {
  fontSize: 30
},
input: {
  margin: 15,
  height: 40,
  borderColor: '#7a42f4',
  borderWidth: 1
},
title: {
  fontSize: 20
},
center: {
  alignItems: 'center'
}
});
export{year,total}