import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View, 
  TextInput,
  SafeAreaView, 
  Dimensions,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
const registerImage = require('../assets/register-image.png');

const { width, height } = Dimensions.get('window');
const getDynamicWidth = iphone11PropMaxSize => iphone11PropMaxSize / 414 * width; //Based on Iphone11ProMax
const getDynamicHeight = iphone11PropMaxSize => iphone11PropMaxSize / 896 * height; //Based on Iphone11ProMax
const defaultTopMargin = getDynamicHeight(140);
const defaultVertlMargin = getDynamicHeight(10); 
const defaultHorizMargin = getDynamicWidth(20);
const cornerCircleRadius = getDynamicWidth(180);

const RegisterScreen = () => {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const goToLogin = () => {
    Actions.login();
  };

  const handleRegister = async () => {
    
    let formBody = [];
    let encodedKey = encodeURIComponent('user[email]');
    let encodedValue = encodeURIComponent(email);
    formBody.push(encodedKey + '=' + encodedValue);
    
    encodedKey = encodeURIComponent('user[password]');
    encodedValue = encodeURIComponent(password);
    formBody.push(encodedKey + '=' + encodedValue);
    formBody = formBody.join('&');

    try {
      const response = await axios.post(
        'https://fast-forest-63945.herokuapp.com/api/v1/signup', {
          user: {
            email,
            password
          }
        }
      );
      // const response = await fetch(
      //   'https://fast-forest-63945.herokuapp.com/api/v1/signup', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      //     },
      //     body: formBody
      //   }
      // );
      const status = await response.status;
      console.log(status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#EEEE', height: '100%' }}>

      <View style={[ styles.cornerCircle, { top: -cornerCircleRadius/2, left: -cornerCircleRadius/20 }] } />
      <View style={[ styles.cornerCircle, { top: -cornerCircleRadius/5, left: -cornerCircleRadius/2 }] } />

      <View style={styles.mainContainer}>
        <Image style={styles.registerImage} source={registerImage} />
        <Text style={styles.titleText}>Welcome Aboard</Text>
        <Text style={styles.subtitleText}>...insert our slogan...</Text>
        <Text>{'\n'}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder='Enter your email address'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder='Enter your password'
          secureTextEntry={true}
        />
        <Text>{'\n'}</Text>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={goToLogin}>
          <Text>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Text style={[ styles.footerText, { color: '#2F9AA0' }]}>Sign in</Text>
          </Text>
        </TouchableOpacity>

      </View>

      <View style={[ styles.cornerCircle, { bottom: -cornerCircleRadius/2, right: -cornerCircleRadius/20 }] } />
      <View style={[ styles.cornerCircle, { bottom: -cornerCircleRadius/5, right: -cornerCircleRadius/2 }] } />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cornerCircle: {
    width: cornerCircleRadius,
    height: cornerCircleRadius,
    backgroundColor: 'rgba(143, 225, 215, 0.44)',
    position: 'absolute',
    borderRadius: cornerCircleRadius,
    zIndex: -1
  },
  mainContainer: {
    marginLeft: defaultHorizMargin,
    marginRight: defaultHorizMargin,
    marginTop: defaultTopMargin,
    alignItems: 'center',
    height: height - defaultTopMargin
  },
  registerImage: {
    width: getDynamicHeight(230),
    height: getDynamicHeight(185),
    resizeMode: 'cover'
  },
  titleText: {
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 32,
    color: 'rgba(0, 0, 0, 0.8)'
  },
  subtitleText: { 
    // fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: 'rgba(0, 0, 0, 0.8)'
  },
  input: {
    width: '100%',
    height: 50,
    margin: defaultVertlMargin,
    marginTop: 0,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFFF'
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#50C2C9',
    height: 40
  },
  buttonText: {
    // fontFamily: 'Poppins',
    color: '#ffff',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    // fontFamily: 'Poppins',
    color: 'rgba(0, 0, 0, 0.8)',
    letterSpacing: 0.1,
    fontSize: 14,
    lineHeight: 45,
    fontWeight: 'normal',
    fontWeight: 'normal'
  }
});

export default RegisterScreen;
