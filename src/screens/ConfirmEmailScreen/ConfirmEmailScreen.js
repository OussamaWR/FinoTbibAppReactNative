import React,{useState} from 'react'
import { View, Text ,Image , StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const ConfimEmailScreen = () => {
    
    const navigation = useNavigation();
    const [code,SetCode]=useState('');
    const onConfirmPressed = () => {
        navigation.navigate("Home");
    }
    const onResendCode= () => {
        console.warn("Resend Code");
    }
    const onBackSignIn = () => {
        navigation.navigate("SignIn");
    }

    return (
        <View style={{width:"100%" , backgroundColor :"#56ADE7"}}>
        <View style ={styles.container}>
          <Text style={styles.title}> Confirmation your Email   : </Text>
          <View style={{marginHorizontal:28}}>
          <Text style={{marginLeft:10}}> Code* </Text>
            <CustomInput 
                value={code}
                setValue={SetCode}
                secureTextEntry={false}
                placeholder={'Enter your confirmation code '}
                
            />
            <CustomButton
            text1={"Confirm"}
            fgColor={'white'}
            bgColor={"#167005"}
            onPress={onConfirmPressed}
            ></CustomButton>

             <CustomButton
            text1={"Resend Code"}
            
           
            onPress={onResendCode}
            type='SECONDARY'
            ></CustomButton>

             <CustomButton
            text1={"Back on Sign In"}
            type='TERTIARY'
            onPress={onBackSignIn}
            ></CustomButton>
            </View>
        </View></View>
    )
   
    
}

const styles= StyleSheet.create({
    title:{
        marginTop : 25,
        marginBottom : 40 ,
       marginHorizontal :60,
        fontSize : 20,
        fontWeight : 'bold'
    },
    container :{
       
        marginTop :70,
        backgroundColor : 'white',
        height :" 100%",
        borderRadius : 40,

    }

});
export default ConfimEmailScreen;
