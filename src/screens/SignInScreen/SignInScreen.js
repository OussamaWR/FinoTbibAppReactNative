import React, { useState } from 'react'
import { View, Text, Image, Alert, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => { 


    const { height } = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigation = useNavigation();
    const [reviwes,setReviews]=useState([]) 
    const FetchReviews = () => {
       fetch('http://localhost:8000/api/reviews')
       //fetch('http://192.168.1.105:80/api/reviews')
        .then(res=>res.json())
        .then(res=>Alert.alert('Reviews', JSON.stringify(res) ))
        //.catch(err=>Alert.alert('Error', JSON.stringify(err) ))
        .catch(err=>console.warn(err)) 
    }  


    const onSignUpPressed = () => {
        Navigation.navigate("SignUp");
        //Navigation.navigate("HomeClient");
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
<<<<<<< HEAD
                'http://192.168.1.105:80/Mobile%20API/login.php',
                //'http://192.168.1.103:8080/Mobile%20API/login.php',
=======
                'http://192.168.1.105:8080/Mobile%20API/login.php',
>>>>>>> main
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                }
            )
                .then( Response => Response.text() )
                .then((Response) => {
                    if (Response === "Login Client succesfully !") {
                        setEmail('')
                        setPassword('')
                        Navigation.navigate("HomeClient")
                    }else if(Response === "Login Doctor succesfully !"){
                        setEmail('')
                        setPassword('')
                        Navigation.navigate("HomeDoctor")
                    }
                    else{
                        Alert.alert('Login Faild', 'Username or password incorrect ! ')
                    }
                }) 
                .catch((error) => {
                    console.error("ERROR FOUND" + error);
                })
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
                        <Text style={{ marginTop: 20 }} > Don't have an account ?  </Text>
                        <CustomButton text1="Create Client Account" onPress={onSignUpPressed} bgColor="#FAE9E1" fgColor="#DD4D44" />
                        <CustomButton text1="Create Doctor account" onPress={onSignUpbisPressed} bgColor="#C7F9BE" fgColor="#167C05" />
                        <CustomButton text1="Fetch Reviews" onPress={FetchReviews} bgColor="#C7F9BE" fgColor="#167C05" /> 
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
