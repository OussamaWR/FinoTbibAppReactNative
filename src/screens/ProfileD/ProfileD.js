import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Alert, ImageBackground, Image, Linking } from 'react-native'
import NavBar from '../../components/Menu/NavBar';
import NavBarDoc from '../../components/MenuD/NavBarDoc';
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Subheading } from 'react-native-paper';

const ProfileD = () => {


    const [userData, setUserData] = useState({
        fullname: '',
        email: '',
        phone: '',
        role: ''
    })
    const { fullname, email, phone } = userData
    useEffect(async () => {
        try {
            const userData = await AsyncStorage.getItem('user')
            let userDataParsed = JSON.parse(userData)
            setUserData({
                fullname: userDataParsed.fullname,
                email: userDataParsed.email,
                phone: userDataParsed.phone,
                role: userDataParsed.role
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
        navigation.navigate('HomeDoctor')
    }

    const Home = () => {
        navigation.navigate('HomeDoctor')
    }
    const Setting = () => navigation.navigate("SettingD");
    const Profile = () => navigation.navigate("ProfileD");


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

            <ImageBackground source={require('../../../assets/images/Back/15.gif')} resizeMode="cover" style={{ width: "100%", height: "100%" }}>

                <View
                    style={{ flexDirection: 'row', marginBottom: 130, backgroundColor: '#56ADE7', paddingTop: 7, paddingBottom: 7 }}
                >
                    <Image source={require('../../../assets/images/Setting.gif')} resizeMode='contain' style={{ width: 45, height: 45, marginLeft: 30, }} />
                    <Text style={{ marginLeft: 75, fontWeight: 'bold', fontSize: 25, color: 'white' }}>Profil</Text>
                </View>
                <View style={{ alignItems: 'center', width: '100%', height: 140, marginBottom: 16 }}>
                    <View style={{ alignItems: 'center', width: 140, height: 140, backgroundColor: 'white', borderBottomLeftRadius: 80, borderBottomRightRadius: 80, borderTopLeftRadius: 80, borderTopRightRadius: 80, borderWidth: 8, borderColor: '#56ADE7' }}>
                        <Image source={require('../../../assets/images/doctor.png')} style={{ width: 100, height: 100, marginTop: 12 }}></Image>
                    </View>
                </View>
                <Card style={{ borderWidth: 10, borderColor: 'white', borderRadius: 50, backgroundColor: '#CCEFFF', marginLeft: 15, marginRight: 15, marginBottom: 35 }} >
                    <Card.Content  >
                        <Subheading><Text style={{ fontWeight: 'bold' }}>Fullname</Text> : {fullname} </Subheading>
                        <Subheading><Text style={{ fontWeight: 'bold' }}>Email</Text> : {email} </Subheading>
                        <Subheading><Text style={{ fontWeight: 'bold' }}>Phone</Text> : {phone} </Subheading>
                    </Card.Content>
                </Card>
                <View style={{ alignItems: 'center', width: "50%", marginLeft: 100, }}>
                    <CustomButton text1="Change Password" onPress={onPwdPressed} fgColor={'#FFFFFF'} bgColor="#FF5733" />
                    <CustomButton text1="Contact US" onPress={onCallPressed} fgColor={'#FFFFFF'} bgColor="#16A085" />
                    <CustomButton text1="Log Out" onPress={onLogOutPressed} fgColor={'#FFFFFF'} bgColor="#1A5276" />
                </View>
                <View style={{ flex: 1 }}></View>
               
                <NavBarDoc
                    map={Map}
                    setting={Setting}
                    home={Home}
                    profil={ProfileD}
                ></NavBarDoc>

            </ImageBackground>
        </View>
    )
}

export default ProfileD

const styles = StyleSheet.create({

    Texts: { fontWeight: 'bold', fontSize: 18, marginLeft: 12, paddingTop: 16, color: 'white' },
    Views: { flexDirection: 'row', width: "65%", }
})
