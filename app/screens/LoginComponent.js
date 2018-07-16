// import React, { Component } from 'react';
// import { GoogleSignin } from 'react-native-google-signin';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Image
// } from 'react-native';

// let displayName = ''
// let photo = ''
// let email = ''

// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       displayName: '',
//       photo: '',
//       email: ''
//     };
//   }

//   componentWillMount() {
//     GoogleSignin.hasPlayServices({ autoResolve: true });
//     GoogleSignin.configure({
//       // iosClientId: '617324734115-od9b4l2mf95331gg9m4u0a4gggq0fpjo.apps.googleusercontent.com',
//       webClientId: '70705103923-l6cnlsv70g1vtp8i7optutofph706vlj.apps.googleusercontent.com'
//     })
//   }

//   handleSigninGoogle () {
//     GoogleSignin.signIn().then((user) => {
//       this.setState({displayName: user.name})
//       this.setState({photo: user.photo})
//       this.setState({email: user.email})
//       displayName = user.name
//       email = user.email
//       photo =  user.photo
//       this.props.navigation.navigate('Screen1')
//     }).catch((err) => {
//       console.log('WRONG SIGNIN', err);
//     }).done();
//   }

//   render() {
//     return (
//       <View style={LoginStyles.container}>
//         <View  style={LoginStyles.logoContainer}>
//           <Image 
//             style={LoginStyles.logo}
//             source={require('../asset/logo.png')}
//           />
//           <Text 
//           style={LoginStyles.title}>
//             Application {this.state.email}
//           </Text>
//         </View>

//         {/* FORM INPUT */}
        
//           <View style={formStyles.container}>
//             <Image source={require('../asset/google_logo.jpg')} style={{width: 48, height: 48}}/>
//             <TouchableOpacity style={formStyles.ButtonContainer}
//               onPress={() => this.handleSigninGoogle()}
//             >
//             <Text style={formStyles.ButtonText}>Sign in with Google +</Text>
//             </TouchableOpacity>   
//            </View>
        
//       </View>
//     );
//   }
// }

// // LOIGN Styles
// const formStyles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'center'
//   },
//   input: {
//     height: 40,
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     marginBottom: 10,
//     color: '#FFF',
//     paddingHorizontal: 10,
//     borderBottomColor: 'red'
//   },
//   ButtonContainer: {
//     backgroundColor: 'rgb(66,133,224)',
//     paddingVertical: 10,
//     width: 200,
//     justifyContent: 'center',
//     borderColor: 'red'
//   },
//   ButtonText: {
//     textAlign: 'center',
//     color: '#FFF',
//     fontWeight: '700',
//     fontSize: 16
//   }
// });

// const LoginStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   logoContainer: {

//   },
//   formContainer: {
//   },
//   logoContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexGrow: 1
//   },
//   logo: {
//     width: 300,
//     height: 300
//   },
//   title: {
//     color: 'red',
//     marginTop: 10,
//     width: 160,
//     textAlign: 'center',
//     opacity: 0.9
//   }
// });

// export{displayName,photo,email}

// END LOIGN Styles

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  YellowBox
} from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
export default class LoginComponent extends Component {

  callFun1 = () =>
  {
    this.props.navigation.navigate('yaris')
  }

  callFun2 = () =>
  {
    this.props.navigation.navigate('vios')
  }

  callFun3 = () =>
  {
    this.props.navigation.navigate('altis')
  }

  callFun4 = () =>
  {
    this.props.navigation.navigate('chr')
  }

  callFun5 = () =>
  {
    this.props.navigation.navigate('camry')
  }
  
  render() {
    return (
      <View style = {styles.MainContainer}>
 
        <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun1 }>
          <Image source={require('../asset/yaris.png')} style = {styles.ImageClass} />
        </TouchableOpacity>

        <Text style = {styles.font}>490,000 บาท</Text>

        <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun2 }>
        <Image source={require('../asset/vios.png')} style = {styles.ImageClass} />
        </TouchableOpacity>
        <Text style = {styles.font}>670,000 บาท</Text>

        <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun3 }>
        <Image source={require('../asset/altis.png')} style = {styles.ImageClass} />
        </TouchableOpacity>
        <Text style = {styles.font}>990,000 บาท</Text>

        <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun4 }>
        <Image source={require('../asset/chr.png')} style = {styles.ImageClass} />
        </TouchableOpacity>
        <Text style = {styles.font}>1,100,000 บาท</Text>

        <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun5 }>
        <Image source={require('../asset/camry.png')} style = {styles.ImageClass} />
        </TouchableOpacity>
        <Text style = {styles.font}>1,800,000 บาท</Text>

      </View>
    );
  }
}
 
const styles = StyleSheet.create(
{
 
MainContainer: 
{
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      backgroundColor: '#FFF8E1',
},
  ImageClass:
  {
    width: 200,
    height: 100
  },
  font:
  {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15
  }
});
