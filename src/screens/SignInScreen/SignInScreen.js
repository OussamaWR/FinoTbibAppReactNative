import React, { useState } from 'react'
import { View, Text, Image, Alert, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignInScreen = () => { 
 

    const { height } = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigation = useNavigation();
    


    const onSignUpPressed = () => {
        Navigation.navigate("SignUp");
    }

    
  

    const onSignInPressed = () => {
        if (email == '' || password == '') {
            Alert.alert('Error', 'you should fill all fields !')
        } else {
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            let data = {
                email: email,
                password: password
            }
            fetch(
                //'http://192.168.1.105:808080/Mobile%20API/login.php',
                'http://192.168.1.105:8080/Mobile%20API/login.php',
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                }
            )
           
                .then( Response => Response.json() )
                .then((Response) => {
                    AsyncStorage.setItem('user',JSON.stringify({
                        id:Response[0],
                        fullname:Response[1],
                        email:Response[2],
                        phone:Response[3],
                        role:Response[5]
                    })).then(()=>{
                        setEmail('')
                        setPassword('')
                    }).catch(err=>console.log(err))
                    if (Response[5] === "client") {
                        Navigation.navigate("HomeClient")
                    }else if(Response[5] === "doctor"){
                        Navigation.navigate("HomeDoctor")
                    }else if(Response[5] === "admin") {
                        Navigation.navigate("AdminHome")
                    } 
                    else{
                        Alert.alert('Login Faild', 'Username or password incorrect ! ')
                    }
                }) 
                .catch((error) => {
                    console.error("ERROR FOUND" + JSON.stringify(error));
                })
        }
    }

    const onGoHomePressed = async () => {
        try {
            const userData = await AsyncStorage.getItem('user')
            if(userData!=null){
                let userDataParsed=JSON.parse(userData)
                if(userDataParsed.role==='client')
                Navigation.navigate("HomeClient");
                else if(userDataParsed.role==='doctor')
                Navigation.navigate("DoctorHome");
                else if(userDataParsed.role==='admin')
                Navigation.navigate("AdminHome");
            }else{
                Alert.alert('Login Error', "You are not logged yet !")
            }
        } catch (err) {
            Alert.alert('Login Error', JSON.parse(err))
        }
    }

    const onForgotPasswordPressed = () => {
        Navigation.navigate("ForgetPassword");
    }

    const onSignUpbisPressed = () => {
        Navigation.navigate("SignUpBis")
    }
   


    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.root}>

             <Image
                 source={require('../../../assets/images/logo1.png') } 
                style={styles.logo,{height : height*0.15 , marginTop : 20}} 
                resizeMode='contain'
                />  
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', paddingTop: 3 }} > FinoTbib </Text>
                <View style={styles.test}>
                    <View style={styles.test1}>
                        <CustomInput
                            secureTextEntry={false}
                            placeholder="Email"
                            value={email}
                            setValue={setEmail}
                        />


                        <CustomInput
                            secureTextEntry={true}
                            placeholder="Password"
                            value={password}
                            setValue={setPassword}
                        />

                        <CustomButton text1="Sign In" onPress={onSignInPressed} />
                        <CustomButton text1="Forgot Password ?" onPress={onForgotPasswordPressed} type='TERTIARY' />
                        <CustomButton text1="Already Signed In ? Go Home" onPress={onGoHomePressed} fgColor="#3E497A" bgColor="#CAF0F8"  />
                        <Text style={{ marginTop: 20 }} > Don't have an account ?  </Text>
                        <CustomButton text1="Create Client Account" onPress={onSignUpPressed} bgColor="#FAE9E1" fgColor="#DD4D44" />
                        <CustomButton text1="Create Doctor account" onPress={onSignUpbisPressed} bgColor="#C7F9BE" fgColor="#167C05" />
                    </View>
                </View>

            </View></ScrollView>
    )


}
const styles = StyleSheet.create({
    logo: {
        width: '50%',
        maxHeight: 200,
        maxWidth: 200,
    },
    root: {

        backgroundColor: '#56ADE7',
        width: '100%',
        alignItems: 'center'
    },

    test: {
        marginTop: 30,
        borderRadius: 40,
        backgroundColor: 'white',
        width: "100%"
    },
    test1: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
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
export default SignInScreen;