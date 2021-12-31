import React, { useState } from 'react'
import { View, Text, Image, Alert, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {


    const navigation = useNavigation();
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        if (fullname == '' || username == '' || password == '' || passwordRepeat == '') {
            Alert.alert('Error', 'you should fill all fields !')
        } else if (password !== passwordRepeat) {
            Alert.alert('Password Error', 'Passwords must be equals !')
        } else {
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            let data = {
                fullname: fullname,
                username: username,
                password: password
            }

            

            fetch(
                //'http://10.0.2.2:80/mobile-api/createAccount.php',
                'http://192.168.1.112:80/mobile-api/createAccount.php',
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                }
            )
                .then(res=>res.text())
                .then((txt) => {
                    if(txt==='Account created successfully !'){
                        Alert.alert('Success', txt)
                        setFullname('')
                        setUsername('')
                        setPassword('')
                        setPasswordRepeat('')
                    }else{
                        Alert.alert('Error', txt)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    const Terms = () => {
        console.warn("Terms the use");
    }
    const policy = () => {
        console.warn("Policy");
    }
    const onSignUpPressed = () => {
        navigation.navigate("SignIn");
    }

    return (

        <View style={styles.root}>

            <Text style={styles.title}> Create an account </Text>

            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }} > FinoTbib </Text>
            <View style={styles.test}>
                <View style={styles.test1}>
                    <CustomInput
                        secureTextEntry={false}
                        placeholder="Fullname"
                        value={fullname}
                        setValue={setFullname}
                    />

                    <CustomInput
                        secureTextEntry={false}
                        placeholder="Email"
                        value={username}
                        setValue={setUsername}
                    />
                    <CustomInput
                        secureTextEntry={true}
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                    />
                    <CustomInput
                        secureTextEntry={true}
                        placeholder="Repeat Password"
                        value={passwordRepeat}
                        setValue={setPasswordRepeat}
                    />

                    <CustomButton text1="Register" onPress={onRegisterPressed} />

                    <Text style={styles.text}>By Registring , you cofirm that you accepte our<Text onPress={Terms} style={styles.regl}> Terms of Use </Text> and <Text onPress={policy} style={styles.regl}> Privacy Policy</Text></Text>
                    <Text style={styles.text}> Have an account ?</Text>
                    <CustomButton text1="Sign In" onPress={onSignUpPressed} fgColor='white' bgColor="#18CC05" />

                </View>
            </View>

        </View>
    )


}
const styles = StyleSheet.create({
    regl: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: "#041C60"
    },

    root: {

        backgroundColor: "#56ADE7",
        width: '100%',
        //padding:50,
        alignItems: 'center'
    },

    test: {
        marginTop: 10,
        borderRadius: 40,
        backgroundColor: 'white',
        width: "100%"
    },
    test1: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 5,
        marginVertical: 60,
        paddingHorizontal: 30
    }
    ,
    image: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#041C60",
        margin: 10,
    }
    ,
    text: {

        color: 'gray',
        marginVertical: 12
    }

});
export default SignUpScreen;
