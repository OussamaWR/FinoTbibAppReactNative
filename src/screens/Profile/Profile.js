import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Alert, ImageBackground, Image,Linking } from 'react-native'
import NavBar from '../../components/Menu/NavBar'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Subheading } from 'react-native-paper';
const Profile = () => {


    const [userData, setUserData] = useState({
        fullname: '',
        email: '',
        phone: ''
    })
    const { fullname, email, phone } = userData
    useEffect(async () => {
        try {
            const userData = await AsyncStorage.getItem('user')
            let userDataParsed = JSON.parse(userData)
            setUserData({
                fullname: userDataParsed.fullname,
                email: userDataParsed.email,
                phone: userDataParsed.phone
            })
        } catch (err) {
            Alert.alert('err', JSON.parse(err))
        }
    }, [])

    const navigation = useNavigation();



    const onLogOutPressed = () => {
        AsyncStorage.clear()
            .then(() => navigation.navigate('SignIn'))
            .catch(err => console.log(err))
    }

    const onPwdPressed = () => {
        navigation.navigate('ChangePassword')
    }


    const Map = () => {
        navigation.navigate('Localisation')
    }

    const Home = () => {
        navigation.navigate('HomeClient')
    }
    const Setting = () => navigation.navigate("Setting");
    const Profile = () => navigation.navigate("Profile");


    const onCallPressed = () => {
        let Number = '';
        if (Platform.OS === 'android') {
            Number = 'tel: 0637499636 ';
        } else {
            Number = 'telprompt:0637499636';
        }
        Linking.openURL(Number);
    }



    return (
        <View
        >

            <ImageBackground source={require('../../../assets/images/Back/Back4.gif')} resizeMode="cover" style={{ width: "100%", height: "100%" }}>
                <View
                    style={{ flexDirection: 'row', marginBottom: 130, backgroundColor: '#56ADE7', paddingTop: 7, paddingBottom: 7 }}
                >
                    <Image source={require('../../../assets/images/Setting.gif')} resizeMode='contain' style={{ width: 45, height: 45, marginLeft: 30, }} />
                    <Text style={{ marginLeft: 75, fontWeight: 'bold', fontSize: 25, color: 'white' }}>Profil</Text>
                </View>

                <Card style={{ borderWidth: 3, borderColor: 'white', borderRadius: 8, margin: 8, backgroundColor: '#DFF6F0' }} >
                    <Card.Content  >
                        <Subheading>Fullname : {fullname} </Subheading>
                        <Subheading>Email : {email} </Subheading>
                        <Subheading>Phone : {phone} </Subheading>
                    </Card.Content>
                </Card>
                <View style={{ alignItems: 'center', width: "50%", marginLeft: 100, }}>
                    <CustomButton text1="Change Password" onPress={onPwdPressed} fgColor={'#FFFFFF'} bgColor="#FF5858" />
                    <CustomButton text1="Log Out" onPress={onLogOutPressed} fgColor={'#FFFFFF'} />
                    <CustomButton text1="Contact US" onPress={onCallPressed} fgColor={'#FFFFFF'} bgColor="#12D3CF" />
                </View>
                <View style={{ flex: 1 }}></View>
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

export default Profile

const styles = StyleSheet.create({

    Texts: { fontWeight: 'bold', fontSize: 18, marginLeft: 12, paddingTop: 16, color: 'white' },
    Views: { flexDirection: 'row', width: "65%", }
})
