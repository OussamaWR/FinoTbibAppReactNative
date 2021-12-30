import React, { useState } from 'react'
import { View, Text, Image, Alert, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { findHostInstance_DEPRECATED } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';


const SignInScreen = () => {


    const { height } = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Navigation = useNavigation();



    const onSignUpPressed = () => {
        Navigation.navigate("SignUp");
    }

    const onSignInPressed = () => {
        if (username == '' || password == '') {
            Alert.alert('Error', 'you should fill all fields !')
        } else {
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            let data = {
                username: username,
                password: password
            }
            fetch(
                //'http://10.0.2.2:80/mobile-api/createAccount.php',
                'http://192.168.1.112:80/mobile-api/login.php',
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                }
            )
                // .then( (Response) => Alert.alert('Response',JSON.stringify(Response.json())))
                .then( Response => Response.text() )
                .then((res) => {
                    if (res === "Login succesfully !") {
                        setUsername('')
                        setPassword('')
                        Navigation.navigate("Home")
                    }
                    else{
                        Alert.alert('Login Faild', 'Username or password incorrect')
                    }
                }) 
                .catch((error) => {
                    console.error("ERROR FOUND" + error);
                })
        }
        // validation user
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

                {/* <Image
                 source={require('C:/Users/Pc/Desktop/Projects/React-Native/FinoTbibAppReactNative/assets/images/logo1.png') } 
                style={styles.logo,{height : height*0.15 , marginTop : 20}} 
                resizeMode='contain'

                />  */}
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', paddingTop: 3 }} > FinoTbib </Text>
                <View style={styles.test}>
                    <View style={styles.test1}>
                        <CustomInput
                            secureTextEntry={false}
                            placeholder="Username"
                            value={username}
                            setValue={setUsername}
                        />


                        <CustomInput
                            secureTextEntry={true}
                            placeholder="Password"
                            value={password}
                            setValue={setPassword}

                        />

                        <CustomButton text1="Sign In" onPress={onSignInPressed} />
                        <CustomButton text1="Forgot Password ?" onPress={onForgotPasswordPressed} type='TERTIARY' />
                        <Text style={{ marginTop: 30 }} > Don't have an account ? <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Create one</Text> </Text>
                        <CustomButton text1="Create Personal account" onPress={onSignUpPressed} bgColor="#FAE9E1" fgColor="#DD4D44" />

                        <CustomButton text1="Create Business account" onPress={onSignUpbisPressed} bgColor="#C7F9BE" fgColor="#167C05" />
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
        //padding:50,
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
