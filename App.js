import React from 'react';
import {  View,Text } from 'react-native';
import Navigation from './src/screens/Navigation';
import NavBar from './src/components/Menu/NavBar';
import CustomButton from './src/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Setting from './src/screens/Setting';

const App = () => {

  return (
    <View  style={{flex:1,width:"100%"}}>
<<<<<<< HEAD
      <Navigation />
=======
    
      <Navigation/>
      
      {/* <Setting/> */}
    


>>>>>>> 8c92f0f07991ae31d62e42f58467c4ccca65f987
    </View>
  );
}
export default  App;