import React from 'react';
import {  View } from 'react-native';
<<<<<<< HEAD
import {Navigation} from './src/screens/Navigation'

export default  function App() {
  return ( 
    <View  style={{flex:1,width:"100%"}}>
      <Navigation />
=======
import Navigation from './src/screens/navigation';
import NavBar from './src/components/Menu/NavBar';
import CustomButton from './src/components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function App() {

  return (
    <View  style={{flex:1,width:"100%"}}>
    
      <Navigation/>
      
      
    


>>>>>>> main
    </View>
  );
}
