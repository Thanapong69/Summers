import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

let yaris = 49000 
let sum = 0

class Screen1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {weight: '0', height: '0',value: 0};
    this.compute = this.compute.bind(this);
  }

  
handleOnPress(value){
  this.setState({value:value})
}

callFun1 = () =>
  {
    sum = 49000
    this.props.navigation.navigate('detail_yaris')
  }

  callFun2 = () =>
  {
    sum = 73500
    this.props.navigation.navigate('detail_yaris')
  }

  callFun3 = () =>
  {
    sum = 98000
    this.props.navigation.navigate('detail_yaris')
  }

  callFun4 = () =>
  {
    sum = 122500
    this.props.navigation.navigate('detail_yaris')
  }

  callFun5 = () =>
  {
    sum = 147000
    this.props.navigation.navigate('detail_yaris')
  }

  compute(){
    console.log('On pressed!');
    let weight = parseFloat(this.state.weight);
    if(weight < yaris){
      alert("จำนวนเงินของคุณไม่พอนะจ้ะ")
    }else if (weight >= yaris){
      sum = weight
      this.props.navigation.navigate('detail_yaris')
    }
  }
      render() {
        return (
          <View style={styles.container}>
          <Text style={styles.title}>เงินที่ต้องการดาวน์</Text>
           <TextInput style = {styles.input}
               keyboardType='numeric'
               value={this.state.weight}
               onChangeText={(weight) => this.setState({weight})}/>

            <TouchableOpacity style={styles.button}
              onPress={this.compute}>
            <Text style={styles.buttonText}>คำนวณการผ่อนรถยนต์</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button}
              onPress={this.callFun1}>
            <Text style={styles.buttonText}>10 เปอร์เซ็นต์</Text>
            </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={this.callFun2}>
            <Text style={styles.buttonText}>15 เปอร์เซ็นต์</Text>
            </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={this.callFun3}>
            <Text style={styles.buttonText}>20 เปอร์เซ็นต์</Text>
            </TouchableOpacity>


              <TouchableOpacity style={styles.button}
              onPress={this.callFun4}>
            <Text style={styles.buttonText}>25 เปอร์เซ็นต์</Text>
            </TouchableOpacity>

              <TouchableOpacity style={styles.button}
              onPress={this.callFun5}>
            <Text style={styles.buttonText}>30 เปอร์เซ็นต์</Text>
            </TouchableOpacity>

        </View>
      );
    }
  }
  
  export default Screen1;
  
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
export{sum}