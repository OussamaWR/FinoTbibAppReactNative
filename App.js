
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgetPassword from './src/screens/ForgetPassword';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/screens/navigation';
import SignUpBusinessScreen from './src/screens/SignUpBusiness/SignUpBusinessScreen';
import LocationScreen from './src/screens/MapsScreen/LocationScreen';
import TestImag from './src/screens/testImage/TestImag';
export default function App() {
 
  return (
    <View  style={styles.root}>
      {/* <TestImag></TestImag> */}
      {/* <LocationScreen/> */}
    {/* <NewPasswordScreen/> */}
      <Navigation/>
      {/* <ForgetPassword/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <SignUpScreen /> */}
      {/* <SignInScreen/> */}
     
    </View>
  );
}

const styles = StyleSheet.create({
 


  root:{
    flex:1,
    // backgroundColor :'#56ADE7',
    width:"100%"
    
    
  },
});
