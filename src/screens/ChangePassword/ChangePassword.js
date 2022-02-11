import React,{useState} from 'react'
import { View, Text ,Image,Alert , StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const ChangePassword = () => {
    const navigation=useNavigation();
   
    const [oldPassword,setOldPassword]=useState('');
    const [newPassword,setNewPassword]=useState('');
    const [newPasswordConfirm,setNewPasswordConfirm]=useState('');

    const onConfirmPressed = () => {
         if (oldPassword == '' || newPassword == '' || newPasswordConfirm == ''  ) {
            Alert.alert('Error', 'you should fill All fields !')
        } else {
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            let data = {
                oldPassword,
                newPassword,
                newPasswordConfirm
            }
            fetch(
                
                'http://192.168.1.105:8080/Mobile%20API/changePassword.php',
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)  
                }
            )
                .then( Response => Response.text() ) 
                .then( Response => {
                    if(Response==='The email you entred does not exist !'){
                        Alert.alert('Error',Response)
                    }else{
                        Alert.alert('Success',Response)
                        navigation.navigate('SignIn')
                    }
                }) 
                .catch((error) => {
                    console.error("ERROR FOUND" + error);
                })
        }
    }
    
    const onBackSignIn = () => {
        navigation.navigate("SignIn");
    }

    return (
<View style={{width:"100%",backgroundColor:"#56ADE7"}}>
        <View style ={styles.container}>
          <Text style={styles.title}> Change your Password  : </Text>
          <View style={{marginHorizontal:28}}>
          <Text style={{marginLeft:10}}> Old Password * </Text>
            <CustomInput 
                value={oldPassword}
                setValue={setOldPassword}
                secureTextEntry={false}
                placeholder={'Enter old password '}  
            />
            <Text style={{marginLeft:10}}> New Password * </Text>
            <CustomInput 
                value={newPassword}
                setValue={setNewPassword}
                secureTextEntry={false}
                placeholder={'Enter new password '}  
            />
            <Text style={{marginLeft:10}}> Confirm New Password * </Text>
            <CustomInput 
                value={newPasswordConfirm}
                setValue={setNewPasswordConfirm}
                secureTextEntry={false}
                placeholder={'Confirm new password'}  
            />

            <CustomButton
            text1={"Confirm"}
            fgColor={'white'}
            bgColor={"#56ADE7"}
            onPress={onConfirmPressed}
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
export default ChangePassword;
