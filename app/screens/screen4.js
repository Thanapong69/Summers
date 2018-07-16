// import React, { Component } from 'react';
// import * as firebase from 'firebase';
// import Toast, {DURATION} from 'react-native-easy-toast';
// import {
//   StyleSheet,
//   Text,
//   FlatList,
//   View,
//   YellowBox
// } from 'react-native';
// import _ from 'lodash';

// YellowBox.ignoreWarnings(['Setting a timer']);
// const _console = _.clone(console);
// console.warn = message => {
//   if (message.indexOf('Setting a timer') <= -1) {
//     _console.warn(message);
//   }
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyALN-U6BpN3bIzqnv0z_lACf94KbB93g1Q",
//     authDomain: "fitm-app.firebaseapp.com",
//     databaseURL: "https://fitm-app.firebaseio.com",
//     storageBucket: "fitm-app.appspot.com",
//   };
  
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// export class Screen1 extends React.Component {
//     constructor(props) {
//         super(props);
//         //realtime listener for firebase db
//         this.itemsRef = firebaseApp.database().ref('Subjects');
//         this.state = { nameSubject: '', todos: [], modalVisible: false,};
//       }
    
//       keyExtractor = (item) => item.id;
    
//       renderItem = ({item}) =>
//       <View >
//         <Text style={{fontSize: 20}}>{item.nameSubject}</Text>   
//       </View>;
    
//     //   saveData = () => {
//     //     if (this.state.nameSubject != '') {
//     //       this.itemsRef.push({ nameSubject: this.state.nameSubject});
//     //       this.refs.toast.show('Todo saved');
//     //     //   this.setState({date: '', modalVisible: false});
//     //     }
//     //     else {
//     //       this.refs.toast.show('Some data is missing');      
//     //     }
//     //   };
    
//       // List todos
      
//       listenForItems(itemsRef) {
//         itemsRef.on('value', (snap) => {
//           var items = [];
//           snap.forEach((child) => {
//             items.push({
//               id: child.key,
//               nameSubject: child.val().nameSubject
//             });
//           });
    
//           this.setState({todos: items});
//         });
//       }
    
//       componentDidMount() {
//         this.listenForItems(this.itemsRef);
//       }
    
//       render() {
//         return (
//           <View style={styles.maincontainer}>
//             <View style={styles.listcontainer}>
//               <FlatList
//                 data = {this.state.todos}
//                 keyExtractor = {this.keyExtractor}
//                 renderItem = {this.renderItem}
//                 style={{marginTop: 20}}
//                 />
//             </View>
//             <Toast ref="toast" position="top"/>        
//           </View>
//         );
//       }
//     }
    
//     const styles = StyleSheet.create({
//       maincontainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//       },
//       headercontainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//       },  
//       inputcontainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//       },
//       listcontainer: {
//         flex: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//       },
    
//     });

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

let chr = 1100000
let sum = 0

class Screen4 extends React.Component {
  constructor(props){
    super(props);
    this.state = {weight: '0', height: '0', bmi: 0};
    this.compute = this.compute.bind(this);
  }

  callFun1 = () =>
  {
    sum = 110000
    this.props.navigation.navigate('detail_chr')
  }

  callFun2 = () =>
  {
    sum = 165000
    this.props.navigation.navigate('detail_chr')
  }

  callFun3 = () =>
  {
    sum = 220000
    this.props.navigation.navigate('detail_chr')
  }

  callFun4 = () =>
  {
    sum = 275000
    this.props.navigation.navigate('detail_chr')
  }

  callFun5 = () =>
  {
    sum = 330000
    this.props.navigation.navigate('detail_chr')
  }


  compute(){
    console.log('On pressed!');
    let weight = parseFloat(this.state.weight);
    if(weight < chr){
      alert("จำนวนเงินของคุณไม่พอนะจ้ะ")
    }else if (weight >= chr){
      sum = weight
      this.props.navigation.navigate('detail_chr')
    }
    // let height = parseFloat(this.state.height);
    // this.setState({bmi: weight/Math.pow(height/100, 2)});
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

    
  export default Screen4;
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
//   <View style={styles.group}>
//   <Text style={styles.title}>Weight (KG)</Text>
//   <TextInput style={styles.input}
//     keyboardType='numeric'
//     value={this.state.weight}
//     onChangeText={(weight) => this.setState({weight})}/>
// </View>
// <View style={styles.group}>
//   <Text style={styles.title}>Height (CM)</Text>
//   <TextInput style={styles.input}
//     keyboardType='numeric'
//     value={this.state.height}
//     onChangeText={(height) => this.setState({height})}
//     />
// </View>
// <View style={styles.center}>
//   <View style={styles.group}>
//     <Text style={styles.title}>BMI: {this.state.bmi.toFixed(2)}</Text>
//   </View>
//   <View style={styles.group}>
//     <TouchableOpacity style={styles.button}
//       onPress={this.compute}>
//       <Text style={styles.buttonText}>คำนวณการผ่อนรถยนต์</Text>
//     </TouchableOpacity>
//   </View>
// </View>