import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Alert, View, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import LocationScreen from '../MapsScreen/LocationScreen';
navigator.geolocation = require('@react-native-community/geolocation');
const initalState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
};
=======
navigator.geolocation = require("@react-native-community/geolocation");
>>>>>>> 02dab770d57c22ca1dbabf455142f8fb447a52eb

const SignUpBusinessScreen = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const navigation = useNavigation();
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [specialities, setSpecialities] = useState([]);
<<<<<<< HEAD
    const [curentPosition, setCurentPosition] = useState(initalState);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            // alert(JSON.stringify(position))
            const { longitude, latitude } = position.coords
            setCurentPosition({
                ...curentPosition,
                latitude,
                longitude,
            })
        },

            error => alert(error.message),
            { timeout: 20000, maximumAge: 1000 }
        )

        fetch(
            'http://192.168.1.103:8080/Mobile%20API/getSpecialities.php',
        ).then(res => res.text())
            .then(res => {
                setSpecialities(res.split(','))
            })
            .catch(err=>console.log())
=======
    const [speciality, setSpeciality] = useState('');

    const initalState = {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const [curentPosition, setCurentPosition] = useState(initalState);


    useEffect(() => {
        fetch('http://192.168.1.112:80/mobile-api/getSpecialities.php')
            .then(res => res.text())
            .then(response => setSpecialities(response.split(',')))
            .catch(err => console.warn(err))
>>>>>>> 02dab770d57c22ca1dbabf455142f8fb447a52eb
    }, [])


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                //alert(JSON.stringify(position));
                const { longitude, latitude } = position.coords;
                setCurentPosition({
                    ...curentPosition,
                    latitude, 
                    longitude,
                });
            },
            (error) => alert(error.message),
            { timeout: 20000, maximumAge: 1000 }
        );
    }, []);


    const onRegisterPressed = () => {
        if (fullname == '' || email == '' || password == '' || passwordRepeat == '' || phone == '') {
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
                email: email,
                phone: phone,
                password: password,
<<<<<<< HEAD
                latitude: curentPosition.latitude,
                longitude: curentPosition.longitude
            }
            fetch(
                //'http://10.0.2.2:80/mobile-api/createAccount.php',
               // 'http://192.168.1.112:80/mobile-api/createBisAccount.php',
                'http://192.168.1.103:8080/Mobile%20API/createBisAccount.php',
=======
                speciality: speciality,
                latitude: curentPosition.latitude,
                longitude: curentPosition.longitude,
            }
            fetch(
                'http://192.168.1.112:80/mobile-api/createBisAccount.php',
                //'http://192.168.1.103:8080/Mobile%20API/createAccountDoc.php',
>>>>>>> 02dab770d57c22ca1dbabf455142f8fb447a52eb
                {
                    method: 'POST', 
                    headers: headers,
                    body: JSON.stringify(data)
                }
            )
                .then(res => res.text())
                .then((txt) => {
<<<<<<< HEAD
                    if (txt === 'Account created successfully !') {
                        Alert.alert('Success', txt, )
                        setFullname('')
=======
                    if (txt === 'Account created successfully !') {  
                        Alert.alert('Success', txt)
                        setFullname('') 
>>>>>>> 02dab770d57c22ca1dbabf455142f8fb447a52eb
                        setEmail('')
                        setPhone()
                        setPassword('')
                        setPasswordRepeat('')
                       
                    } else {
                        Alert.alert('Error', txt) 
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const onSignUpPressed = () => {
        navigation.navigate("SignIn");
    }
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
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
                            value={email}
                            setValue={setEmail}
                        />
                        <Text style={{ color: 'gray', marginBottom: 5, marginLeft: -215 }}>Your Speciality : </Text>
                        <View style={styles.Border}
                        >
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 40, width: "100%", }}
                                onValueChange={(itemValue) => {
                                    setSpeciality(itemValue)
                                    setSelectedValue(itemValue)
                                }}
                            >
                                {specialities.map(spe => <Picker.Item label={spe} key={spe} value={spe} />)}
                            </Picker>
                        </View>
                        <CustomInput
                            placeholder="Phone"
                            value={phone}
                            setValue={setPhone}
                            keyBaordTypeInput="numeric"
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
<<<<<<< HEAD
                        

                        <CustomButton text1="Register" onPress={onRegisterPressed} />
  
=======
                        <CustomButton text1="Register" onPress={onRegisterPressed} />
                        <Text style={styles.text}> Have you an account ?</Text>
>>>>>>> 02dab770d57c22ca1dbabf455142f8fb447a52eb
                        <CustomButton text1="Sign In" onPress={onSignUpPressed} fgColor='white' bgColor="#18CC05" />
                    </View>
                </View>
<<<<<<< HEAD
                
=======
>>>>>>> 02dab770d57c22ca1dbabf455142f8fb447a52eb
            </View>
            
        </ScrollView>
    ) 
}

export default SignUpBusinessScreen

const styles = StyleSheet.create({
    regl: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: "#041C60"
    },
    root: {

        backgroundColor: "#56ADE7",
        width: '100%',
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
        marginVertical: 25,
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
    },
    Border: {
        borderColor: "#293772",
        borderWidth: 1.75,
        width: "100%",
        height: 45,
        borderRadius: 15,
        marginBottom: 15,
        paddingHorizontal: 20,
        backgroundColor: "#F9FBFF"
    }
})
