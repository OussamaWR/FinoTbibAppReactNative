import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Alert, ImageBackground, Image } from 'react-native'
import NavBar from '../../components/Menu/NavBar'
import CustomInput from '../../components/CustomInput'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-picker';
const Setting = () => {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')




    useEffect(async () => {
        try {
            const userData = await AsyncStorage.getItem('user')
            let userDataParsed = JSON.parse(userData)
            setFullname(userDataParsed.fullname)
            setEmail(userDataParsed.email)
            setPhone(userDataParsed.phone)
        } catch (err) {
            Alert.alert('err', JSON.parse(err))
        }
    }, [])

    const navigation = useNavigation();

    const onUpdatePressed = () => {
        if (email == '' || fullname == '' || phone == '') {
            Alert.alert('Error', 'you should fill all fields !')
        } else {
            fetch(
                'http://192.168.1.112:80/Mobile%20API/updateUser.php',
                {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            fullname,
                            email,
                            phone
                        }
                    )
                }
            )
                .then(res => res.text())
                .then(res => {
                    Alert.alert('Success', res)
                })
                .catch(err => console.warn(err))
        }
    }




    const Map = () => {
        navigation.navigate('Localisation')
    }

    const Home = () => {
        navigation.navigate('HomeClient')
    }

    const Profile = () => navigation.navigate("Profile");



    ImagePicker.openPicker({
        width: VARIABLES.userImages.width,
        height: VARIABLES.userImages.height,
        cropping: true
    })



    return (
        <View
        >

            <ImageBackground source={require('../../../assets/images/Back/Back4.gif')} resizeMode="cover" style={{ width: "100%", height: "100%" }}>
                {/* <ImageBackground  resizeMode="cover" style={{ width: "100%", height: "100%" }}> */}
                <View
                    style={{ flexDirection: 'row', marginBottom: 130, backgroundColor: '#56ADE7', paddingTop: 7, paddingBottom: 7 }}
                >
                    <Image source={require('../../../assets/images/Setting.gif')} resizeMode='contain' style={{ width: 45, height: 45, marginLeft: 30, }} />
                    <Text style={{ marginLeft: 75, fontWeight: 'bold', fontSize: 25, color: 'white' }}>Setting</Text>
                </View>


                <View style={styles.Views}>
                    <Text style={styles.Texts} >Full Name* </Text>
                    <CustomInput
                        secureTextEntry={false}
                        placeholder="Fullname"
                        value={fullname}
                        setValue={setFullname}
                    />
                </View>






                <View style={styles.Views}>
                    <Text style={styles.Texts} >        Email* </Text>
                    <CustomInput
                        secureTextEntry={false}
                        placeholder="Emil"
                        value={email}
                        setValue={setEmail}
                    />
                </View>

                {<View style={styles.Views}>
                    <Text style={styles.Texts} >      Phone* </Text>
                    <CustomInput
                        secureTextEntry={false}
                        placeholder="Phone"
                        value={phone}
                        setValue={setPhone}
                        keyBaordTypeInput={'numeric'}
                    />
                </View>}



                <View style={{ alignItems: 'center', width: "50%", marginLeft: 100, }}>
                    <CustomButton text1="Save" onPress={onUpdatePressed} fgColor={'#FFFFFF'} />
                </View>



                <View
                    style={{
                        flex: 1,
                        // justifyContent: 'flex-end',
                    }}
                ></View>

                <NavBar
                    map={Map}
                    setting={Setting}
                    home={Home}
                    profil={Profile}


                ></NavBar>
            </ImageBackground>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({

    Texts: { fontWeight: 'bold', fontSize: 18, marginLeft: 12, paddingTop: 16, color: 'white' },
    Views: { flexDirection: 'row', width: "65%", }
})
