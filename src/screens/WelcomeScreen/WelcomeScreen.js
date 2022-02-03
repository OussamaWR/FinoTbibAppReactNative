import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,ImageBackground, Pressable } from 'react-native'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';





const WelcomeScreen = () => {

    const { height } = useWindowDimensions();
    const Navigation = useNavigation();

    const onStartPressed = () => Navigation.navigate("SignIn")

    const PressHome=()=>{
      Navigation.navigate("Localisation");
    }
      


    return (
        <View >
        
            <View>
            <ImageBackground source={require('../../../assets/images/Back.gif')} resizeMode="cover" style={{width:"115%",height:"100%"}}>
                        <View style={styles.test1}>
                        <Image
                        source={require('../../../assets/images/logo1.png')}
                        style={styles.logo, { height: height * 0.12,marginBottom:5 }}
                        resizeMode='contain'
                    />
                     <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 3,marginBottom:120 }} > FinoTbib </Text>
                     <Text style={{color:'white' , textAlign:'center',fontSize:15,marginBottom:20}}>L'application 'FinoTbib'  permet de decouvrir et de trouver les docteurs les  plus proches de vous en fonction de votre maladie</Text>
                           
                               <Pressable style={{backgroundColor:'black',width:"65%",borderRadius:7,flexDirection:'row',padding:10,justifyContent:'space-between'}} onPress={onStartPressed}>  

                                   <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}> Let's Begin   </Text>
                                   <Image source={require('../../../assets/images/right.png') } style={{width:20,height:20,marginTop:2}}></Image>
                               </Pressable>
                           
                        </View>
                       
                        </ImageBackground>
            </View>
            
           

        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: '50%',
        maxHeight: 200,
        maxWidth: 200,
        // marginLeft:-100,

    },
    root: {

        backgroundColor: '#56ADE7',
        width: '100%',
        alignItems: 'center'
    },

    test: {
        marginTop: 20,
        borderRadius: 40,
        backgroundColor: 'black',
        height:"100%",
        width: "100%"
    },
    test1: {
        width: '55%',
        height: '100%',
        alignItems: 'center',
        marginLeft:-15,
        marginTop:70,
        paddingTop: 15,
        marginVertical: 30,
        paddingHorizontal: 30
    }
    ,
    image: {
        flex: 1,
        justifyContent: "center"
    },

});
export default WelcomeScreen;
