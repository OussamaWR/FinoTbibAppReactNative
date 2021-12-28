import React,{useState} from 'react'
import { View, Text ,Image , StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const ForgetPassword = () => {
    const navigation=useNavigation();
   
    const [Email,SetEmail]=useState('');
    const onConfirmPressed = () => {
        navigation.navigate("New Password");
    }
    
    const onBackSignIn = () => {
        navigation.navigate("SignIn");
    }

    return (
<View style={{width:"100%",backgroundColor:"#56ADE7"}}>
        <View style ={styles.container}>
          <Text style={styles.title}> Reset your Password  : </Text>
          <View style={{marginHorizontal:28}}>
          <Text style={{marginLeft:10}}> Email * </Text>
            <CustomInput 
                value={Email}
                setValue={SetEmail}
                secureTextEntry={false}
                placeholder={'Enter your Email '}
                
            />
            <CustomButton
            text1={"Confirm"}
            fgColor={'white'}
            bgColor={"#56ADE7"}
            onPress={onConfirmPressed}
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
        textAlign: 'center' ,
        marginTop : 25,
        marginBottom : 40 ,
       //marginHorizontal :80,
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
export default ForgetPassword;
