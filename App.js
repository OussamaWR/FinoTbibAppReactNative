import React from 'react';
import {  View,Text } from 'react-native';
import Navigation from './src/screens/Navigation';
import NavBar from './src/components/Menu/NavBar';
import CustomButton from './src/components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const App = () => {

  return (
    <View  style={{flex:1,width:"100%"}}>
      <Navigation />
    </View>
  );
}
export default  App;