import React, { useState } from 'react'
import { View, Text, Image, Alert, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignInScreen = () => { 
=======
import Carousel from "react-native-snap-carousel";
import MapView, {
    PROVIDER_GOOGLE,
    Marker,
    Callout,
    Circle,
} from "react-native-maps"; 


navigator.geolocation = require("@react-native-community/geolocation");





const initalState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.055,
    longitudeDelta: 0.055,
};


const initialLoc = [
    {
        latitude: null,
        longitude: null
    }
]


const LocationScreen = () => {

    const [localisations, setLocalisations] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [specialities, setSpecialities] = useState([]);
    const [speciality, setSpeciality] = useState('');



    const get = () => {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        let data = {
            speciality: speciality,
        }
        fetch(
            'http://192.168.1.112:80/Mobile%20API/getLocalisations.php',
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            }
        )
            .then(res => res.json())
            .then(res => {
                setLocalisations(res)
                console.log( localisations);
            })
            .catch(err => {
                console.log(err)
            })



    }






    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // alert(JSON.stringify(position));
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

        fetch('http://192.168.1.112:80/Mobile%20API/getSpecialities.php')
            .then(res => res.text())
            .then(response => setSpecialities(response.split(',')))
            .catch(err => console.warn(err))


    }, [])


    const mapView = useRef();
    const refMarks = useRef();
    const markers = [];

<<<<<<< HEAD
    const [phoneNumber, setPhoneNumbre] = useState(''); 
=======
    const [phoneNumber, setPhoneNumbre] = useState('');
>>>>>>> mouadBranch

    const onCarouselItemChange = (index) => {
        let location = localisations[index];
        mapView.current.animateToRegion({
            latitude: Number(location.latitude),
            longitude: Number(location.longitude),
            latitudeDelta: 0.020,
            longitudeDelta: 0.020,
        })
        setPhoneNumbre(location.phone);
        markers[index].showCallout();

    }
<<<<<<< HEAD

    const call = () => {
        // RNImmediatePhoneCall.immediatePhoneCall('0123456789');
        console.warn("call")
    }
    const _renderItem = ({ item }) => {
        return (
            <View style={styles.carsouls1}>
                <View style={{ width: '100%', backgroundColor: 'black', borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff' }}>{item.fullname}</Text></View>
                <View style={styles.carsouls}>
                    <Image source={require('../../../assets/images/doctor.png')} style={{ height: 70, width: 70 }} />
                    <View style={{ alignItems: 'center' }}>

                        <Text style={{ color: 'white' }}>{item.description}</Text>
                        <Text style={{ color: 'white', fontWeight: 'bold' }} >Review : 8.5/10</Text>
                        <View style={{ width: '70%' }}>
                            <CustomButton
                                text1={'Call'}
                                bgColor={'#0EC315'}
                                onPress={call}
                            /></View>
                    </View>


    const carouselRef = useRef(null);
>>>>>>> 1045c6b08713089b199653e78373172375fdec52


    const { height } = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigation = useNavigation();
    


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
                //'http://192.168.1.105:8080/Mobile%20API/login.php',
                'http://192.168.1.105:80/Mobile%20API/login.php',
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                }
            )
           
                .then( Response => Response.json() )
                .then((Response) => {
                    AsyncStorage.setItem('user',JSON.stringify({
                        fullname:Response[1],
                        email:Response[2],
                        phone:Response[3]
                    })).then(()=>{
                        setEmail('')
                        setPassword('')
                    }).catch(err=>console.log(err))
                    if (Response[5] === "client") {
                        Navigation.navigate("HomeClient")
                    }else if(Response[5] === "doctor"){
                        Navigation.navigate("HomeDoctor")
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
                    </View>
                </View>
<<<<<<< HEAD
=======
                <MapView
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    style={{ height: "52%" }}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    rotateEnabled={true}
                    zoomEnabled={true}
                    // toolbarEnabled={true}
                    initialRegion={curentPosition}
                >
>>>>>>> 1045c6b08713089b199653e78373172375fdec52

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