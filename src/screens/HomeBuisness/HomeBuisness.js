import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Modal, Pressable, Image, View, ScrollView, TextInput, SafeAreaView, Alert } from 'react-native'
import NavBar from '../../components/Menu/NavBar'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph, Button, Searchbar } from 'react-native-paper';


const HomeBuisness = () => {


    const Navigation = useNavigation();
    const [doctorData, setDoctorData] = useState([])
    const [userId, setUserId] = useState(0)


    useEffect(() => {
        fetch('http://192.168.1.112:80/Mobile%20API/getDoctors.php')
            .then((res) => res.json())
            .then(res => setDoctorData(res))
            .catch(err => console.log(err))
    }, [])

    useEffect(
        async () => {
            try {
                const userData = await AsyncStorage.getItem('user')
                let userDataParsed = JSON.parse(userData)
                setUserId(userDataParsed.id)
            } catch (err) {
                Alert.alert('err', JSON.parse(err))
            }
        }, [])


    const Setting = () => Navigation.navigate("Setting");

    const Profile = () => Navigation.navigate("Profile");

    return (
        <ScrollView>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 32, marginBottom: 0, marginTop: 20, fontWeight: 'bold' }}> Welcome in FinoTbib  </Text>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 12, marginBottom: 20, marginTop: 0, textTransform: 'uppercase', }}>We wish you a speedy recovery </Text>
            <ScrollView>
                {doctorData.map((doctor, index) =>
                    <Card key={index} >
                        <Card.Content style={{ borderWidth: 3, margin: 6, borderRadius: 30, borderColor: '#1572A1', backgroundColor: '#DFF6F0' }} >
                            <View style={{ flexDirection: "row" }} >
                                <View style={{ flex: 3 }}>
                                    <Title>{ `${doctor.fullname}`}  </Title>
                                    <Paragraph>
                                        {`Spiciality: ${doctor.speciality}`}
                                    </Paragraph>

                                    
                                </View>
                                <View style={{ flex: 1 }}  >
                                    <Image source={require('../../../assets/images/doctor.png')} style={{ width: 100, height: 100,  }}></Image>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                )}
            </ScrollView>
            <SafeAreaView>
                <NavBar
                    setting={Setting}
                    profil={Profile}
                ></NavBar>
            </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    Input: {
        borderBottomWidth: 1,
        margin: 5,
        borderBottomColor: 'blue'
    }
});
export default HomeBuisness;

