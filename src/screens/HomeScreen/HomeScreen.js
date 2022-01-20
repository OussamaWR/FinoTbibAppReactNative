import React from 'react'
import { StyleSheet, Text, View ,ImageBackground} from 'react-native'
import NavBar from '../../components/Menu/NavBar'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    
    
    
    
    
    const Navigation = useNavigation();

   

    const Map=()=>{
      Navigation.navigate("Localisation");
    }

    const Setting =()=>{
        Navigation.navigate("Setting");
    }
    
   
      

    return (
        <View>
        <ImageBackground source={require('../../../assets/images/Back1.gif')} resizeMode="cover" style={{width:"100%",height:"100%"}}>
                  <Text style={{color:'black' , textAlign:'center',fontSize:32,marginBottom:0,marginTop:20,fontWeight:'bold'}}> Welcome in FinoTbib  </Text>
                  <Text style={{color:'black' , textAlign:'center',fontSize:12,marginBottom:20,marginTop:0,textTransform:'uppercase',}}>We wish you a speedy recovery </Text>
                  <View 
                  style={{
                    flex: 1,
                    // justifyContent: 'flex-end',
                  }}
                  ></View>
                   <NavBar
                   map={Map}
                   setting={Setting}

                    ></NavBar>
          </ImageBackground>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({


})