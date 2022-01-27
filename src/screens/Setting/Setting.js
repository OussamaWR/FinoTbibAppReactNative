import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import NavBar from '../../components/Menu/NavBar'
import CustomInput from '../../components/CustomInput'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'

const Setting = () => {

    //[userInfo,setUserInfo]=useState([])

    const navigation = useNavigation();
    const onRegisterPressed=()=>{
        navigation.navigate('HomeClient')
    }

    useEffect(
        ()=>{
            fetch('http://192.168.1.105:8080/Mobile%20API/getUserInfo.php')
            .then(res=>{ console.log(res+'mmmmmm') 
                return res.json() })
            .then(
                res=>{
                    console.log(res+'nnnnnn')
                    setFullname('fullname')
                })
            .catch(err=>console.warn(err+' c cm m'))
        }
    )

    const Map=()=>{
        navigation.navigate('Localisation')
    }

    const Home=()=>{
        navigation.navigate('HomeClient')
    }


    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
   


    return (
        <View
        >

            <ImageBackground source={require('../../../assets/images/Back/Back5.gif')} resizeMode="cover" style={{ width: "100%", height: "100%" }}>
            {/* <ImageBackground  resizeMode="cover" style={{ width: "100%", height: "100%" }}> */}
                <View
                    style={{ flexDirection: 'row', marginBottom:130,backgroundColor:'#56ADE7',paddingTop:7, paddingBottom:7 }}
                >
                    <Image source={require('../../../assets/images/Setting.gif')} resizeMode='contain' style={{ width:45, height: 45, marginLeft: 30, }} />
                    <Text style={{ marginLeft: 75, fontWeight: 'bold', fontSize: 25,color:'white' }}>Setting</Text>
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

                <View style={styles.Views}>
                    <Text style={styles.Texts} >      Phone* </Text>
                    <CustomInput
                        secureTextEntry={false}
                        placeholder="Phone"
                        value={phone}
                        setValue={setPhone}
                        keyBaordTypeInput={'numeric'}
                    />
                </View>
                
                <View style={{alignItems:'center',width:"50%",marginLeft:120,}}>
                <CustomButton text1="Save" onPress={onRegisterPressed}  fgColor={'#FFFFFF'} />
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
                    

                ></NavBar>
            </ImageBackground>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({

    Texts: { fontWeight: 'bold', fontSize: 18, marginLeft: 12, paddingTop: 16, color:'white' },
    Views: { flexDirection: 'row', width: "65%", }
})
