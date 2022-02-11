import React from 'react';
import {  View,Text } from 'react-native';
import Navigation from './src/screens/navigation';
import NavBar from './src/components/Menu/NavBar';
import CustomButton from './src/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Setting from './src/screens/Setting';
import Profile from './src/screens/Profile';

const App = () => {

  return (
    <View  style={{flex:1,width:"100%"}}>
    
      <Navigation/>
      {/* <Profile/> */}
      {/* <Setting/> */}
    


    </View>
  );
}
export default  App;